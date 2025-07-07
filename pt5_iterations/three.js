//for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr){
    // console.log(num);
}

const greeetings = "Hello World"

for (const n of greeetings){
    // console.log(n)
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr',"France")
/* only unique values */
// console.log(map);

for ([key, value] of map){
    // console.log(key, value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for (const [key, value] of myObject){
//      console.log(key, value)
// }

const arr1 = ["Piyush", "Pandey", "Priyam", "Kapoor"]

for(const i of arr1){
    console.log(i)
}