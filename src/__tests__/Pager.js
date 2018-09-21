import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Pager from '../components/pager/View'

Enzyme.configure({ adapter: new Adapter() });

const fetchMovies = jest.fn();

beforeEach(() => {
    jest.clearAllMocks();
});

describe('<Pager />', () => {
    it('renders both buttons', () => {
        const wrapper = shallow(<Pager current="2" total="310" term="some title" paginate={() => {}} />);
        expect(wrapper.find('span').length).toBe(2);
    });
    it('renders only prev button', () => {
        const wrapper = shallow(<Pager current="2" total="10" term="some title" paginate={() => {}} />);
        expect(wrapper.find('span').length).toBe(1);
        expect(wrapper.find('span').text()).toBe('prev');        
    });
    it('renders only next button', () => {
        const wrapper = shallow(<Pager current="1" total="310" term="some title" paginate={() => {}} />);
        expect(wrapper.find('span').length).toBe(1);
        expect(wrapper.find('span').text()).toBe('next');        
    });
    it('goes to the prev page', () => {
        const wrapper = shallow(<Pager current="2" total="310" term="some title" paginate={fetchMovies} />);
        wrapper.find('.prev').simulate('click');
        expect(fetchMovies.mock.calls.length).toBe(1);
        expect(fetchMovies.mock.calls[0][1]).toEqual(1);
    });
    it('goes to the next page', () => {
        const wrapper = shallow(<Pager current="3" total="310" term="some title" paginate={fetchMovies} />);
        wrapper.find('.next').simulate('click');
        expect(fetchMovies.mock.calls.length).toBe(1);
        expect(fetchMovies.mock.calls[0][1]).toEqual(4);
    });
})