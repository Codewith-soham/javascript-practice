let score = "33"

console.log(typeof score) 
console.log(typeof(score)); //checking type as method


let valueInNumber = Number(score) //conversion to number
console.log(typeof valueInNumber);
console.log(valueInNumber); //sometimes does not convert the value better to check after converting

//"33" => 33
//"33abc" => NaN
// true => 1; false => 1

let isLoggedIn = 1;

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);

let someNumber = 22
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));



// -------------- Operation --------------- //
//arithmetatic operation
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); raise to
// console.log(2%2);

let str1 = "hello"
let str2= " soham"
let str3 = str1 + str2
console.log(str3);

//if starting with string js keeps everything in string
console.log("3" + 2 + 2);
console.log(3 + 3 + "5");


//proper way to write
console.log((3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; //prefix increments before use
gameCounter++; //postfix increments after use
console.log(gameCounter);