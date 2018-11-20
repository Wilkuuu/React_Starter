import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componens/App';
import * as serviceWorker from './serviceWorker';
import Tabel from './componens/Table';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Tabel />, document.getElementById('tabela'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
