// A1:T1
let name = "Shoaib";
let age = 23;
// creating string using template literals
let detail = `${name} and ${age}`;
console.log(detail);

// A1:T2
let multiLineString = `Name: ${age}
Age: ${age}
this is a multi line string using template literals`;
console.log(multiLineString);

// A2:T3
const nums = [10,20,30,40,50,60];
const [first, ...rest] = nums;
let last = rest.pop();
console.log(first);
console.log(last);

// A2:T4
const book = {
    title: "Harry Potter",
    author: "J.K. Rowling"
}

const { title, author } = book;
console.log(title);
console.log(author);

// A3:T5
const heros = ["Hulk", "AntMan", "SpiderMan"];
const avengers = ["IronMan", "Thor", ...heros];
console.log(avengers);

// A3:T6
function sum(...args){
    return args.reduce((sum, current) => sum + current, 0);
}

console.log(sum(10,20,40,80));

// A4:T7
function product(num1, num2 = 1){
    return num1 * num2;
}

console.log(product(100));
console.log(product(100,4));

// A5:T8
const username = "shoaib.hasan";
const platform = "Instagram";

const instaUser = {
    username,
    platform,
    login(){
        console.log(`${this.username} successfully loggedin.`)
    },
}
console.log(instaUser);

// A5:T9
const productId1 = 'A328';
const productId2 = 'B987';
const quantity1 = 100;
const quantity2 = 300;

const store = {
    [productId1] : quantity1,
    [productId2] : quantity2, // computed property

    addProduct(productId, quantity){
        if(this[productId]){
            this[productId] += quantity;
        } else {
            this[productId] = quantity;
        }
    }
}
store.addProduct("C567", 500);
console.log(store);