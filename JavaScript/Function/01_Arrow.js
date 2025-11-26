const user ={
    username :"Ujjwal",
    price : 999 ,

    welcomeMessage:function(){
        // this access the current context 
        console.log(`${this.username},welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage() // output:Ujjwal,welcome to website

// user.username ="sambahadur"

// user.welcomeMessage() // output: sambahadur,welcome to website

// if we use console.log(this) in welcomeMessage function we got the contex output like below
/* output:
Ujjwal,welcome to website
{
  username: 'Ujjwal',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sambahadur,welcome to website
{
  username: 'sambahadur',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
} */

// console.log(this) // output {}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai() // undefined

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai() // output: undefined

// Arrow function 

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()//output : undefined

// const chai = () => {
//     let username = "hitesh"
//     console.log(this)
// }
// chai()//output : {}


// Basic Arrow functio
// const addTwo = (num1 ,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,6)) // 9

// Implicite return
// const addTwo = (num1 ,num2) => num1+num2
// const addTwo = (num1 ,num2) => (num1+num2)
// console.log(addTwo(3,6)) // 9

// Return an object
// const addTwo = (num1 ,num2) => {username:"hitesh"}
// console.log(addTwo(3,6)) // output: undefined


const addTwo = (num1 ,num2) => ({username:"hitesh"})
console.log(addTwo(3,6)) // output: { username: 'hitesh' }

// Use in loop
// const myArray =[2,5,3,7,8]

// myArray.forEach(function())






