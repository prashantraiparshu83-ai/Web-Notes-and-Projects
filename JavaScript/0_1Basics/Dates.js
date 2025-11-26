// Dates

let myDate = new Date()
// console.log(myDate.toString()); //Sat Oct 11 2025 17:59:04 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Sat Oct 11 2025
// console.log(myDate.toLocaleString()); // 11/10/2025, 6:01:07 pm
// console.log(typeof myDate); // object

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let myCreateDate = new Date(2023, 0 , 25)
// console.log(myCreateDate.toDateString()); //Thu Jan 25 2023
// let myCreateDate = new Date(2025, 0 ,11 ,5,6 ) // (yy/mm/dd ,hours,minutes)
// console.log(myCreateDate.toLocaleString()); // 11/1/2025, 5:06:00 am

// let myCreateDate = new Date("01-14-2025")
// console.log(myCreateDate.toLocaleString()); //14/1/2025, 12:00:00 am

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let myCreateDate = new Date("01-14-2025")

// let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 1760193222558 1st january 1970 to myTimeStamp total milisecond
// console.log(myCreateDate.getTime());// 1736793000000 1st january 1970 to myCreateDate total milisecond
//console.log(Math.floor(Date.now()/1000)); // 1760193871 convert into second divided by 1000

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(myDate); // 2025-10-12T07:14:59.393Z
// console.log(myDate.getMonth()+1); // 9
// console.log(myDate.getDay()); // 0
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
myDate.toLocaleString('default',{
    weekday:"long",
})








