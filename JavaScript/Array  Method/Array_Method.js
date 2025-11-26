console.log([1,2,3].length ) // 3
console.log([1,2,3].push(4) ) // [1,2,3,4]
console.log([1,2,3].unshift(0) ) // [0,1,2,3]
console.log([1,2,3].pop() ) // [1,2]
console.log([1,2,3].shift() ) // [2,3]
console.log([1,2,3].at(2) ) // 3
console.log([1,2,3].indexOf(3) ) // 2
console.log([1,2,3].includes(3) ) // true
console.log([1,2,3].map((num) => num * 2) ) // [2,4,6]
console.log([1,2,3].filter((num) => num >1) ) // [2,3]
console.log([1,2,3].every((num) => num > 0) ) // true
console.log([1,2,3].some((num) => num > 2) ) // true
console.log([1,2,3].fill(0)) // [0,0,0]
console.log([1,2,3].reduce((acc , num) => acc + num , 0) ) // 6
console.log([1,2,3].concat([4,5]) ) // 3
console.log([1,2,3].reverse() ) // [3 ,2,1]
console.log([1,2,3].sort() ) // [1,2,3]
console.log([1,2,3].join("-") ) // "1-2-3"
console.log([1,2,3].flat() ) // [1,2,3]
console.log([1,2,3].find((num) => num === 1) ) // 1
console.log([1,2,3].findIndex((num) => num === 2) ) // 1
console.log([1,2,3].toString() ) // "1,2,3"
console.log([1,2,3].toLocaleString()) // "1,2,3"
console.log([1,2,3].slice(1,2)) // [2]
console.log([1,2,3].splice(1,1,"a")) // "1,2,3"
console.log([1,2,3].toLocaleString()) // [1,'a',3]
console.log(Array.isArray([1,2,3])) // true
console.log([1,2,3].toLocaleString()) // "1,2,3"
console.log(Array.from("123")) // ['1','2','3']

console.log()
console.log()
console.log()

console.log("JavaScript".length)
console.log("JavaScript"[2])
console.log("JavaScript".charAt(2))
console.log("JavaScript".charCodeAt(2))
console.log("JavaScript".indexOf("S"))
console.log("JavaScript".toLowerCase())
console.log("JavaScript".toUpperCase())
console.log("JavaScript".slice(2,5))
console.log("JavaScript".substring(2,5))
console.log("JavaScript".substr(2,2))
console.log("JavaScript".concat(" Dev"))
console.log("JavaScript Dev".split(" "))
console.log("JavaScript Dev".includes("Dev"))
console.log("JavaScript Dev".replace("Dev" , "JS"))
console.log("JavaScript Dev".replaceAll("Dev" , "JS"))
console.log(" JavaScript Dev ".trim())
console.log(" JavaScript Dev ".trimStart())
console.log(" JavaScript Dev ".trimEnd())
console.log("Dev" .padStart(10 , "*"))
console.log("Dev" .padEnd(10 , "*"))
console.log("JavaScript Dev".startsWith("Java"))
console.log("JavaScript Dev".endsWith("Dev"))
console.log("JavaScript Dev".repeat(3))
console.log("JavaScript Dev".indexOf("JavaScript"))
console.log("JavaScript Dev".lastIndexOf("JavaScript"))
console.log("JavaScript Dev".search("Dev"))
console.log("JavaScript Dev".includes("Dev"))







