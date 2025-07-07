const marvel_heros = ["thor", "ironman", "spiderman"]

const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1])


const oye_teri = marvel_heros.concat(dc_heros)

//concat returns new string

// console.log(oye_teri)

const abhineta = [...marvel_heros, ...dc_heros]

//this is done using spread operator

// console.log(abhineta)

const another_arr = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

const stars = another_arr.flat(Infinity)

//flat flatens all the elements in the array

// console.log(stars)

// console.log(Array.from("piyush"))
// console.log(Array.from({name: "piyush"})) //interesting

score1 = 100
score2 = 200
score3 = 300

console.log(Array.of(score1, score2, score3))