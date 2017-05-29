import React, { Component } from 'react';
import { inject } from 'mobx-react';
import CodeRunner from './CodeRunner';
import { autoBinding } from '../../utils/';

const runner = new CodeRunner();

const CodeEditor = inject('algoDataStore')(
    class CodeEditor extends Component {
        constructor(...args) {
            super(...args);
            this.state = {
                code: `let a = observe([1,2,3]);\nswap(a,1,2);`,
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
)

export default CodeEditor;