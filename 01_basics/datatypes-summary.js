
// Javascript is dynamically typed language 
// primitive datatypes
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined in output

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof id);
//console.log(id === anotherId); //(false)


const bigNumber = 59486485938056805394n //bigint (datatype)
//console.log(typeof bigNumber);



// Reference (non Primitive)
//3 types
// all non primitive datatype return in output using typeof result given always object there

// Array, Objects, Functions

const heros =["shaktiman", "naagraj", "doga"]  //array (datatype) but output in datatype will be(object)

//object (datatype) but output in datatype will be(object)
let myobj = {
    name: "kartikeya",
    age: 22,
}

//function (datatype) but output in datatype will be(function) or call will be(function object)
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof heros);
console.log(typeof myobj);
console.log(typeof myFunction);