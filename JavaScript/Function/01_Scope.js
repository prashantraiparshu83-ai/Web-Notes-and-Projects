// // var c = 300
// // let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     // console.log("Inner:" , a)
//     var c = 30
    
// }
// // console.log(a) // out of scope
// // console.log(b) // out of scope
// console.log(c) // output: 30


// Nested Scope
function one()
{
    const username="Sumit"

    // we can't access the variable of two function outside the scope
    // In nested function child function can access all variable of parent function 
    function two(){
        const website ="youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()

// if (true) {
//     const username = "Gaurav"
//     if (username === "Gaurav") {
//         const website = " youtube"
//         console.log(username+website)
//     }
//     // console.log(website)
// }

// console.log(username)

// +++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++++

console.log(addone(6)) // 7
function addone(num)
{
    return num +1
}

// In below function we declare but hold the value in the variable so its show an error
addTwo(6) // error
 
const addTwo = function (num){
    return num+2
}










