import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AdminPanel from './AdminPanel'
import PageNotFound from './PageNotFound'
import App from './App'
import { Provider } from 'react-redux'
import store from './Store/store'

export default class Router extends React.Component{
    render(){
        return  (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path ="/" component={App}/>
                        <Route exact path ="/admin" component={AdminPanel}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}


