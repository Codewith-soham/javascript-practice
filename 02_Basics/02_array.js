const marvel_heros = ["thor", "spiderman", "ironman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); //pushes arr in array
// console.log(marvel_heros[3]);

// const all_heros = marvel_heros.concat(dc_heros) combines two array and return new arr
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] //... is spread operator it spreads the array
console.log(all_new_heros);

const another_array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) //returns single array having all subarray in it
console.log(real_another_array);

console.log(Array.isArray("Soham")); //checks if array
console.log(Array.from("123456")); //creates array of char (if str)
console.log(Array.from({name: "hitesh"})); //cannot create array with keys

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //creates a new array of elements
