import React from 'react';
import ReactDOM from 'react-dom';

import Order from './Orders';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Test Order', () => {

    it('Order render without problems', () => {
        const div = document.createElement('div');
        const order = [];
        ReactDOM.render(<Order order={order}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })    

    it('Snapschot matches', () =>{
        const order = [];
        const wrapper = shallow(<Order order={order}/>);
        expect(wrapper).toMatchSnapshot();
    })
})