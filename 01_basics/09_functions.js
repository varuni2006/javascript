function hello (username){
    return  `hello ,${username}` //use backsticks
}
console.log(hello("Abc"));

//now if you are preparing a shoping cart where you dont really know how many items is the customer gonna add to the cart.
//so in this case you dont know how many parameters to pass

//in this case REST function is used 
//it looks same as that of SPILL

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100));
console.log(calculateCartPrice(100,200));
console.log(calculateCartPrice(100,200,300,400));
//you can give as many values as you want after using rest function 


//Another usage style of REST
function calculateCartPrice2(val1,val2, ...num1){
    return num1
}
console.log(calculateCartPrice2(100,200,300,400));
//only [300,400] is printed ....why?
//cause 100 and 200 has gone into val1 and val2




//We can also pass objects as the parameters 

//first make an object

const user={
    username: "Varuni",
    price: 999
}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObjects(user)


//Arrays can also be passed as parameters

const myArray = [100,200,300]

function handlingArrays(anyarray){
    return anyarray[0]
}

console.log(handlingArrays(myArray));

