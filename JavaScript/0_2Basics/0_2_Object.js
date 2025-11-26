const tinderUser ={}

tinderUser.id ="Saurabh@microsoft.com"
tinderUser.name ="Saurabh"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname: "chaudhary"
        }
    }
}

const course ={
    coursename:"js in hindi",
    price : "999",
    courseInstructor:"hitesh"
}

const {courseInstructor:instructor/*Destructure of value */} = course
// console.log(courseInstructor) // hitesh
console.log(instructor) // hitesh


// Destructuring 
// const navbar = ({company}) => {

// }

// navbar(company ="hitesh")

// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }

// Object definition
[
    {},
    {},
    {}
]





















