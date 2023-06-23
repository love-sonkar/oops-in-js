console.log("hii testing");

class BankAccount {
  custumerName;
  balance = 0;
  accountNumber;

  constructor(accountholdername, balance = 0) {
    this.custumerName = accountholdername;
    this.balance = balance;
    this.accountNumber = Date.now();
  }

  rename(changename) {
    this.custumerName = changename;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

let accounts = [];

function showData() {
  let data = accounts.map((item) => {
    return `<div>
    <h2>${item.accountNumber}</h2>
      <h2>${item.custumerName}</h2>
      <h2>${item.balance}</h2>
    </div>`;
  });

  document.querySelector("#allaccounts").innerHTML = data;
}

let accountholdername = document.querySelector("#name");
let amount = document.querySelector("#amount");

let createaccount = document.querySelector("#createaccount");

createaccount.addEventListener("submit", (e) => {
  e.preventDefault();
  let accountval = accountholdername.value;
  let amountval = amount.value;
  if (accountval !== "" && amountval !== "") {
    let newAccount = new BankAccount(accountval, parseInt(amountval));
    accounts.push(newAccount);
    console.log(accounts);
    showData();
  }
  accountholdername.value = "";
  amount.value = "";
});

document.querySelector("#deposit").addEventListener("submit", (e) => {
  e.preventDefault();
  let accountnumber = document.querySelector("#accountnumberd").value;
  let amountval = document.querySelector("#amountd").value;
  if (accountnumber !== "" && amountval !== "") {
    let findAccount = accounts.find(
      (account) => account.accountNumber === parseInt(accountnumber)
    );
    findAccount.deposit(parseInt(amountval));
    console.log(accounts);
    showData();
  }
  accountnumber.value = "";
  amountval.value = "";
});

document.querySelector("#withdraw").addEventListener("submit", (e) => {
  e.preventDefault();
  let accountnumber = document.querySelector("#accountnumberw").value;
  let amountval = document.querySelector("#amountw").value;
  if (accountnumber !== "" && amountval !== "") {
    let findAccount = accounts.find(
      (account) => account.accountNumber === parseInt(accountnumber)
    );
    findAccount.withdraw(parseInt(amountval));
    console.log(accounts);
    showData();
  }
  accountnumber.value = "";
  amountval.value = "";
});
