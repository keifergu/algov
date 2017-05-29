import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <Link to="/"><Icon type="home" />Home</Link>
                    </Menu.Item>
                    <Menu.Item key="algorithm">
                        <Link to="/algorithm"><Icon type="home" />Algorithm</Link>
                    </Menu.Item>
                    <Menu.Item key="playground">
                        <Link to="/playground"><Icon type="home" />Playground</Link>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Header;