import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App'

configure({ adapter: new Adapter() });


describe('App', () => {
    const app = shallow(<App />);

    it('renders correctly', () => {
        expect(app.debug()).toMatchSnapshot();
    });
    
    it('initializes the `state` with an empty lifts of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    })

    describe('when clicking the `add gift` button', () => {
        beforeEach(()=>{
            app.find('.btn-add').simulate('click');
        })

        afterEach(() => {
            app.setState({gifts:[]})
        })

        it('adds a new gift to `state`', () => {
            expect(app.state().gifts).toEqual([{id: 1}])
        });
        
        it('adds a new gift to the rendered list', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        })

        it('creates a Gift component', () => {
            expect(app.find('Gift').exists()).toBe(true)
        })
    })    
})