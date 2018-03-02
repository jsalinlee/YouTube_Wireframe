import React from 'react'
import { Switch, Route } from 'react-router'
import HomePage from './pages/homePage';
import SearchPage from './pages/searchPage';

export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={ HomePage } />
                <Route path='/search' component={ SearchPage } />
            </Switch>
        )
    }
}

// render={(props) => (<HomePage {...props}/>)}
