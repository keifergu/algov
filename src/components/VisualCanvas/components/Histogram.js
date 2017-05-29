import React, { Component } from 'react';
import { Rect, Text, Group } from 'react-konva';

class Histogram extends Component {

    render() {
        const list = this.props.list || [];
        const rectInfo = list.map((v, k) => ({
            x: k * 30,
            y: 200,
            width: 20,
            height: -20 * v,
            fill: 'blue',
            stroke: 'black',
            strokeWidth: 4
        }));
        const textInfo = list.map((v, k) => {
            return {
                x: k * 30,
                y: 200,
                text: v,
                fontSize: 30,
                fontFamily: 'Calibri',
                fill: 'green'
            }
        });
        return (
            <Group>
                {rectInfo.map((conf, k) => <Rect {...conf} key={k}/>)}
                {textInfo.map((conf, k) => <Text {...conf} key={k}/>)}
            </Group>

        );
    }
}

export default Histogram;