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
 




