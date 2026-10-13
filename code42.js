
class BankAccount {
    #balance = 0;

    constructor(balance) {
        this.#balance = balance;
    }

    // Getter
    get balance() {
        return this.#balance;
    }

    // Setter
    set balance(amount) {
        if (amount >= 0) {
            this.#balance = amount;
        } else {
            console.log("Balance cannot be negative");
        }
    }

    // Deposit money
    deposit(amount) {
        if (amount > 0) {
            this.balance = this.balance + amount;
            console.log("Deposited:", amount);
        } else {
            console.log("Invalid deposit amount");
        }
    }

    // Withdraw money
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Invalid withdrawal amount");
        } else if (amount > this.balance) {
            console.log("Insufficient balance");
        } else {
            this.balance = this.balance - amount;
            console.log("Withdrawn:", amount);
        }
    }
}

let account = new BankAccount(1000);

console.log("Initial Balance:", account.balance);

account.deposit(500);
console.log("Balance:", account.balance);

account.withdraw(200);
console.log("Balance:", account.balance);
