const name = "soham"
const repoName = 50

// console.log(name + repoName + " Value"); old style

console.log(`My name is ${name} and my repoCount is ${repoName}`); //String interpolation can inject value of placeholder(variable) into `` -> modern way of syntax

//String functions
const gameName = new String("soham-ghadge") //way of writing string using string constructor

console.log(gameName[0]); //will give character at position
console.log(gameName.__proto__);

console.log(gameName.length); //length of the string
console.log(gameName.toUpperCase()); //uppercase function to convet string to full upper case

console.log(gameName.charAt(3)); //return character at pos 3
console.log(gameName.indexOf('s'));//returns index of character

const newString = gameName.substring(0, 4) //created substring starting from index 0 to 4
const slicedString = gameName.slice(3, 6) //slice cuts the character can give negative index
console.log(newString);
console.log(slicedString);

const newStringOne = " hitesh "
console.log(newStringOne.trim()); //clears the whitespaces and line terminators(/n)

const url = "https://soham.com/soham%20ghadge"
console.log(url.replace("%20", "-")); //replaces the string which you want
console.log(url.includes('soham')); //checks keywords in the string



