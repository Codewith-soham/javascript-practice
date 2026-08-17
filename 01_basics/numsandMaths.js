const score = 100 //basic way to define number
// console.log(score);

//explicitly define number
const balance = new Number(200)
console.log(balance);


//properties of numbers
console.log(balance.toString()); //convert to string
console.log(typeof(balance.toString()));

console.log(balance.toFixed(2)); //will return decimal value upto 2 numbers

const otherNumber = 23.8966
console.log(otherNumber.toFixed(2));
console.log(otherNumber.toPrecision(3));//will precise the value upto number

const hunderds = 10000000
console.log(hunderds.toLocaleString('en-In')); //converts number into proper numbers

// +++++++++ Maths ++++++++++

console.log(Math);
console.log(Math.abs(-4)); //gives absolute value
console.log(Math.round(4.6)); //gives round of value
console.log(Math.ceil(4.2)); //returns highest round of value
console.log(Math.floor(4.9));  //gives least round of value
console.log(Math.max(4,3,5,6));
console.log(Math.min(3,5,6,7));


console.log(Math.random()); //gives values between 0 and 1
console.log(Math.random().toFixed(2)*10);
console.log((Math.random()*10) + 1);
 

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)+ min))    //=1 so that value doesnt come zero






