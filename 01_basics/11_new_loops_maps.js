// same as for each loop

const arr = [1,2,3,4,5]

//this is called forof loop
//syntax
for (const element of object) {
    
}

for (const index of arr) {
    console.log(index);
    
}

//another example
const greetings = "Hello World"
for (const greet of greetings) {
    console.log(greet);
    
}

//Maps
//key va;ue pairs
//example
//it only has unique values

const map = new Map()
map.set('IN' , "India")
map.set('US' , "America")
map.set('AF' , "Africa")

//loop on map 

for (const [key,value] of map) {
    console.log(key, ':-', value);
    
}
//for of loop can not be used to iterate over object

//for in loop is used for objects

const myObject = {
    js: "javascript",
    cpp: 'C++',
    rb:"ruby",
    swift:"swift by apple"
}

//for in loop
for (const key in myObject) {
    console.log(key);
    
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

//can forin loop be used for array?

const programming = ["js", "rb","py","java","cpp"]
for (const key in programming) {
    console.log(key); // 0 1 2 3 4 will be printed
    
}
for (const key in programming) {
   console.log(programming[key]);
   
}



//in forof loop directly values are printed 


//ForEach loop is more common for arrays
const coding = [ "js", "cpp","python"]

coding.forEach(function (val){
    console.log(val);
    
})

//for each loop with arrow functions

coding.forEach((item) =>{
    console.log(item);
    
})

 