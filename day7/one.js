// A1:T1
const book = {
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
console.log(book);

// A1:T2
// acessing and logging title and author props of book
console.log(book.title);
console.log(book.author);

// A2:T3
// adding a new method to the book object
book.getDetails = function(){
    return `Title: ${this.title} and Author: ${this.author}`;
}

console.log(book.getDetails());

// A2:T4
// adding a new method to the book object
book.updateYear = function(newYear){
    this.year = newYear;
}

// using updateYear method
book.updateYear(1965);
console.log(book);


// A3:T5
book.library = {
  name: "City Library",
  books: [
    "Harry Potter",
    "Psychology of Money",
    "Pride and Prejudice",
    "The Great Gatsby",
    "Rework",
  ],
};
console.log(book.library);

// A3:T6
console.log(book.library.name); // logging library name into console

// logging library books titles
book.library.books.forEach(title => {
    console.log(title);
});

// A4:T7
book.getTitleAndYear = function(){
    return `title: ${this.title} & year: ${this.year}`;
}

let titleYear = book.getTitleAndYear();
console.log(titleYear);

// A5:T8
for(const property in book){
    console.log(`${property} : ${book[property]}`);
}

// A5:T9
const keys = Object.keys(book); // keys variable contain an array
console.log(keys);
const values = Object.values(book); // values varaible contain an array
console.log(values);


