let score = 33
console.log(typeof(score)); // number

let otherscore = "33"
console.log(typeof(otherscore)); //string

//we can also change the data type
let valueInNumber = Number(otherscore)
console.log(typeof(valueInNumber)); // number

// but sometimes , exception 

let variable = "33abc"

let newno = Number(variable)
console.log(typeof(newno)); // number
//but is 33abc a number? -> NO
 console.log(newno); //NaN means it is not a number
 
//********************************************************* */

// Stack and Heap
/*
Stack(Primitive) , Heap(Non Primitive)
(copy is made)     (reference is given i.e is the original value)


*/

//this is primitive example

let myname = "Varuni"
let anothername = myname

anothername = "Srivastava"

console.log(myname); // Varuni
console.log(anothername); //Srivastava

//in primtive type a copy is passed that is why
//changing the value of 'anothername' does not change the value of 'myname'

//*** */

//example of non primitve type where passed by reference is used
let userOne = {
    name: "Varuni",
    id: 123
}

let userTwo = userOne
userTwo.name = "Srivastava"
console.log(userOne.name); // Srivastava
console.log(userTwo.name); // Srivastava

//here by reference is used so value of name is changed at bot the places
 



