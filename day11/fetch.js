function getRandomJoke(){
   fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

// this function log a random joke
getRandomJoke();


async function getIPAddress(){
    try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        console.log(`Your IP Address: ${data.ip}`);
    } catch (error) {
        console.log(error);
    }
}
// this function log your IPv4 address
getIPAddress();

