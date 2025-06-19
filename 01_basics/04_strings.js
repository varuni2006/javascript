const name = "Varuni"
const id = 123

console.log(`Hello my name is ${name} and my id is ${id}`);

// these are not single or double quotes , these are backticks (`)

//String Initialise

const gamename = new String('Hello')

//different functions
console.log(gamename[0]); // H
console.log(gamename.length); //5
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));// l
console.log(gamename.indexOf('t'));

const newstring = gamename.substring(0,4)
console.log(newstring); // Hell as 4 th index is not included

//to trim starting and end spaces
const newString = "   Hello   "
console.log(newString); //     Hello     .   many spaces

console.log(newString.trim());//Hello (no extra spaces)

//want to make changes in url
const url = "https://varuni.com?varuni%20srivastava"
console.log(url.replace ('%20', '-'));

console.log((url.includes('hello'))); //false as it does not contain the word hello







