import React from 'react';
import ReactDOM from 'react-dom';

import OrderView from './OrderView';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Test Order', () => {

   

    it('title of the book is displayed as uin props', () =>{
        const book ={
            name:"Book title"
        };
        const wrapper = shallow(<OrderView book={book}/>);
        expect(wrapper.find('.orderView').find('span').text()).toBe(book.name)
    })
})