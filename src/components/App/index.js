import React, {Component} from 'react';

import { Layout } from 'antd';
import Header from '../Header';
import DevTools from 'mobx-react-devtools';

import './App.css';

class App extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <DevTools />
            </Layout>
        );
    }
}

export default App;