import React, { Component } from 'react';
import CodeRunner from './CodeRunner';
import { inject } from 'mobx-react';
import { autoBinding } from '../../utils/';

import CodeMirror from 'react-codemirror';
import { Button } from 'antd';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

const runner = new CodeRunner();

const CodeEditor = inject('algoDataStore')(
    class CodeEditor extends Component {
        constructor() {
            super();
            this.state = {
                code: '// Code'
            }
            autoBinding([
                'updateCode',
                'handleRun',
                'handleNext'],
            this);
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

        updateCode(newCode) {
            this.setState({code:newCode});
        }

        componentWillMount() {
            const { code } = this.props;
            this.setState({code});
        }
        
        componentWillReceiveProps(nextProps) {
            const { code } = nextProps;
            this.setState({code});
        }
        
        render() {
            const options = {
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