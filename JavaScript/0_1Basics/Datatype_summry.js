// Primitive

// 7 types : String,Number,Boolean,null,undefined,symbol,BigInt
// symbol is use to create unique value

// const score = 100 
// const scorevalue = 100.3

// console.log(score);
// console.log(scorevalue);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const isLoggedIn = false //boolean
// const outsideTemp = null //object

// console.log(isLoggedIn)
// console.log(outsideTemp)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let userEmail;

// const id = Symbol('123') //symbol
// const anotherId = Symbol('123') //symbol

// console.log(id === anotherId);

// const bigNumber = 7847337676235635673n // last n use to convert the data into big int
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Reference(Non Primitive)

// Array, objects,functions

// const heros = ["shaktiman","naagraj","doga"];//object

// let myobj = {
//                 name: "hitesh",
//                 age: 22,

// }
// const myfunction = function(){
//     console.log("Hello world");//function
    
// }

// console.log(typeof myfunction);
// +++++++++++++++++++++++++++++++Memory++++++++++++++++++++++++++++++++++++++
/* Stack(Use in primitive type) When we use stack memory we got a copy of declare variable,
 Heap(Use in Non-Primitive) when use Heap memory we got refrence of original value 
 then if we change in original value then its change the original value.*/

// let myYouTubename = "tataconsaultanscyservices"

// let anothername = myYouTubename
// anothername = "chaiaurcode"
// console.log(anothername);
// console.log(myYouTubename);
// // console.log(typeof anothername);
// // console.log(typeof myYouTubename);

// let user ={
//     email: "user@gmail.com",
//     upi: "user@ybl"
// }
// let user_1 =user

// user_1.email ="Priyanshu@google.com"

// console.log(user.email);
// console.log(user_1.email);








