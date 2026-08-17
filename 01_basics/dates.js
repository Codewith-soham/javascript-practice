// Dates

let myDate = new Date()

//different types of date properties
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreateDate = new Date(2023, 0, 23)  //In js months start with 0
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleDateString());

let newDate = new Date("01-14-2023")
console.log(newDate.toString());

let myTimeStamp = Date.now() //returns the current time

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000)); //to get second
let newData = new Date()
console.log(newData);
console.log(newData.getMonth());
console.log(newData.getDate());

newData.toLocaleDateString('default', {
    weekday: "long"
})


