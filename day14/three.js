class Account {
    #balance;

    constructor(){
        this.#balance = 2000; // initial amount for opening account
    }

    deposit(amount){
        if(amount <= 0){
            console.log("Amount is invalid");
            return;
        } else {
            this.#balance += amount;
            console.log(`Rs. ${amount} credited in your account curr balance: ${this.#balance}`);
        }
    }

    withdraw(amount){
        if(amount > this.#balance){
            console.log("Insufficient Balance");
            return;
        } else {
            this.#balance -= amount;
            console.log(`Rs. ${amount} deposited from your account remain balance: ${this.#balance}`);
        }
    }

    checkBalance(){
        console.log(`Balance: ${this.#balance}`);
    }
}

const account1 = new Account();
account1.deposit(10000); // deposited 10000 rs. in the account1
account1.withdraw(3000); // withdraw 3000 rs. from the account1
account1.checkBalance(); // checking account balance
