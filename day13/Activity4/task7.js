import axios from "axios";

// making api get request for fetching data using axios
async function fetchData(){
    try {
        const response = await axios.get(
          "https://official-joke-api.appspot.com/random_joke"
        );
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }

}

fetchData();