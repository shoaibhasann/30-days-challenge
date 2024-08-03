// t1
const course = "JavaScript enables interactive web pages. With JavaScript, developers build dynamic and responsive sites.";
const regex1 = /JavaScript/g;

const found = course.match(regex1);
console.log(found);

// t2
const paragraph1 = "In 2023, over 50 million users accessed the platform";
const regex2 = /\d/g;

console.log(paragraph1.match(regex2));

// t3
const text = "In 2023, over 50 million users accessed the platform. Within 24 hours, 10 new features were released, attracting 100,000 additional subscribers. By 2024, the user base is expected to grow by 15%, reaching approximately 57.5 million active users.";
const regex3 = /\b[A-Z][a-z]*\b/g;
const matches = text.match(regex3);

console.log(matches);
