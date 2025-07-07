const userEmail = []

// if(userEmail) {
//     console.log("Got user Email")
// }

// else{
//     console.log("Dont have user email");
// }

// false, 0, -0, BigInt 0n, "", null, undefined, NAN
//truthy "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

//Nullish Cialescing Operator (??): null undefined (made mainly for null or undefined cases) mainly a fallback
let val1; 
val1 = undefined ?? 10
console.log(val1)

//Ternary operator

//condition ? true: false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80"): console.log("more than 80")