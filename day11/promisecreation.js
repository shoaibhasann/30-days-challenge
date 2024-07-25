// a1:t1
const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Promise Done"), 2000);
});

promise1.then((message) => console.log(message));

// a1:t2
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("Promise rejected"), 2000);
});

promise2.catch((message) => console.log(message));
