import React, { Component } from 'react';
import CodeRunner from './CodeRunner';
import { inject, observer } from 'mobx-react';
import { autoBinding } from '../../utils/';

import CodeMirror from 'react-codemirror';
import { Button } from 'antd';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

const runner = new CodeRunner();

const CodeEditor = inject('algoDataStore','codeStore')(observer(
    class CodeEditor extends Component {
        constructor() {
            super();
            autoBinding([
                'updateCode',
                'handleRun',
                'handleNext'],
            this);
        }

        updateCode(newCode) {
            this.props.codeStore.updateCode(newCode);
        }
        
        handleRun() {
            try {
                let processData = runner.runCode(this.props.codeStore.code);
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
            const options = {
		    	lineNumbers: true,
                mode: 'javascript'
		    };
            const code = this.props.codeStore.code;
            return (
                <div>
                    <CodeMirror
                        options={options}
                        value={code}
                        onChange={this.updateCode}
                    />
                    <Button type="primary" onClick={this.handleRun}>run</Button>
                    <Button type="primary" onClick={this.handleNext}>next</Button>
                </div>
            );
        }
    }
))

export default CodeEditor;