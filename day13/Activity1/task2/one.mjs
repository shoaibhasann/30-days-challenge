export const person = {
    name: "Shoaib Hasan",
    age: 23,
    skills: ["MERN Stack Developer", "SQL", "C", "C++"],
    bio: function (){
        console.log(`Hii my name is ${this.name} and my age is ${this.age}. I am ${this.skills[0]}.`)
    }
}