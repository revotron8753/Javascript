// var c = 300

if (true) {
    let a = 10
    const b = 20
    // c =30
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Piyush"

    function two(){
        const website = "yt"
        console.log(username)
    }
    // console.log(website)
    // two()
}

// one()


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


addone(5) /*this will work*/
function addone(num){
    return num+1
}



/*addTwo(5) but this wont*/
const addTwo = function(num){
    return num+2
}

addTwo(5)