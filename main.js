 storeddata=localStorage.getItem('name')

 Admin.innerHTML = `WELCOME ${storeddata}`


let balance = 0;
let spent = 0;

function addIncome() {
    const incomeType = document.getElementById('incomeType').value;
    const incomeAmount = parseFloat(document.getElementById('incomeAmount').value);

    if (incomeType && incomeAmount) {
        balance += incomeAmount;
        document.getElementById('balance').innerHTML = balance;

        addRow('incomeDetails', incomeType, incomeAmount);

       
    }else{
        alert("Please fill all the fields")
    }
}

function addExpense() {
    const expenseType = document.getElementById('expenseType').value;
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

    if (expenseAmount  <= balance) {
        spent += expenseAmount;
        balance -= expenseAmount;
        document.getElementById('balance').innerHTML = balance;
        document.getElementById('spent').innerHTML = spent;

        addRow('expenseDetails', expenseType, expenseAmount);

        
    }else{
        alert("Please fill all the fields")
    }
}

function addRow(tableId, type, amount) {
    const table = document.getElementById(tableId);
    const invoice = `<tr>
        <td>${type}</td>
        <td>${amount}</td>
        <td>${new Date().toLocaleString()}</td>
    </tr>`;
    table.innerHTML += invoice;
}

function clearAll() {
    balance = 0;
    spent = 0;
    document.getElementById('balance').innerHTML = balance;
    document.getElementById('spent').innerHTML = spent;
    document.getElementById('incomeDetails').innerHTML = '';
    document.getElementById('expenseDetails').innerHTML = '';
    alert('DATA CLEARED')
}

function logout(){
    window.location="./index.html"
}