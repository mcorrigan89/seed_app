import * as Enzyme from 'enzyme';
import * as React from 'react';
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

import { HomeComponent } from './index';

it('HomeComponent', () => {
    const result = Enzyme.shallow(<HomeComponent />).contains(<div>Hello Home</div>);
    expect(result).toBeTruthy();
});