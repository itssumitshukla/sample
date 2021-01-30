// listen to submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//Calculate results
function calculateResults(e) {
  let amount = document.getElementById('amount');
  let interest = document.getElementById('interest');
  let years = document.getElementById('years');
  let monthlyPayment = document.getElementById('monthly-payment');
  let totalPayment = document.getElementById('total-payment');

  e.preventDefault();
};