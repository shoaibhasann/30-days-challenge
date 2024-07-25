// a2:t3
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url) {
        resolve(`Data from ${url}`);
      } else {
        reject("No URL provided");
      }
    }, 1000);
  });
}

fetchData("https://api.example.com/data")
  .then((data) => {
    console.log(data);
    return fetchData("https://api.example.com/data/1");
  })
  .then((data) => {
    console.log(data);
    return fetchData("https://api.example.com/more-data");
  })
  .then((data) => console.log(data))
  .catch((err) => console.log("Error", err))
  .finally(() => console.log("Promise resolved or rejected"));
