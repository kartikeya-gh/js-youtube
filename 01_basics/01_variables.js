const accountId = 1343434
let accountEmail = "kartik@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "abd@gmail.com"
accountPassword = "78668867"
accountCity = "noida"

/*
Prefer not to use var
because of issue in block scope and functional scope
scope={} there 

*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
