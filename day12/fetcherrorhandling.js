// T8
fetch("https://api.ipi.org?format=json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Error: ", err));


// T9
async function fetchData(){
    try {
        const response = await fetch("https://invalidurl.com");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error: while making request", error);
    }
}

fetchData();