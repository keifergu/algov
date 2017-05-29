import React, { Component } from 'react';
import { Layer, Stage } from 'react-konva';
import { inject, observer } from 'mobx-react';

import Histogram from './components/Histogram';

const VisualCanvas = inject('algoDataStore')(observer(
    class VisualCanvas extends Component {
        render() {
            const boundary = {
                width: 400,
                height: 300
            };
            const list = this.props.algoDataStore.currentData;
            return (
                <Stage {...boundary}>
                    <Layer ref="layer">
                        <Histogram list={list} {...this.refs}/>
                    </Layer>
                </Stage>
            );
        }
    }
))
export default VisualCanvas;