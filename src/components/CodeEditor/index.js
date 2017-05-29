import React, { Component } from 'react';
import CodeRunner from './CodeRunner';
import { inject } from 'mobx-react';
import { autoBinding } from '../../utils/';
import { bubbleSort } from '../../algorithm';

import CodeMirror from 'react-codemirror';
import { Button } from 'antd';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

const runner = new CodeRunner();

const CodeEditor = inject('algoDataStore')(
    class CodeEditor extends Component {
        constructor(...args) {
            super(...args);
            this.state = {
                code: bubbleSort,
            };
            autoBinding([
                'updateCode',
                'handleRun',
                'handleNext'],
            this);
        }
        
        updateCode(newCode) {
            this.setState({code:newCode});
        }
        
        handleRun() {
            try {
                let processData = runner.runCode(this.state.code);
                // this code position ?
                this.props.algoDataStore.set(processData);
            } catch(e) {
                //TODO: log error message
                throw new Error(e);
            }
        }
        
        handleNext(){
            this.props.algoDataStore.next();
        }
        render() {
            var options = {
		    	lineNumbers: true,
                mode: 'javascript'
		    };
            return (
                <div>
                    <CodeMirror
                        options={options}
                        value={this.state.code}
                        onChange={this.updateCode}
                    />
                    <Button type="primary" onClick={this.handleRun}>run</Button>
                    <Button type="primary" onClick={this.handleNext}>next</Button>
                </div>
            );
        }
    }
)

export default CodeEditor;