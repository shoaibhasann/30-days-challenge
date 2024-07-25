// a5:t8
let promise1 = new Promise((res,rej) => {
    setTimeout(() => {
        res("Promise 1 resolved");
    }, 1000);
});

let promise2 = new Promise((res,rej) => {
    res("Promise 2 resolved");
});

let promise3 = new Promise((res,rej) => {
    setTimeout(() => {
        res("Promise 3 resolved");
    }, 3000);
});

// return all promises setteled values
Promise.all([promise1,promise2,promise3]).then((values) => {
    values.forEach((value) => console.log(value));
});

// a5:t9
// return single promise which resolved first
Promise.race([promise1,promise2,promise3]).then((result) => console.log(result));