// a3:t4
const promiseResolver = async () => {
  let promise = new Promise((res, rej) => {
    setTimeout(
      () => res("Promise Resolved Successfully by Promise Resolve function"),
      1000
    );
  });

  const result = await promise;
  console.log(result);
};

promiseResolver();

// a3:t5
async function promiseRejector() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Promise Rejected: Internal Server Error"), 2000);
  });

  try {
    let result = await promise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

promiseRejector();
