// T7
class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`; 
    }

    // T8
    set updateName({firstName, lastName}){
        this.firstName = firstName;
        this.lastName = lastName;
    }
};

const person1 = new Person("Shoaib", "Hasan", 24);
console.log(person1.fullName); // using the getter function
// using the setter function to update name
person1.updateName = {
    firstName: "Rio",
    lastName: "Nova"
}
console.log(person1.fullName);