console.log("hi testing");

function BankAccount(custumerName, Balance = 0) {
  this.AccountNumber = Date.now();
  this.custumerName = custumerName;
  this.Balance = Balance;

  this.deposit = (amount) => {
    this.Balance += amount;
  };

  this.withdraw = (amount) => {
    this.Balance -= amount;
  };

  this.rename = (cutumername) => {
    this.custumerName = cutumername;
  };
}

let accounts = [];

let createaccount = document.querySelector(".accountform");

createaccount.addEventListener("submit", (e) => {
  e.preventDefault();
  let accountname = document.querySelector(".name").value;
  let amount = document.querySelector(".amount").value;
  let newAccount = new BankAccount(accountname, +amount);
  accounts.push(newAccount);
  console.log(accounts);
});

let deposit = document.querySelector(".deposit");

deposit.addEventListener("submit", (e) => {
  e.preventDefault();
  let accountnumber = document.querySelector(".accountnumberd").value;
  let amount = document.querySelector(".amountdeposit").value;

  let findaccount = accounts.find(
    (account) => account.AccountNumber === +accountnumber
  );

  findaccount.deposit(+amount);

  console.log(accounts);
});

let withdraw = document.querySelector(".withdraw");

withdraw.addEventListener("submit", (e) => {
  e.preventDefault();
  let accountnumber = document.querySelector(".accountnumberw").value;
  let amount = document.querySelector(".amountwithdraw").value;

  let findaccount = accounts.find(
    (account) => account.AccountNumber === +accountnumber
  );

  findaccount.withdraw(+amount);

  console.log(accounts);
});

let changename = document.querySelector(".changename");

changename.addEventListener("submit", (e) => {
  e.preventDefault();

  let accountnumber = document.querySelector(".accountnumberr").value;
  let rename = document.querySelector(".rename").value;

  let findaccount = accounts.find(
    (account) => account.AccountNumber === +accountnumber
  );

  findaccount.rename(rename);
  console.log(accounts);
});
