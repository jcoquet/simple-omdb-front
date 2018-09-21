import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import View from '../components/searchbox/View'

Enzyme.configure({ adapter: new Adapter() });

const fetchMovies = jest.fn();

beforeEach(() => {
    jest.clearAllMocks();
});

describe('<SearchBox />', () => {
    it('should show an error message depending on the state', () => {
        const wrapper = shallow(<View />);
        expect(
            wrapper.containsMatchingElement(
                <span>Ho please...</span>
            )
        ).toBeFalsy();
        wrapper.setState({ error: true });
        expect(
            wrapper.containsMatchingElement(
                <span>Ho please...</span>
            )
        ).toBeTruthy();
    });

    it('should fetch only when the field is filled', () => {
        const inputTextValue = 'some title';
        const wrapper = shallow(<View fetchMovies={fetchMovies} />);

        // initialy the error state is false
        expect(wrapper.state('error')).toBeFalsy();

        // and fetch as not been called
        expect(fetchMovies.mock.calls.length).toBe(0);

        // If we simulate a form submit
        wrapper.simulate('submit', { preventDefault: jest.fn() });
        
        // The error state become true
        expect(wrapper.state('error')).toBeTruthy();

        // and still no fetch
        expect(fetchMovies.mock.calls.length).toBe(0);
        
        // But if we fill the form
        // wrapper.setState({value: 'some title'});
        wrapper.find('input').simulate('change', {
            target: { value: inputTextValue }
        })
        
        // and submit again
        wrapper.simulate('submit', { preventDefault: jest.fn() });
        
        // fetch is called
        expect(fetchMovies.mock.calls.length).toBe(1);
        
        // with the value of the field
        expect(fetchMovies.mock.calls[0][0]).toEqual(inputTextValue);
    });
})