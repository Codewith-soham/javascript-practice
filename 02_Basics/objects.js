//Object 

//singleton - made by contructor only

//object literals
// Object.create -> creates singleton

//symbol
const mySyn = Symbol("key1")

const JsUser = {
    name: "Soham", //key: value
    age: 20,
    "fullname" : "soham ghadge", //can be accessed using console.log(JsUser["email"]) this method
    email: "soham@google.com",
    isLoggedIn: false,
    lastLoginDay: ["MONDAY", "WEDNESDAY"],
    [mySyn] : "mykey1"  //writing a symbol in obj
}

//access element of object
console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser[mySyn]);

//change values
JsUser.email= "soham@gmail.com"
// Object.freeze(JsUser) //cannot change any values when freeze

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js User");
    
}

JsUser.greeting2 = function(){
    console.log(`Hello js user ${this.name}`); //this access the keys present in the obj
    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

//most of the time access information by using . only sometimes when fetching string us [".."] method