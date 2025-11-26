// Global Scope : The Default scope for all code running in script mode
// Module Scope : The Scope for code running in module mode.
// Function Scope : The scope created with a function.
// Block Scope : The Scope created with the pair of curly braces. Block only scope 'let' and 'const' declaration ,but not 'var' declaration

// A variable define in the function can not accesss outside the function

//________________________________________________________________________________________________________________________________________________________________________________


// Global Scope
// const x = "Declared outside the function."

// exampleFunction();

// function exampleFunction() {
//     console.log("Inside Function.");
//     console.log(x)

// }

// console.log("Outside function")
// console.log(x)

// var Property : the var statement declare a function scoped or globally scoped variable,optionally initialize it to a value
// let Property : the let creates a block scope it not accessible outside the block



// var x = 1;
// if (x === 1) {
//     var x = 2
//     console.log(x) // output : 2   
// }

// console.log(x)// output: 2    



// function fun() {
//     console.log(y) // y accessible here 
//     var y = 10 // not accessible outside 
// }

// function gun(){
//     console.log(z) // not accessible here
//     var z = 10;
// }

// console.log(z) // not accessible outside function scope
// gun()


// Parsing 


var teacher = "Sanket";
function fun() {
    var teacher = "Pulkit"
    content = "JS"
    console.log(teacher)
    console.log(content)
}
    function gun() {
        var student = "Sarthak"
        console.log(student)

    }

    
// console.log(content) // Error content not found
fun()
gun()
console.log(teacher)
// console.log(content) // when we checking this variable is auto global because it is not in any scope it happen in execution part.











