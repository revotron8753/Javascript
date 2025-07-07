function saymyname() {
    console.log("Padey ji Barra wale")
}
// saymyname()

// function addTwoNumber(num1, num2) /*parameters*/{
//     console.log(num1 + num2)
// }
 
// const result =  addTwoNumber(3, 4) /*Arguments*/

// console.log("Result: ", result)

// function addTwoNumber(num1, num2) /*parameters*/{
//     return(num1 + num2)
// }
 
// const result =  addTwoNumber(3, 4) /*Arguments*/
// console.log("Result: ", result)


function loginUserMessage(username = "paade") {
    if (username === undefined){
        console.log("Abbey username to daal")
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())