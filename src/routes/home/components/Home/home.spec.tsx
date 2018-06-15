import { setUpTestsWithDOM } from '@tests/setup';
const Enzyme = setUpTestsWithDOM();
import * as React from 'react';
import { Actions } from '../../module/actions';

import { HomeComponent } from '@routes/home/components/Home';

it('HomeComponent', () => {
    const result = Enzyme.mount(<HomeComponent title={'Flerp'} clearTitle={Actions.clearTitle}/>);
    expect(result.props().title).toEqual('Flerp');
    result.setProps({ title: 'Derp'});
    expect(result.props().title).toEqual('Derp');
});