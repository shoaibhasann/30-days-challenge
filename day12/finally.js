// T3
function fetchData(url){
    return new Promise((resolve, reject) => {
        if(url){
            resolve(`Data from ${url}`);
        } else {
            reject("No URL provided");
        }
    });
}

fetchData("https://api.github.com/")
 .then((data) => console.log(data))
 .catch((err) => console.log(err))
 .finally(() => console.log("Promise settle successfully"));