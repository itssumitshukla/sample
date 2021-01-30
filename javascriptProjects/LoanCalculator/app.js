// listen to submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//Calculate results
function calculateResults(e) {
  let amount = document.getElementById('amount');
  let interest = document.getElementById('interest');
  let years = document.getElementById('years');
  let monthlyPayment = document.getElementById('monthly-payment');
  let totalPayment = document.getElementById('total-payment');
  let totalInterest = document.getElementById('total-interest');

  let principal = parseFloat(amount.value);
  let calculatedInterest = parseFloat(interest.value)/ 100 / 12;
  let calculatedPayments = parseFloat(years.value) * 12;

  //compute monthly payments
  let x = Math.pow( 1 + calculatedInterest, calculatedPayments);
  let monthly = (principal * x * calculatedInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
  } else {
    console.log('yooo')
  }

  console.log(principal)
  e.preventDefault();
};