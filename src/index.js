import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import App from './components/App';
import * as stores from './stores/';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider { ...stores }>
    <Router>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
