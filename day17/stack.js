// T3
class Stack{
    #items;

    constructor(){
        this.#items = [];
        this.length = 0;
    }

    // add an element to the top of the stack
    push(data){
        this.#items.push(data);
        this.length++;
    }

    // remove element from top of the stack
    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return null;
        }
        this.length--;
        return this.#items.pop();
    }

    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return null;
        }
        return this.#items[this.#items.length - 1];
    }

    isEmpty(){
        return this.length === 0;
    }
};

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.peek()); // Output: 40
stack.pop();
console.log(stack.peek()); // Output: 30
console.log("length", stack.length); // Output: 3

// T4
function reverseString(str){
    const stack = new Stack();
    let reversedString = "";

    // pushing string element into stack
    for(let i = 0; i < str.length; i++){
        stack.push(str[i]);
    }

    while(stack.length > 0){
        reversedString += stack.pop();
    }

    return reversedString;

}

let name = "Structure";
console.log(reverseString(name));

