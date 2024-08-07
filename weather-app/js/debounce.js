export function debounce(func, delay){
    let timer;

    return function(...args){
        clearTimeout(timer); // clear old timer or previous function call
        timer = setTimeout(() => {
            func.apply(this,args); // calling function which has to be debounced
        }, delay);
    }
}