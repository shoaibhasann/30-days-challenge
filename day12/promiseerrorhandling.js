// T6
const promise = new Promise((resolve, reject) => {
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    let isResolve = randomNumber % 2 == 0 ? true : false;

    if(isResolve){
        setTimeout(() => resolve("Promise Resolved"), 2000);
    } else {
        setTimeout(() => reject("Promise Rejected"), 2000);
    }
});

promise.then((result) => console.log(result))
 .catch((err) => console.log('Error: ',err));


async function asyncOperation(){
    const promise = new Promise((resolve, reject) => {
      let randomNumber = Math.floor(Math.random() * 20) + 1;
      let isResolve = randomNumber % 2 == 0 ? true : false;

      if (isResolve) {
        setTimeout(() => resolve("Promise Resolved"), 2000);
      } else {
        setTimeout(() => reject("Promise Rejected"), 2000);
      }
    });

    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.log('Error: ', error);
    }
}

asyncOperation();