import React from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import './css/App.css';

import * as reducers from './reducers/reducers';
reducers.routing = routerReducer;

// Import any necessary components
import Main from './components/Main';
import Form  from './components/Form';
import ContactList from './components/ContactList';

// Create the store and pass in all the reducers using combineReducers. Pass in the devTools objects as the second argument
const store = createStore(combineReducers(reducers), window.devToolsExtension && window.devToolsExtension());

const history = syncHistoryWithStore(hashHistory, store);

export default function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Main}>
                    {/* IndexRoute is used here because we want / to essentially be the same as /new. */}
                    <IndexRoute component={Form} />
                    <Route path="new" component={Form} />
                    <Route path="contacts" component={ContactList} />
                </Route>
            </Router>
        </Provider>
    );
}
