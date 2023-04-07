// Write your solution in this file!
//declared a variable called customer name
var customerName;
//declared a global variable
let bestCustomer = "not bob"
const leastFavoriteCustomer = "customer"

//function to update the customer name to uppercase
function upperCaseCustomerName() {
    customerName.toUpperCase();
}
//function to declare a var bestcustomer
function setBestCustomer() {
    var bestCustomer = "not bob"
}

function overwriteBestCustomer () {
    bestCustomer = "this is bob"
}
//function changeLeastFavoriteCustomer
function  changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Not Customer";
}
changeLeastFavoriteCustomer()
//output is customer the value didnt change due to the constant