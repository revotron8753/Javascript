//singleton

//literal
const mySym = Symbol("key1")

const JsUser = {
    name: "Piyush",
    "Full Name": "Piyush Pandey",
    [mySym]: "mykey1",
    age: 22,
    email: "piyush@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email),
// console.log(JsUser["email"]),
// console.log(JsUser["Full Name"])
// console.log(typeof JsUser[mySym])
// Object.freeze(JsUser)
// JsUser.email = "piyush@chatgpt.com"
// console.log(JsUser.email)


JsUser_greeting = function() {
    return "Hey" 
}

JsUser_greetingtwo = function() {
    return `Hey ${JsUser.name}` 
}

console.log(JsUser_greetingtwo())