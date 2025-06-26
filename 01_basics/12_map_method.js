//map method 
const myNumers = [ 1,2,3,4,5,6,7,8]
const newNums = myNumers.map((num) => num +10)
console.log(newNums);
//other way of writing

//const newNums = myNumers.map((num) => { return num +10})

//the change in this example is that here we have opened the scope so return keyword is important

//chaining of methods 

//isme first method ko apply krne ke baad jo value aayegi vo second method mei pass on ho jayegi

const newNum = myNumers
               .map((num) => num*10)
               .map((num) => num + 1)
               .filter((num) => num>=40 ) // jo true hoga vhi pass hoga
console.log(newNum);
               