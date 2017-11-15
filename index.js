// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'jim';
let favoriteCustomer = 'tim'

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
  let favoriteCustomer = 'maybe tim';
  console.log(favoriteCustomer)
}
