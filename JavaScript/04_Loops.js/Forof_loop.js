// for of

// [{} {} {}]
// ["" "" ""]

// const arr =[1,2 ,3 ,4 ,5]

// for (const element of arr) {
//     console.log(element);  
// }

// const greeting = "Hello World."
// for (const element of greeting) {
//     console.log(`Each char is ${element}`);
    
// }

//Maps
// maps dosen't print copy value it's print only unique value
const map = new Map()
map.set('In', "India")
map.set('USA', "United State Of America")
map.set('Fr', "france")
// map.set('In', "India")


// console.log(map);

for (const [key,value] of map) {
    // console.log(key);
    // console.log(key, ':-',value);
    
}

const myObject ={
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

for (const [key,value] of myObject) {
    
    console.log(key, ':-',value);// Error object is not iterable
}






