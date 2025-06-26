const myNums = [1,2,3]

const myTotal = myNums.reduce(function(accumulator, currentval){
    console.log(`acc: ${acc} and currentval: ${currentval}`);
    return accumulator + currentval    
},0) // there 0 is written cause curentval needs to be provided

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 100
    },
    {
        itemName: "data science course",
        price: 100
    },
    {
        itemName: "Ai course",
        price: 100
    }

]

//you want some of all these
const priceTopay = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(priceTopay);
