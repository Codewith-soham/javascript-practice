// array collection of data of same type
const arr1 = [1,2,3,4]

console.log(arr1[2]);  //accessing array 

const myHeros = ["iron-man", 
    "spiderman"
]

const myArr2 = new Array(1,2,3,4,5,6,7,8,9) //declaring array using Array constructor

myArr2.push(4)  //add data to array
console.log(myArr2)

myArr2.pop() //remove last element of array
console.log(myArr2);

myArr2.unshift(9) //to add data infront of the array values
console.log(myArr2);

myArr2.shift()
console.log(myArr2); //removes the first element

const myArr = [1,2,3,4,5,6]

console.log(myArr.includes(4)) //returns if value present in array or not
console.log(myArr.indexOf(4)); //returns the index number of the array

//slice,splice

const result = myArr.slice(1,4) //removes the values starting from start point to end point, does not change the original array , only extracts copies and elements
console.log("A ",myArr);
console.log(result);

console.log("A ",myArr);

const myn2 = myArr.splice(1,3) //removes all the elements than the start and end index, changes the original array add remove or replace elements 
console.log(myn2);
