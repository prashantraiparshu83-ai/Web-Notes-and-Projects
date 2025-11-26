//  Strict mode stop the autoglobal function 
// if you try to to delete non deletable variable the strict mode show an error
// strict mode also forbid deleting the plaimn name

"use strict"
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

fun()
gun()
console.log(teacher)
console.log(content
    
)