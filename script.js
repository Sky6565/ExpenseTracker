const balance = document.getElementById("balance");
const money_plusEl = document.getElementById("money_plus");
const money_minusEl = document.getElementById("money_minus");
const listEl = document.getElementById("list");
const formEl = document.getElementById("form");
const textEl = document.getElementById("text");
const amountEl = document.getElementById("amount");

const dummyTransactions = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 },
];

let transactions = dummyTransactions;

// Add transaction to DOM list
function addTransactionDOM(transaction) {
  // Get sign using shorthand if statement
  const sign = transaction.amount < 0 ? "-" : "+";

  const item = document.createElement("li");
  //   Add class based on Value
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span><button class="delete-btn">x</button>`;

  listEl.appendChild(item);
}

// init app
function init() {
  listEl.innerHTML = "";

  transactions.forEach(addTransactionDOM);
}

init();
