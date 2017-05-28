import React, { Component } from 'react';

import CodeRunner from './CodeRunner';
import { autoBinding } from '../utils/';

var runner = new CodeRunner();

class CodeEditor extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            code: `let a = view([1,2,3]);\nswap(1,2,a);`,
        };
        autoBinding([
            'onChange',
            'handleRun',
            'handleNext'],
        this);
    }
    
    onChange(e) {
        let code = e.target.value;
        this.setState({code});
    }
    
    handleRun() {
        try {
            let processData = runner.runCode(this.state.code);
            // this code position ?
            this.props.onRun(processData);
        } catch(e) {
            //TODO: log error message
            throw new Error(e);
        }
    }
    
    handleNext(){
        this.props.onNext();
    }
    render() {
        return (
            <div>
                <textarea type="text"
                    value={this.state.code}
                    onChange={this.onChange}
                />
                <button onClick={this.handleRun}>run</button>
                <button onClick={this.handleNext}>next</button>
            </div>
        );
    }
}

export default CodeEditor;