/* Javascript variable declaration
Cannot be redefine let = 6;let= 6 */
let x = 5;
let _y = 8;
let $ = 10;
// const keyword
const q = 5;
const r = 8;
const s = 10;

let total = $+r;
console.log(total);
// Declaring automatically
x = 5;
y = 5;
z = x+y
console.log(z)
// Using var keyword
var a = 6; // redeclare var = 6 ;var a= 7 or var =6
var a = 7; 
var b = 6;
var c = 6;

// one statement many variable
let person ="John Deo";
carname = "volvo";
var price = 200;

detail = person+" "+carname+" "+price;

console.log(detail);

// We cannot declare like this
// let e = 7;
// var e = 7;

// We can declare like this
carname = "volvo";
var carname ; 

// Cannot be reassigned
const PI =3.14;
console.log(PI)
// PI = 3.14 ;// this is give an error
// console.log(PI)
// PI = PI +10 ; // this will also give an error

// console.log(PI)

