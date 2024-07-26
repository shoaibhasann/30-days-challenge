export default function login(username, password){
    if(username && password){
        console.log(`Welcome back ${username}`);
    } else {
        if(!username){
            console.log("username is incorrect");
        } else {
            console.log("Password is incorrect");
        }
    }
}