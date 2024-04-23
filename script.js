const balanceEl = document.getElementById("balance");
const money_plusEl = document.getElementById("money-plus");
const money_minusEl = document.getElementById("money-minus");
const listEl = document.getElementById("list");
const formEl = document.getElementById("form");
const textEl = document.getElementById("text");
const amountEl = document.getElementById("amount");

const dummyTransactions = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: +300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: +150 },
];

let transactions = dummyTransactions;

// Add transaction
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === "" || amountEl.value.trim() === "") {
    alert("please add a text and amount");
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amountEl.value,
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);

    updateValues();

    text.value = "";
    amountEl.value = "";
  }
}

// Generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

// Add transaction to DOM list
function addTransactionDOM(transaction) {
  // Get sign using shorthand if statement
  const sign = transaction.amount < 0 ? "-" : "+";

  const item = document.createElement("li");
  //   Add class based on Value
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span><button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })">x</button>`;

  listEl.appendChild(item);
}

// Update the balance income and expense
function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balanceEl.innerText = `$${total}`;
  money_plusEl.innerText = `$${income}`;
  money_minusEl.innerText = `$${expense}`;
}

// Remove Transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);

  init();
}
// Init app
function init() {
  listEl.innerHTML = "";

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

formEl.addEventListener("submit", addTransaction);
