import { action, extendObservable } from 'mobx';
import * as algorithm from './algorithm';

function CodeStore() {
    extendObservable(this, {
        code: algorithm['bubbleSort'],
        updateCode: action('updateCode', function(newCode){
            this.code = newCode;
        }),
        changeAlgorithm: action('changeAlgorithm', function(name) {
            this.code = algorithm[name];
        }),
    })
}

const codeStore = new CodeStore();

export default codeStore;
export { CodeStore };