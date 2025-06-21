const myArr = [1, 2, 3]
const myArr2 = ["hello", "bye"]

// myArr.push(myArr2)   // isse array ke andar array aajata hai.
// console.log(myArr);

//concating two arrays 2 correct ways

my_new_Arr = myArr.concat(myArr2)  //concat only adds two arrays and in returns provides a new array
console.log(my_new_Arr);

//if you want to add more than 2 arrays

const hello = ["hie", "hii"]
const bye = ["bie", "bye"]
const also_array = ["new"]

//spread () is used
const result_arr = [ ...hello, ...bye, ...also_array]
console.log(result_arr);

//we can also maek an array from given variables
let score1 = 100
let score2 =200
let score3 = 300
console.log(Array.of(score1,score2,score3));

