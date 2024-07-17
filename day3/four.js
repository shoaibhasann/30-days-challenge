let score = parseFloat(prompt("Enter student score"));

function setGrade(score){
    let grade;
    switch(true){
        case (score >= 90 && score <= 100):
            grade = "A";
            break;
        case (score >= 80 && score <= 89):
            grade = "B";
            break;
        case(score >= 70 && score <= 79):
            grade = "C";
            break;
        case(score >= 60 && score <= 69):
            grade = "D";
            break;
        case(score >= 0 && score < 60):
            grade = "E";
            break;
        default: 
            grade = "Invalid score";
            break;
         
    }
    return grade;
}

let grade = setGrade(score);
console.log(grade);