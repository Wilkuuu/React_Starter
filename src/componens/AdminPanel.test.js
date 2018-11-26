import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel from './AdminPanel';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Admin Panel tests', () => {

    it('Adminpanel render correct', () => { 
    const div = document.createElement('div');
    ReactDOM.render(<AdminPanel/>, div);
    ReactDOM.unmountComponentAtNode(div);
    })

   it('Panel wyrenderowano', () => {
       const wrapper = shallow(<AdminPanel/>);
       expect(wrapper).toMatchSnapshot();
   })


})