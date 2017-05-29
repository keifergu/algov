import React, { Component } from 'react';
import { Rect, Group } from 'react-konva';

class Histogram extends Component {
    render() {
        var list = this.props.list || [];
        return (
            <Group>
                {list.map((v,k)=>{
                    return (
                        <Rect
                            x={k*30} y={200}
                            width={20} height={-20*v}
                            fill='blue' key={k}
                        />
                    )
                })}
            </Group>

        );
    }
}

export default Histogram;