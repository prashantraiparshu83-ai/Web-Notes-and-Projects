var teacher  = "Sanket"; // global
function fun() {  //global
    console.log(teacher) // no error will be given
    // consolelog(content) // throws an error
    var teacher = "Pulkit"
    let content = "JS"
    if (content == "JS") {
        let hours = "120+"
        console.log(content , hours)
    }
    console.log(teacher , content)
}

fun()
console.log(teacher)
// console.log(content)

