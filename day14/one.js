// T1
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log("Person constructor called");
    }

    greet(){
        console.log(`Hii my name is ${this.name} and age is ${this.age}`);
    }

    // T2
    updateAge(newAge){
        this.age = newAge;
        console.log("Updated Age: ", this.age);
    }

    static genericGreeting(){
        console.log("Hii from Person class");
    }
};

const shoaib = new Person("Shoaib", 24);
shoaib.greet();
shoaib.updateAge(23);

// T3
class Student extends Person {
    static studentCount = 0; // static property
    constructor(studentId, name, age){
        super(name, age);
        this.studentId = studentId;
        Student.studentCount += 1;
        console.log("Student constructor called")
    }

    getStudentId(){
        return this.studentId;
    }

    // T4
    greet(){
        console.log(`Student ID: ${this.studentId} and Name: ${this.name} and Age: ${this.age} `);
    }

    // T6
    getStudentCount(){
        console.log(`Total Student: ${Student.studentCount}`);
    }
}

const student1 = new Student(1001, "Rio", 23);
const student2 = new Student(1002, "Oslo", 34);
console.log(student1.getStudentId());
console.log(student1.greet());
student2.getStudentCount();

// T5
Person.genericGreeting(); // calling static method