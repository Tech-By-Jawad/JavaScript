const accountId = 201
let accountName = "Jawad Hussain" //block scope
var accountPassword = "12345" //global scope
accountCity = "Dubai" // never ever declare a variable like this
let accountState; // declaring a variable without assigning a value will be show undefined. 
// accountId = 202  we can't change the constant value

accountName = "Fawad Hussain"
accountPassword ="123456"
accountCity = "Sharjah"

/*
prefer not to use var because of block scope and functional scope issue.
instead of var always use let to declare a variable
*/

console.log(accountId);
console.table([accountId,accountName,accountPassword,accountCity,accountState]) // table is used to display the data in a table format.

