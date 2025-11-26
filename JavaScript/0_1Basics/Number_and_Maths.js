// ++++++++++++++++++++++++++++++++ Number +++++++++++++++++++++++++++++++++++++
// const score = 400

// const balance = new Number(100)
// console.log(balance); // output: [Number: 100]

// console.log(balance.toString());// 100
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(3));// 100.000

// const otherNumber = 23.8966 
// const otherNumber_1 = 123.8966 
// const otherNumber_2 = 1123.8966 

// console.log(otherNumber.toPrecision(3));// output: 23.9
// console.log(otherNumber_1.toPrecision(3));// 124
// console.log(otherNumber_2.toPrecision(3));// 1.12e+3

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());//10,00,000 in Indian Currency
// console.log(hundreds.toLocaleString('en-US'));//1,000,000 in US Currency


// ++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++

console.log(Math);
// console.log(Math.abs(-5)); // 5
// console.log(Math.round(4.3)); // 4
// console.log(Math.ceil(4.5)); // 5
// console.log(Math.floor(4.6)); // 4
// console.log(Math.min(4,6,3,8)); // 3
// console.log(Math.max(4,6,3,8)); // 8

// console.log(Math.random()); // belong to 0 - 1
// console.log(Math.random()*10 +1); // belong to 0 - 10
// console.log(Math.floor(Math.random()*10) +1); // belong to 0 - 10

const min = 10
const max = 20

// console.log((Math.random() * (max - min +1))) // 5.282349281383218
console.log(Math.floor(Math.random() * (max - min +1))+ min) // random between min to max


