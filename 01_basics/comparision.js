// console.log(2 > 1);
// console.log(3 < 4);
// console.log(2 < 1);

//not a good practice cannot compare two different datatypes too much unpredictabele 
console.log("2" > 1);
console.log("02" > 1);

//avoid such comparisions because they are unpredictable
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//strict check === -> checks values as well as datatype
console.log("2" === 2);



