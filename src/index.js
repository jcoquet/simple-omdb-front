import React from 'react';
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import omdbApp from './reducers';
import Root from './components/Root';

const loggerMiddleware = createLogger()

const store = createStore(
    omdbApp,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

render(
    <Root store={store} />,
    document.getElementById('root')
)

registerServiceWorker();