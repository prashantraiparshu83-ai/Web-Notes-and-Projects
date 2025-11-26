// const userEmail = ""
// if (userEmail) {
//     console.log("Got user email")
// }
// else{
//     console.log("Don't have user email.")
// }
// output : Don't have user email
// const userEmail = []
// if (userEmail) {
//     console.log("Got user email")
// }
// else{
//     console.log("Don't have user email.")
// }
// output: get user email
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const userEmail = "hitesh@gmail.com"
// if (userEmail) {
//     console.log("Got user email")
// }
// else{
//     console.log("Don't have user email.")
// }
// output : Got user email

/* falsy value:
    1.false
    2. 0 (zero falsy)
    3. -0(negative zero falsy)
    4. 0n in BigInt (falsy value)
    5."" (falsy value)
    6. undefined,NaN,null (falsy value) 
    
    truly value:
    1. "0*
    2. 'false'
    3. " " 
    4. function() {}*/

// const emptyObj ={}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty.")
// }

// Nullish Coalscing Operator (??) : null undefined

// let val1;
// val1 = 5 ?? 10 // output: 5
// val1 = null ?? 10 // output : 10
// val1 = undefined ?? 15 // output: 15
// val1 = null ?? 30  ?? 15 // output: 30 it picks first value
// console.log(val1)

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80."): console.log("more than 80.")








