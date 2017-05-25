import React, { Component } from 'react';

class Bar extends Component {
    render() {
        var list = this.props.list;
        return (
            <div>
                {list.join(' ')}
            </div>
        );
    }
}

export default Bar;