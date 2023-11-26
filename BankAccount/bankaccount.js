
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited Amount", amount);
    }

    this.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Successfully Withdrawn amount", amount);
        } else {
            console.log("Sorry! You have insufficient balance", amount);
        }
    }

    this.checkBalance = function () {
        console.log("Current balance is", this.balance);
    }

    this.isActive = function () {
        return this.balance > 0;
    }
}

let account_1 = new BankAccount(12345, 'Pushpa', 'Saving', 1000);
let account_2 = new BankAccount(67890, 'Lily', 'Saving', 1500);
let account_3 = new BankAccount(7644, 'Anjali', 'Saving', 2000);


account_1.deposit(200);
account_1.withdraw(300);
account_1.checkBalance();

account_2.deposit(500);
account_2.withdraw(400);
account_2.checkBalance();

account_3.deposit(1000);
account_3.withdraw(600);
account_3.checkBalance();



console.log(" account_1 active", account_1.isActive());
console.log(" account_2 active", account_2.isActive());
console.log(" account_3 active", account_3.isActive());

let accounts = [account_1, account_2, account_3];

function getTotalBalance(accounts) {
    let total = 0;
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].isActive()) {
            total += accounts[i].balance;
        }
    }
    console.log("Total amount of all active accounts", total);
}

getTotalBalance(accounts);
