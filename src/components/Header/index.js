import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

class MyHeader extends Component {
    render() {
        return (
            <Header>
                <div className="logo" />
                <Menu mode="horizontal" theme="dark" style={{ lineHeight: '64px' }}>
                    <Menu.Item key="home">
                        <Link to="/home"><Icon type="home" />Home</Link>
                    </Menu.Item>
                    <Menu.Item key="algorithm">
                        <Link to="/algorithm"><Icon type="home" />Algorithm</Link>
                    </Menu.Item>
                    <Menu.Item key="playground">
                        <Link to="/playground"><Icon type="home" />Playground</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        );
    }
}

export default MyHeader;