document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expenseForm');
    const expenseList = document.querySelector('#expenseList tbody');

    // Array to store expense objects
    let expenses = [];

    // Function to render the expense list
    function renderExpenseList() {
        expenseList.innerHTML = '';
        expenses.forEach(function(expense, index) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${expense.amount}</td>
                <td>${expense.category}</td>
                <td>${expense.date}</td>
                <td>
                    <button class="edit-btn" data-index="${index}">Edit</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </td>
            `;
            expenseList.appendChild(row);
        });
    }

    // Function to handle form submission
    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const amount = parseFloat(expenseForm.elements['amount'].value);
        const category = expenseForm.elements['category'].value;
        const date = expenseForm.elements['date'].value;
        if (amount && category && date) {
            const expense = { amount, category, date };
            expenses.push(expense);
            renderExpenseList();
            expenseForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Function to handle edit button click
    expenseList.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit-btn')) {
            const index = parseInt(event.target.dataset.index);
            const expense = expenses[index];
            expenseForm.elements['amount'].value = expense.amount;
            expenseForm.elements['category'].value = expense.category;
            expenseForm.elements['date'].value = expense.date;
            expenses.splice(index, 1);
            renderExpenseList();
        }
    });

    // Function to handle delete button click
    expenseList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const index = parseInt(event.target.dataset.index);
            expenses.splice(index, 1);
            renderExpenseList();
        }
    });
});
