console.log("hi testing");

function BankAccount(custumername, balance = 0) {
  this.accountnumber = Date.now();
  this.custumername = custumername;
  this.balance = balance;
}

BankAccount.prototype.UpdateAdhaar = function (number) {
  this.adhaarnumer = number;
};

BankAccount.prototype.rename = function (custumername) {
  this.custumername = custumername;
};

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

let accounts = [];

let love = new BankAccount("love sonkar", 500);

accounts.push(love);
let sumit = new BankAccount("sumit", 500);
accounts.push(sumit);

sumit.rename("ss sumit");

sumit.deposit(5000);

love.withdraw(10);

love.UpdateAdhaar(2845774574875);

console.log(accounts);
