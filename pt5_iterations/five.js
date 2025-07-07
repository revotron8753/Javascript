const coding = ["js", "ruby", "java", "Python"]

// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item){
//     // console.log(item);
// }

// // coding.forEach(print)

// coding.forEach( (item, index, arr ) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Ruby",
        languageFileName: "rb"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
