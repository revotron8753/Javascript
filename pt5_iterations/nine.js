const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`accumulator's value is: ${acc} and current value is ${currval}`)
//     return acc+currval
// }, 0)

const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0) /*same thing*/

// console.log(myTotal);

/* this method is used for addition of total values of the price of shopping cart*/

const shoppingCart = [
    {
        itemName: "js course",
        price: 2000
    },
    {
        itemName: "Python Course",
        price: 3000
    },
    {
        itemName: "React Course",
        price: 2500
    }
]

const courseTotal = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(courseTotal)