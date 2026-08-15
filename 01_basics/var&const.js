//print
console.log("soham")

//const -> cannot be changes and var -> can be changed
const accountId = 144553  //value cannot be changed
let accountEmail = "soham@gmail.com" 
var accountPassoword = "12345"
accountCity = "Jaiput" //reserve memory without defining variables
let accountState;

// accountId = 2
// console.log(accountId); //error cannot be changed because constant

accountEmail = "sh@sh.com"
accountPassoword = "212121121"
accountCity = "Bengaluru"

console.table([accountId,accountEmail, accountPassoword, accountCity, accountState]) //table -> shows values in table form


//rules
/* 
keep variable names easy
we do not use var because issue of block scope and function scope
*/ 