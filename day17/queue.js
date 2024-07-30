// T5
class Queue{
    #items;
    constructor(){
        this.#items = [];
        this.length = 0;
    }

    enqueue(data){
        this.#items.push(data);
        this.length++;
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return null;
        }

        this.length--;
        return this.#items.shift();
    }

    front(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return null;
        }

        return this.#items[0];
    }

    isEmpty(){
        return this.length === 0;
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return null;
        }
        console.log(this.#items.join(" "));
    }
};

const queue = new Queue();
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
queue.enqueue(400);
queue.enqueue(500);
console.log(queue.front()); // Output: 100
queue.dequeue();
queue.print();

// T6
class PrintJob{
    constructor(jobName, openings){
        this.jobName = jobName;
        this.openings = openings;
    }

    toString(){
        return `${this.jobName} (${this.openings} openings)`;
    }
};

const printerQueue = new Queue();
printerQueue.enqueue(new PrintJob("Front-end developer", 10));
printerQueue.enqueue(new PrintJob("Finance Assistant", 10));
printerQueue.enqueue(new PrintJob("Sales Executive", 30));
printerQueue.enqueue(new PrintJob("Data Scientist", 5));

// printing jobs
while(printerQueue.length > 0){
    const currentJob = printerQueue.dequeue();
    console.log(currentJob.toString());
}

if(printerQueue.isEmpty()){
    console.log("All jobs are printed");
}