let incomes = []
let expenses = []

const descInput = document.getElementById("desc")
const amountInput = document.getElementById("amount")
const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")

const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const balanceSpan = document.getElementById("balance")

function addTransaction(type) {
    const description = descInput.value.trim()
    const amount = parseFloat(amountInput.value)
    if (!description || isNaN(amount) || amount <= 0) {
        alert("Fyll i beskrivning och ett giltligt belopp")
        return;
    }

    const transaction = { description, amount }
    if (type === "income") {
        incomes.push(transaction)
    } else {
        expenses.push(transaction)
    }
    updateLists()
    updateBalance()

    descInput.value = ""
    amountInput.value = ""
}

function updateLists() {
    incomeList.innerHTML = ""
    expenseList.innerHTML = ""
    expenses.forEach((exp) => {
        const li = document.createElement("li")
        li.textContent = `${exp.description}: - ${exp.amount} kr`
        expenseList.appendChild(li)
    })

    incomes.forEach((inc) => {
        const li = document.createElement("li")
        li.textContent = `${inc.description}: + ${inc.amount} kr`
        incomeList.appendChild(li)
    })
}

function updateBalance(){
    const totalIncome = incomes.reduce((sum, item) => sum + item.amount, 0)
    const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0)
    const total = totalIncome - totalExpenses
    balanceSpan.textContent = `${total} kr`
}

incomeBtn.addEventListener("click", () => addTransaction("income"))
expenseBtn.addEventListener("click", () => addTransaction("expense"))