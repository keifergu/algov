import React, { Component } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

class Home extends Component {
    render() {
        return (
            <Content style={{ padding: '10px 20px' }}>
                this is home;
            </Content>
        );
    }
}

export default Home;