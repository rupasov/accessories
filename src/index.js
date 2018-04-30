import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';

const middlewares = [];

middlewares.push(thunk);

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
