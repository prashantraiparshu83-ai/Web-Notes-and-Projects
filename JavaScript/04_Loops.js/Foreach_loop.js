const coding =["js","ruby","java","python","cpp"]

// coding.forEach(function (val){
//     console.log(val);
    
// })

// coding.forEach((val) => {
//     console.log(val);
    
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

// coding.forEach((item ,index,arr) => {
//     console.log(item,index,arr);
    
// })

const mycoding =[
    {
        languagename : "javascript",
        languageFilename :"js"
    },
    {
        languagename : "java",
        languageFilename :"java"
    },
    {
        languagename : "python",
        languageFilename :"py"
    },
]


mycoding.forEach((item) => {
    console.log(item.languageFilename);
    console.log(item.languagename);
    
})




