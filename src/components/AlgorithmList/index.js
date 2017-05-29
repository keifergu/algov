import React, { Component } from 'react';
import VisualAlgo from '../VisualAlgo';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

class AlgorithmList extends Component {
    render() {
        return (
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sort']}
                    style={{ height: '100%' }}
                    >
                    <SubMenu key="sort" title={<span><Icon type="user" />排序</span>}>
                        <Menu.Item key="1">冒泡排序</Menu.Item>
                        <Menu.Item key="2">插入排序</Menu.Item>
                        <Menu.Item key="3">合并排序</Menu.Item>
                        <Menu.Item key="4">快速排序</Menu.Item>
                    </SubMenu>
                    <SubMenu key="map" title={<span><Icon type="laptop" />图算法</span>}>
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="dynamic" title={<span><Icon type="notification" />动态规划</span>}>
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    <VisualAlgo />
                </Content>
            </Layout>
        );
    }
}

export default AlgorithmList;