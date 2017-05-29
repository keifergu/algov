import React, {Component} from 'react';

import Header from '../Header';
import DevTools from 'mobx-react-devtools';

import './App.css';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header />
                <DevTools />
            </div>
        );
    }
}

export default App;