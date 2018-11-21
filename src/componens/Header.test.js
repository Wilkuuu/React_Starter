import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Header tests' , () => {


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Correct', () => {
  const wrapp = shallow(<Header/>);
  //console.log(wrapp.debug());
  expect(wrapp.find('h1').text()).toBe('Black Books');
  wrapp.setState
});

})
