const coding =["js","ruby","java","python","cpp"]

// const value = coding.forEach((item) =>{
//     console.log(item);
// })

// console.log(value)

const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.filter((num) => num>5 )
// console.log(newnums)

// const newnums = mynums.filter((num) => {
//     num >4 
// } )
// console.log(newnums) // [] output blank array

// const newnums = mynums.filter((num) => {
//     return num >4 
// } )
// console.log(newnums) // [] output blank array


const newnums = []
mynums.forEach((num) => {
    if (num >4) {
        newnums.push(num)
    }
})

console.log(newnums)

