import React, {Component} from 'react';

import Bar from './components/Bar';
import CodeEditor from './components/CodeEditor';

import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            results: [[]],
            index: 0
        }
        this.handleRun = this.handleRun.bind(this);
        this.handleNext = this.handleNext.bind(this);
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
                <Bar list={results[index]}/>
                <CodeEditor onRun={this.handleRun} onNext={this.handleNext} />
            </div>
        );
    }
}

export default App;