import { setUpTestsWithDOM } from '@tests/setup';
const Enzyme = setUpTestsWithDOM();
import * as React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@store/store';

import { HomeContainer } from '@routes/home/containers/HomeContainer';

describe('HomeContainer', () => {
    it('title prop', () => {
        const store = configureStore({ home: { title: 'Flerp' } });
        const result = Enzyme.mount(<Provider store={store}><HomeContainer /></Provider>);
        expect(result.childAt(0).childAt(0).props().title).toEqual('Flerp');
    });

    it('updateTitle prop', () => {
        const store = configureStore({ home: { title: 'Flerp' } });
        const result = Enzyme.mount(<Provider store={store}><HomeContainer /></Provider>);
        expect(result.childAt(0).childAt(0).props().title).toEqual('Flerp');
        result.childAt(0).childAt(0).props().updateTitle('Derp');
        result.update();
        expect(result.childAt(0).childAt(0).props().title).toEqual('Derp');
    });

    it('clearTitle prop', () => {
        const store = configureStore({ home: { title: 'Flerp' } });
        const result = Enzyme.mount(<Provider store={store}><HomeContainer /></Provider>);
        expect(result.childAt(0).childAt(0).props().title).toEqual('Flerp');
        result.childAt(0).childAt(0).props().clearTitle();
        result.update();
        expect(result.childAt(0).childAt(0).props().title).toEqual('');
    });
});