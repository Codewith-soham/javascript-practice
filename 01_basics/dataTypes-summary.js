//Primitve data type

// 7 types: String, number, boolean, null, undefined, Symbol, BigInt

//Reference type(Non primitive) -> allocates reference of the data in the memory

//Array, Objects, functions

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null //null is not zero it means empty black 
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 121321232131231231n

const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "soham",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");   
}

console.log(typeof bigNumber);
console.log(typeof bigNumber);
console.log(typeof heros); //function object

