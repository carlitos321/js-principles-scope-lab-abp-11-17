// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'jim';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
  console.log(customerName)
}


function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'maybe jim';
}

function attemptTwoFavoriteCustomers() {
  bestCustomer = 'maybe bob';
}
