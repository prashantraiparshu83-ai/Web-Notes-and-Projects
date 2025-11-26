function sayMyName(){
    console.log(("Hitesh"))
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//    console.log(number1+number2)
// }
// addTwoNumbers(4,"5")// 45
// addTwoNumbers(4,"a")// 4a
// addTwoNumbers(4,null) // 4
// addTwoNumbers(4,5) // 9

// const result = addTwoNumbers(4,9) // 13

// console.log("Result : ",result) //  Result :  undefined

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function addTwoNumbers(number1,number2){
// //    let result = number1+number2
// //    return result

//     return number1+number2
// }

// const result = addTwoNumbers(4,9)
// // console.log("Result : ",result) // Result :  13

// function loginUserMessage(username) {
//     if (username === undefined) {
//         console.log("Please enter a username.")
//         return            
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Hitesh")) //Hitesh just logged in
// console.log(loginUserMessage()) //undefined just logged in


function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200,400,500,4830,'true')) // [ 200, 400, 500 ,4830,'true']


// pass the object function
const user ={
    username : "hitesh",
    price :199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username :"sam",
    price : 399
})

const mynewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(mynewArray))
console.log(returnSecondValue([200,400,100,600]))

// Scope in JS











