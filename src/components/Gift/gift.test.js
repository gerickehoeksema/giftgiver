import React from 'react'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Gift from './Gift'

configure({ adapter: new Adapter() });

describe('Gift', () => {
    const gift = shallow(<Gift />)

    it('renders properly', () => {
        expect(gift.debug()).toMatchSnapshot();
    })

    it('initializes a person and a present `state`', () => {
        expect(gift.state()).toEqual({person: '', present: ''})
    })

    describe('when typing into person input', () => {
        const person = 'G'

        beforeEach(() => {
            gift.find('.person-input').simulate('change', { target: { value: person}})
        })

        it('updates the person in `state`', () => {
            expect(gift.state().person).toEqual(person)
        })
    })

    describe('when typing into person input', () => {
        const present = 'Bike'

        beforeEach(() => {
            gift.find('.present-input').simulate('change', {target: {value: present}})
        })

        it('updates the present in `state`',() => {
            expect(gift.state().present).toEqual(present)
        })
    })
})