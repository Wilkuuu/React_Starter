import React from 'react';
import Header from './Header';
import Orders from './Orders';
import AdminPanel from './AdminPanel';
import Inventory from './Inventory';

class App extends React.Component {

    render(){
        return (<React.Fragment>
        <AdminPanel/>
        <Orders/>
        <Header/>
        <Inventory/>
        </React.Fragment>)

    }

}

export default App; 