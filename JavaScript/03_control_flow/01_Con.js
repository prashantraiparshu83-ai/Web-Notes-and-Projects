// if
const isUserLoggedIn = true
const temprature = 40
// if (isUserLoggedIn) {
//     console.log("executed")
// }
// if (temprature  === 40) {
//     console.log("executed")
// }
// else{
// console.log('temprature is greater than 50.')
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`) // scope error if we define var power than we access the power outside the scope
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// <,>,<=,>= , == ,!=, ===
// if (2 === "2") {
    //     console.log("Error")
    // }
    
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const balance = 1000
// if (balance > 500)  console.log("test"),console.log("test2")

// const balance = 1000

// if (balance < 500) {
//     console.log("less than.")

// }else if (balance< 750) {
//     console.log("less than 750")
// }
// else if (balance <950) {
//     console.log("less than 950")
// }
// else {
//     console.log("less than 1200.")
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (UserLoggedIn && debitCard) {
    console.log("Allow to buy course.")
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in.")
}



