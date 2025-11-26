// const tinderUser = new Object() // Singletone Object

const tinderUser ={}

tinderUser.id =" 553arh"
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
// console.log(regularUser.fullname); // { userfullname: { firstname: 'hitesh', lastname: 'chaudhary' } }
// console.log(regularUser.fullname.userfullname.firstname); // hitesh

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1 , obj2} 
// console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1,obj2)
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj5 = Object.assign({}, obj1,obj2,obj4)
// console.log(obj5) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Spread Operator

// const obj6 ={...obj1, ...obj2}
// console.log(obj6) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const user =[
    {
    id:1,
    email: "h@gmail.com"
},
    {
    id:1,
    email: "h@gmail.com"
},
    {
    id:1,
    email: "h@gmail.com"
},
    {
    id:1,
    email: "h@gmail.com"
},

]

user[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // print a array of keys [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)) // [ ' 553arh', 'Saurabh', false ]
// console.log(Object.entries(tinderUser)) // [ [ 'id', ' 553arh' ], [ 'name', 'Saurabh' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // give boolean value (output: true) 













