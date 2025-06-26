// Budget Tracker Logic
const form = document.getElementById('expense-form');
const categoryInput = document.getElementById('category');
const amountInput = document.getElementById('amount');
const expenseList = document.getElementById('expense-list');
const ctx = document.getElementById('expenseChart').getContext('2d');

let expenses = [];
let chart;

function updateExpenseList() {
    expenseList.innerHTML = '';
    const combined = {};
    expenses.forEach((expense) => {
        const key = expense.category;
        if (!combined[key]) {
            combined[key] = 0;
        }
        combined[key] += expense.amount;
    });
    Object.entries(combined).forEach(([category, amount]) => {
        const li = document.createElement('li');
        li.textContent = `${category}: ${amount.toFixed(2)}`;
        expenseList.appendChild(li);
    });
}

function updateChart() {
    const combined = {};
    expenses.forEach((expense) => {
        const key = expense.category;
        if (!combined[key]) {
            combined[key] = 0;
        }
        combined[key] += expense.amount;
    });
    const categories = Object.keys(combined);
    const amounts = Object.values(combined);
    if (chart) {
        chart.destroy();
    }
    chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: categories,
            datasets: [{
                data: amounts,
                backgroundColor: [
                    'red', 'blue', 'green', 'orange', 'purple', 'yellow', 'pink', 'cyan', 'magenta'
                ],
            }]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const categories = categoryInput.value.split(',').map(s => s.trim()).filter(Boolean);
    const amounts = amountInput.value.split(',').map(s => s.trim()).filter(Boolean);

    if (categories.length !== amounts.length) {
        alert('The number of categories and amounts must match.');
        return;
    }

    let added = false;
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const amount = parseFloat(amounts[i]);
        if (!category || isNaN(amount) || amount <= 0) {
            continue;
        }
        expenses.push({ category, amount });
        added = true;
    }

    if (!added) {
        alert('No valid expenses were found. Please check your input.');
        return;
    }

    updateExpenseList();
    updateChart();
    form.reset();
    expenses = [];
});

updateChart();
