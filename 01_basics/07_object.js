//object literals

const JsUser = {
    name: "Varuni",
    "full name": "Varuni Srivastava",
    location: "delhi",
    isLoggedin: false,
    lastLoginDays: ["Monday","Tuesday"]
}

//now to access properties of an object there are 2 ways
//1.dotnotation
console.log(JsUser.name);

//better way
//2.bracket notation
console.log(JsUser["name"]);

console.log(JsUser["full name"]);

//Now making symbol as an property of object or as a key of object

const mySym = Symbol("key1")
const hello ={

    [mySym]: "mykey2" 
}
console.log(hello[mySym]);

//now if you want that object ki properties must be freezed so that they could not be changed in the future so
Object.freeze(JsUser) 



//Object singleton or Object constructor

const obj1 = { 1: "a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e" , 6:"f"}

const new_obj = Object.assign({}, obj1, obj2, obj3)
//if {} is not written then also it will work but in that case obj 1 will be the target and all othera will be the source
//this means all the objects get combined and gets stored in the first mentioned objects
// so in the used example all the objects will get combined and then stored in new object {}

//SPREAD operator

const result_obj = {...obj1, ...obj2}
console.log(obj3);


//we can also access the keys and values seperately of a object 

console.log(Object.keys(JsUser));
console.log(Object.values(JsUser));

//to get each key and its respective value in the form of array
console.log(Object.enteries(JsUser));


