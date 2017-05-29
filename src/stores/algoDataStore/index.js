import { action, extendObservable } from 'mobx';

function AlgoDataStore() {
    extendObservable(this, {
        data: [],
        index: 0,
        get currentData() {
            const data = this.data;
            return data.length === 0 ? [] : data[this.index];
        },
        set: action('setData', function(processData){
            this.data = processData;
        }),
        next: action('next', function() {
            if(this.index < this.data.length - 1){
                this.index++;
            }
        }),
        reset: action('reset', function() {
            this.index = 0;
        })
    })
}

const algoDataStore = new AlgoDataStore();

export default algoDataStore;
export { AlgoDataStore };