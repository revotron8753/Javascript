//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
//console.log(typeof score)
const scoreValue = 100.3
//console.log(typeof scoreValue)

const isLoggedIn = false
//console.log(typeof isLoggedIn)
const outsideTemp = null
//console.log(typeof outsideTemp)
let userEmail;

const id = Symbol('123')
//console.log(typeof id)
const anotherId = Symbol('123')
//console.log(typeof anotherId)

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
//console.log(typeof heros)
let myObj = {
    name: "hitesh",
    age: 22,
}

//console.log(typeof myObj)

const createFunction = function(){
        
        return 'hello world'; 
}
  
  console.log(createFunction()); 
  