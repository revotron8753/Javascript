// const user = {
//     username: "Piyush",
//     price: 999,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`)
//         // console.log(this)
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// const chai  = function () {
//     let username =  "Piyush"
//     console.log(this.username)
// }


// const chai  = () => {
//     let username =  "Piyush"
//     console.log(this.username)
// }

// const assTwo = (num1, num2) => {
//     return num1+num2
// }

// const assTwo = (num1, num2) => (num1+num2)

const assTwo = (num1, num2) => ({username :" Piyush "})

console.log(assTwo(3,4))