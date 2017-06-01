import React, { Component } from 'react';
import VisualAlgo from '../VisualAlgo';
import { Layout, Menu, Icon } from 'antd';
import { inject } from 'mobx-react';
import * as algorithm from '../../assert/algorithm';

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

class AlgorithmList extends Component {
    constructor() {
        super();
        this.state = {algorithmName:'bubbleSort'}
    }

    changeAlgorithmName(e) {
        this.setState({algorithmName:e.key});
    }

    render() {
        const menuList = [
            {
                key: 'sort',
                icon: 'user',
                title: '排序',
                items:[
                    ['bubbleSort','冒泡排序'],
                    ['inserSort','插入排序'],
                    ['mergeSort','合并排序'],
                    ['quickSort','快速排序']
                ]
            },
            {
                key: 'map',
                icon: 'laptop',
                title: '图算法',
                items:[]
            },
            {
                key: 'dynamic',
                icon: 'notification',
                title: '动态规划',
                items:[]
            },
        ];
        const name = this.state.algorithmName;
        return (
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['bubbleSort']}
                    defaultOpenKeys={['sort']}
                    onClick={(e)=>{this.changeAlgorithmName(e)}}
                    style={{ height: '100%' }}
                    >
                    {menuList.map((menu) => (
                        <SubMenu key={menu.key} title={<span><Icon type={menu.icon} />{menu.title}</span>}>
                            {menu.items.map((item) => <Menu.Item key={item[0]}>{item[1]}</Menu.Item>)}
                        </SubMenu>
                    ))}
                    </Menu>
                </Sider>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    <VisualAlgo code={algorithm[name]}/>
                </Content>
            </Layout>
        );
    }
}

export default AlgorithmList;