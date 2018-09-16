// Listen for Submit
document.querySelector('#loan-form').addEventListener('submit', (e) => {
    // Show Loading Bar
    document.querySelector('#loading').style.display = 'block'
    setTimeout(() => {
        document.querySelector('#loading').className = 'animated fadeOut'
    }, 500);

    document.querySelector('#result').style.display = 'none'

    // Show Results
    setTimeout(() => {
        calculateResults(e)
    }, 1000);

    e.preventDefault()

})

// Calculate Results
function calculateResults(e) {
    // Define UI Variables
    const amount = document.getElementById('amount')
    const interest = document.getElementById('interest')
    const years = document.getElementById('years')
    const monthlyPayment = document.getElementById('monthly-payment')
    const totalPayment = document.getElementById('total-payment')
    const totalInterest = document.getElementById('total-interest')

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute monthly Payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest)/(x - 1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
        document.querySelector('#result').style.display = 'block'
    } else {
        showError('Please Check Your Numbers.')
    }
    document.querySelector('#loading').style.display = 'none'
    e.preventDefault()
}

function showError(message) {
    // Create Div
    const errorDiv = document.createElement('div')

    // Add Class to div
    errorDiv.className = 'alert alert-danger animated bounceIn'

    errorDiv.appendChild(document.createTextNode(message))

    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')

    card.insertBefore(errorDiv, heading)

    setTimeout(() => {
        hideErrorMessage()
    }, 1500);
}

function hideErrorMessage(){
    document.querySelector('.alert').remove()
}
