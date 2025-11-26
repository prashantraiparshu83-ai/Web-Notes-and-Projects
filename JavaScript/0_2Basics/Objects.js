// Singletone
// object.create


const mySym = Symbol("key1")

const JsUser = {
    name:"hitesh",
    "full name":"Hitesh Chaudhary",
    [mySym]:"mykey1",
    age : 19,
    location: "jaipur",
    email:"hitesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(JsUser."full name")// Error
console.log(JsUser["full name"])
// console.log(JsUser.mySym) //mykey1
// console.log(typeof JsUser.mySym) // string
// console.log(JsUser[mySym]) //mykey1
// console.log(typeof JsUser.mySym) //undefined

// JsUser.email = "hitesh@chatgpt.com"
// console.log(JsUser.email)
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser)
 /*{
  name: 'hitesh',
  'full name': 'Hitesh Chaudhary',
  age: 19,
  location: 'jaipur',
  email: 'hitesh@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  Symbol(key1): 'mykey1'
} */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// object literals

// JsUser.greeting = function(){
//     console.log("Hello Js User.")
// }

// JsUser.greetingTo = function(){
//     console.log(`Hello Js User, ${this.name}`)
// }
// console.log(JsUser.greeting) // [Function (anonymous)]
// console.log(JsUser.greeting()) // Hello Js User.undefined
// console.log(JsUser.greetingTo()) // Hello Js User, hitesh







