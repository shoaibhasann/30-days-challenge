let applicantAge = parseInt(prompt("Enter your age"));

function isEligibleToVote(age){
    if(age >= 18){
        console.log("You're eligible to vote");
    } else {
        console.log("You're underage");
    }
}

isEligibleToVote(applicantAge);