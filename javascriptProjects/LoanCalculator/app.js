// listen to submit
document.getElementById('loan-form').addEventListener('submit', function(e) {
  //hide results
  document.getElementById('results').style.display = 'none';
  //show loader
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

//Calculate results
function calculateResults() {
  let amount = document.getElementById('amount');
  let interest = document.getElementById('interest');
  let years = document.getElementById('years');
  let monthlyPayment = document.getElementById('monthly-payment');
  let totalPayment = document.getElementById('total-payment');
  let totalInterest = document.getElementById('total-interest');

  let principal = parseFloat(amount.value);
  let calculatedInterest = parseFloat(interest.value) / 100 / 12;
  let calculatedPayments = parseFloat(years.value) * 12;

  //compute monthly payments
  let x = Math.pow(1 + calculatedInterest, calculatedPayments);
  let monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    //show results
    document.getElementById('results').style.display = 'block';
    //hide spinner
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please Check your numbers');
  }
};

//Shor error function

function showError(error) {
  let errorDiv = document.createElement('div');
  let card = document.querySelector('.card');
  let heading = document.querySelector('.heading');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv, heading);
  //Clear error
  setTimeout(clearError, 3000);
};

function clearError() {
  document.querySelector('.alert').remove();
}