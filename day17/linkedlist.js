// T1
class Node{
    constructor(value){
        this.value = value; // set the node value
        this.next = null; // intially node pointing to null
    }

};

// T2
class LinkedList{
    constructor(){
        this.head = null; // initially list is empty, so head is null
    }

    // append node to end of linked list

    append(data){
        const newNode = new Node(data);

        // check if list is empty
        if(!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head;

        // traversing to the last node of linked list
        while(current.next !== null){
            current = current.next;
        }

        current.next = newNode; // set the new node at end of linked list
    }

    print(){
        let current = this.head;
        let values = [];

        while(current !== null){
            values.push(current.value);
            current = current.next;
        }

        console.log(values.join(" -> "));
    }

    remove(){
        if(!this.head){
            console.log("List is empty");
            return;
        }

        // if list contain only one node
        if(!this.head.next){
            this.head = null;f
            return;
        }

        let current = this.head;

        // traversing to the second last node
        while(current.next && current.next.next !== null){
            current = current.next;
        }

        current.next = null;

    }


};

const myList = new LinkedList();
myList.append(20);
myList.append(30);
myList.append(40);
myList.append(150);
myList.append(100);
myList.remove();
myList.print();