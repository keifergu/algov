import React, { Component } from 'react';
import { Layer, Stage } from 'react-konva';
import { inject, observer } from 'mobx-react';

import Histogram from './components/Histogram';

const Visual = inject('algoDataStore')(observer(
    class Visual extends Component {
        render() {
            const boundary = {
                width: 500,
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
export default Visual;