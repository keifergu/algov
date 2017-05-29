import React, { Component } from 'react';
import { Layer, Stage } from 'react-konva';
import { inject, observer } from 'mobx-react';

import Histogram from './components/Histogram';

const Visual = inject('algoDataStore')(observer(
    class Visual extends Component {
        render() {
            var list = this.props.algoDataStore.currentData;
            return (
                <Stage width={500} height={300}>
                    <Layer>
                        <Histogram list={list}/>
                    </Layer>
                </Stage>

            );
        }
    }
))
export default Visual;