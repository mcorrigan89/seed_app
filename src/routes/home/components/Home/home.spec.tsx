import { setUpTestsWithDOM } from '@tests/setup';
import * as renderer from 'react-test-renderer';
const Enzyme = setUpTestsWithDOM();
import * as React from 'react';
import { Actions } from '../../module/actions';

import { HomeComponent } from '@routes/home/components/Home';

describe('HomeComponent', () => {

    it('Should match snapshot', () => {
        const tree = renderer.create(<HomeComponent title={'Flerp'} updateTitle={Actions.updateTitle} clearTitle={Actions.clearTitle} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should have a title prop', () => {
        const result = Enzyme.mount(<HomeComponent title={'Flerp'} updateTitle={Actions.updateTitle} clearTitle={Actions.clearTitle} />);
        expect(result.props().title).toEqual('Flerp');
        result.setProps({ title: 'Derp' });
        expect(result.props().title).toEqual('Derp');
        result.unmount();
    });

    it('Should update state on typing', () => {
        const result = Enzyme.mount(<HomeComponent title={'Flerp'} updateTitle={Actions.updateTitle} clearTitle={Actions.clearTitle} />);
        expect(result.state().title).toEqual('Flerp');
        const input = result.find('input');
        expect(input.prop('value')).toEqual('Flerp');
        input.prop('onChange')({ currentTarget: { value: 'Changed' }});
        expect(result.state().title).toEqual('Changed');
        result.unmount();
    });

    it('Should call updateTitle when button clicked', () => {
        const mock = jest.fn();
        const result = Enzyme.mount(<HomeComponent title={'Flerp'} updateTitle={mock} clearTitle={Actions.clearTitle} />);
        const button = result.find('button');
        expect(mock).not.toHaveBeenCalled();
        button.prop('onClick')();
        expect(mock).toHaveBeenCalled();
        result.unmount();
    });

    it('Should call updateTitle with new state', () => {
        const mock = jest.fn();
        const result = Enzyme.mount(<HomeComponent title={'Flerp'} updateTitle={mock} clearTitle={Actions.clearTitle} />);
        const input = result.find('input');
        const button = result.find('button');
        input.prop('onChange')({ currentTarget: { value: 'Derp!' }});
        button.prop('onClick')();
        expect(mock).toHaveBeenCalledWith('Derp!');
        result.unmount();
    });
    
});