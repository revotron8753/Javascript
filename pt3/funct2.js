 function calculateCartPrice(...num1) {
    return num1
 }

//  console.log(calculateCartPrice(200, 400, 500))

 //... is known as rest or spread operator

//  user = {
//     username : "piyushpandey7468",
//     price: 199
//  }

//  function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username}, and price is ${anyObject.price}`)
//  }

//  handleObject(user)

const newArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArray))