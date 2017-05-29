import React, { Component } from 'react';
import VisualCanvas from '../VisualCanvas';
import CodeEditor from '../CodeEditor';

class Playground extends Component {
    render() {
        return (
            <div>
                <VisualCanvas />
                <CodeEditor />
            </div>
        );
    }
}

export default Playground;