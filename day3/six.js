let year = parseInt(prompt("Enter a year"));

function isLeapYear(year){
    let leapYear = (year % 4 === 0 && year % 100 !== 0) ||(year % 400 === 0);
    if(leapYear){
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

isLeapYear(year);