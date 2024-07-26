// T4
class CustomError extends Error{
    constructor(message, errCode){
        super(message);
        this.name = "Custom Error: ";
        this.errCode = errCode;
    }
}

try {
    throw new CustomError("Something went wrong", 404);
} catch (error) {
    console.log(error);
}


// T5
function login(username){
    if(username){
        console.log("LoggedIn successfully");
    } else {
        throw new CustomError("Enter a valid username", 400);
    }
}

try {
    login("");
} catch (error) {
    console.log(error);
}