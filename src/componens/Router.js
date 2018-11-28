import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AdminPanel from './AdminPanel';
import App from './App';
import NotFound from './NotFound';
import {Provider} from 'react-redux';
import store from './Store/Store';
 

export default class Router extends React.Component  {

    render() {
        return(
        <Provider store={store}>      
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/admin" component={AdminPanel}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
            </Provider>  

        )}

}