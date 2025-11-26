// Array 

// const myArr =[0,1,2,3,4,5,6,true,"hitesh"]
// const myArr1 =new Array("ram","shyam","dhyan")
// console.log(myArr)// [ 0, 1, 2, 3, 4, 5, 6, true, 'hitesh' ]

// Array Methods

// myArr.push(9) // [ 0, 1, 2, 3, 4, 5, 6, true, 'hitesh', 9 ]
// // Add / append element at last position
// myArr.push(19) // [ 0, 1, 2, 3, 4, 5, 6, true, 'hitesh', 9 ,19 ]
// // Delete last element by default
// myArr.pop() // [ 0, 1, 2, 3, 4, 5, 6, true, 'hitesh', 9 ]
// console.log(myArr)

// myArr.unshift(7) // Add value in the starting
// console.log(myArr) // [ 7, 0, 1, 2, 3, 4, 5, 6, true, 'hitesh' ]
// myArr.shift() // Remove value at the starting
// console.log(myArr)// [  1, 2, 3, 4, 5, 6, true, 'hitesh' ]

//console.log(myArr.includes(true)) // search element in the array return boolean value (true/ false)

// console.log(myArr.indexOf('hitesh')) // output: 8

// const newArr = myArr.join()
// console.log(newArr)
// console.log(typeof myArr)

// const newArr1 = myArr.join()
// console.log(myArr) // [ 0, 1, 2, 3, 4, 5, 6, true, 'hitesh' ]
// console.log(typeof newArr1) // string

// slice,splice
// console.log("A" , myArr) // A [ 0, 1, 2, 3, 4, 5, 6, true, 'hitesh' ]

// const myn1 = myArr.slice(1,3)

// console.log(myn1) // [ 1, 2 ]
// console.log("B" ,myArr) // B [ 0, 1, 2, 3, 4, 5, 6, true, 'hitesh' ]

// splice print the elment btw given range and delete it from original array

// const myn2 = myArr.splice(1,3)
// console.log("C" ,myArr) // C [ 0, 4, 5, 6, true, 'hitesh' ]
// console.log(myn2) // [ 1, 2, 3 ]

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const marvel_heroes =["thor","Ironman","spiderman"]
const dc_heroes =["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes) // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes[3][2]) // output: batman

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const all_heros = marvel_heroes.concat(dc_heroes) 
// console.log(all_heros) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const all_new_heroes = [...marvel_heroes , ...dc_heroes] // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// console.log(all_new_heroes)

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(3) // [1, 2, 3, 4, 5 ,6 , 7, 6, 7, 4 ,5]

console.log(real_another_array)

// We use this in data scraping
console.log(Array.isArray("hitesh")) // it is not array (false)
console.log(Array.from("hitesh")) // [ 'h', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name :"hitesh"})) // intresting qus in interview output:[]


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// convert it into array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // [ 100, 200, 300 ]


