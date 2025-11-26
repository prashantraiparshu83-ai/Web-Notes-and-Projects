const date =  new Date();
console.log(date)

const date1 = new Date(172);
console.log(date1)

const date2 = new Date("2025-11-22");
console.log(date2)

const date3 = new Date("2025-11-23T17:48:25");
console.log(date3)

const date4 = new Date(2025,11,25,1,12,0,0);
console.log(date4)

// Date Method
console.log("toString : " + date.toString())
console.log("toDateString: " + date.toDateString())
console.log("toTimeString: " +date.toTimeString())
console.log("toISOString: " +date.toISOString())
console.log("toLocaleString: " +date.toLocaleString())
console.log("toLocaleDateString: " +date.toLocaleDateString())
console.log("toLocaleTimeString: " +date.toLocaleTimeString())

console.log("getFullYear: " + date.getFullYear())
console.log("getMonth: " + date.getMonth())
console.log("getDate: " + date.getDate())
console.log("getDay: " + date.getDay())
console.log("getHours: " + date.getHours())
console.log("getMinutes: " + date.getMinutes())
console.log("getSeconds: " + date.getSeconds())
console.log("getMilliseconds: " + date.getMilliseconds())
console.log("getTime: " + date.getTime())
console.log("getTimezoneOffset: " + date.getTimezoneOffset())

console.log("setFullYear: " + date.setFullYear(2024))
console.log("setMonth: " + date.setMonth(20))
console.log("setDate: " + date.setDate(13))
console.log("setHours: " + date.setHours(10))
console.log("setMinutes: " + date.setMinutes(20))
console.log("setSeconds: " + date.setSeconds(20))
console.log("setMilliseconds: " + date.setMilliseconds(20))
console.log("setTime: " + date.setTime(162748373384829))
