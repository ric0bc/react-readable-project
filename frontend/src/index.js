import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';

import './index.css';
import App from './app/App';
import rootReducer from './app/reducers'
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
