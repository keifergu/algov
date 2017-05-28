export function autoBinding(methodNameArray, thisArg) {
    if(methodNameArray instanceof Array !== true) {
        throw new TypeError("method name arguments must be array");
    }
    methodNameArray.forEach(function(name) {
        thisArg[name] = thisArg[name].bind(thisArg)
    },);
    
}