const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Piyush"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "piy@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser)

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}

obj3 = {...obj1, ...obj2}

// or const obj3 = Object.assign({}//optional parameter(works as a target), obj1, obj2) gives the same result

// console.log(obj3)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))