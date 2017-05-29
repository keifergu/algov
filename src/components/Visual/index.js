import React, { Component } from 'react';
import {Layer, Stage } from 'react-konva';

import Histogram from './components/Histogram';

class Visual extends Component {
    render() {
        var list = this.props.list;
        return (
            <Stage width={500} height={300}>
                <Layer>
                    <Histogram list={list}/>
                </Layer>
            </Stage>

        );
    }
}

export default Visual;