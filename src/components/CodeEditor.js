import React, { Component } from 'react';
import {observable,autorun} from 'mobx';

var swap = function (i,j,a){
	var tmp = a[i]
	a[i] = a[j]
	a[j] = tmp
}

var results = []
function view(arg) {
	arg = observable(arg)
	/* 观察状态改变的函数 */
	autorun(function() {
	    console.log(
	        arg.slice()
	    );
        results.push(arg.slice());
	});
	return arg
}

class CodeEditor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            code: `let a = view([1,2,3]);\nswap(1,2,a);`,
        };
        this.onChange = this.onChange.bind(this);
        this.handleRun = this.handleRun.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }
    
    onChange(e) {
        let code = e.target.value;
        this.setState({code});
    }
    
    handleRun() {
        eval(this.state.code);
        this.props.onRun(results);
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