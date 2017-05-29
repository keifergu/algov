import { observable, autorun } from 'mobx';
import { swap } from './methods';

let privateMethod = {
	observe: Symbol('observe')
};

export default class CodeRunner {
	processData = [];
    constructor(config) {
		;
    }

	/**
	 * 执行代码的方法
	 * @param {String} code 需要执行的代码
	 * @return 返回处理过程中数据状态的数组
	 */
    runCode(code){
		let methods = [swap];
		let observe = this[privateMethod.observe].bind(this);

		let runner = function(observe,swap){
			// eslint-disable-next-line
			eval(code);
		}

		runner.call(null,observe,...methods);
		return this.processData;
    }

	/**
	 * 对数据建立观测
	 * 在输入的代码中使用该方法创建变量，即可将变量的变化过程保存
	 * @param {*} arg 需要观测的数据
	 */
	[privateMethod.observe](data) {
		let that = this;
		let $$data = observable(data);
		/* 观察状态改变的函数 */
		autorun(function() {
			that.processData.push($$data.slice());
		});
		return $$data;
	}
}