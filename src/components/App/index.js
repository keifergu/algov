import React, {Component} from 'react';
import { autoBinding } from '../../utils';

import Visual from '../Visual';
import CodeEditor from '../CodeEditor';

import './App.css';

class App extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            results: [[]],
            index: 0
        }

        autoBinding([
            'handleRun',
            'handleNext'],
        this);
    }

    handleRun(results) {
        this.setState({
            results
        });
    }

    handleNext(){
        let {index, results} = this.state; 
        if (index < results.length - 1) {
            index++;
            this.setState({index});
        } else {
        }
    }

    render() {
        let {results, index} = this.state
        return (
            <div className = "App" >
                <Visual list={results[index]}/>
                <CodeEditor onRun={this.handleRun} onNext={this.handleNext} />
            </div>
        );
    }
}

export default App;