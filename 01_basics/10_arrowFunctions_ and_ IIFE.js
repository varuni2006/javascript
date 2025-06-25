//Simple function syntax
const add = function(num1,num2){
    return num1 + num2
}



//Arrow FUnction Syntax
//this is explicit return

const addTwo = (num1,num2) => {
    return num1 + num2
} 
//implicit return

const addThem = (num1,num2) => (num1 + num2)

//explicity return likhne ki need nhi hai


//IIFE
//immediately invoked function expression 
//sometimews problem in scope occurs that is that global scope sometimes gets polluted 
//to avoid it IIFE is used 

(function hello(){
    console.log(`hello`);
    
}) ()

//just giving () () the function gets invoked and hello ges printed


//example

//using IIFE with arrow function and also passing parameters

//in steps 
/*
for arrow function dont write the keyword 'function' and put =>
    so in place of function(name){   
                    // name is the parameter passed
                    }
    do 

    demo(name) => {
        console.log( `hello ${name} `)    
     }

     //then to call the function 
     
*/
/* (demo(name) =>{
    console.log( ` hello ${name}`)
}) ('Varuni')

*/
//this is wrong beacuse if you want to give namw to the arrow function and also use IIFE that is not possible 
//if you are using IIFE and ARrow function then dont give it a name 

((name) => {
    console.log(` hello ${name} `);
    
}) ('Varuni')
//this is correct


//if you want named IIFE

(function chai(name){
    //named IIFE
    console.log(` hello ${name} `);
    
}) ('Varuni')

//if you wqant two IIFE together import part is that when one IIFE ends a semicolon ; is used

(function chai(){
    console.log(`hello people`);
    
}) ();

((name) =>{
    console.log(` hello ${name}`);
    
}) ('Varuni')