class BankAccount {
  accountnumber;
  custumername;
  balance = 0;

  constructor(custumername, balance = 0) {
    this.custumername = custumername;
    this.balance = balance;
    this.accountnumber = Date.now();
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  deposit(amount) {
    this.balance += amount;
  }
}

class SavingAccount extends BankAccount {
  transactionUpto = 50000;
  constructor(custumername, balance = 0) {
    super(custumername, balance);
  }
}

class CurrentAccount extends BankAccount {
  transactionLimit = "unlimited";
  constructor(custumername, balance = 0) {
    super(custumername, balance);
  }
}

let accounts = [];

let Love = new BankAccount("love sonkar", 500);
let Rakesh = new SavingAccount("rakesh ");
let monesh = new CurrentAccount("monesh M", 100000);

Love.deposit(10);
Love.withdraw(400);
Rakesh.deposit(500);
Rakesh.withdraw(5);
monesh.deposit(50000);

accounts.push(Love, Rakesh, monesh);

console.log(accounts);
