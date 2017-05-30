import React, { Component } from 'react';
import VisualCanvas from '../VisualCanvas';
import CodeEditor from '../CodeEditor';
import { Row, Col } from 'antd';

class VisualAlgo extends Component {
    render() {
        return (
            <Row gutter={16}>
                <Col span={12}><VisualCanvas /></Col>
                <Col span={12}><CodeEditor /></Col>
            </Row>
        );
    }
}

export default VisualAlgo;