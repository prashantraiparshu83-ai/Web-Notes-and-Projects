const mynums = [1,2,3,4]

// const myTotal = mynums.reduce(function(acc , crrval){
//     console.log(`acc: ${acc} and crrval ${crrval}`);
    
//     return acc + crrval
// },0)

// console.log(myTotal);

const myTotal = mynums.reduce((acc,crr) => acc + crr ,0)
console.log(myTotal);


const shoppingCart =[
    {
        itemname : "js course",
        price : 2999
    },
    {
        itemname : "py course",
        price : 999
    },
    {
        itemname : "mobile course",
        price : 5999
    },
    {
        itemname : "data science course",
        price : 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item) =>acc +item.price , 0  )

console.log(priceToPay)


