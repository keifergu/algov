import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Playground from './components/Playground';
import AlgorithmList from './components/AlgorithmList';

import * as stores from './stores/';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider { ...stores }>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/algorithm" component={AlgorithmList}/>
        <Route path="/playground" component={Playground}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
