import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { View } from '../components/Loader'

Enzyme.configure({ adapter: new Adapter() });

describe('<Loader />', () => {
    it('should be visible', () => {
        const wrapper = shallow(<View status={true} />);
        expect(
            wrapper.hasClass('true')
        ).toBeTruthy();
    });
    it('should be hidden', () => {
        const wrapper = shallow(<View status={false} />);
        expect(
            wrapper.hasClass('false')
        ).toBeTruthy();
    });
})