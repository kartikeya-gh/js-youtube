//in javascript to learn two things are clear like as objects and events...



//to object to declare two ways first is literal and second one is constructor(singleton)
//singletone-- create object by constructor is called singleton and this is not create by literal
//Object.create =====//object through contructor method


const mySym = Symbol("key1")    //let take this line only symbol datatype in const-variable

// object literals here below
const JsUser = {
    name: "Kartikeya",  //in key as a saved of string like in double quotes="name" to memory there
    "full name": "Kartikeya Shakya",
    [mySym]: "mykey1",            //this is a right syntax for symbol datatype 
    age: 22,
    location: "Noida",
    email: "kartikeya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email);      //output=kartikeya@google.com
//console.log(JsUser[email]);     //output is error
//console.log(JsUser["email"]);   //output=Kartikeya@google.com



// console.log(JsUser.full name); //error
// console.log(JsUser["full name"]);  //output=Kartikeya Shakya

//console.log(JsUser.mySym);  //output=mykey1 but datatype of output is string not symbol there...//
//console.log(typeof mySym);  //output=symbol
//console.log(mySym);         //output=Symbol(key1)

//console.log(JsUser[mySym]);  //output=mykey1 








//---------------------------
//JsUser.email = "kartik@chatgpt.com" //this is replace in original object
//Object.freeze(JsUser)            //this is make for not replacable using freeze 
//JsUser.email = "kartik@amazon.com" //not updated because previously used of freeze there 
//console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS user");
}


//console.log(JsUser.greeting);     //output=[Function (anonymous)]
//console.log(JsUser.greeting());   //output=Hello JS user ,  undefined


JsUser.greetingTwo = function() {
    console.log(`Hello JS user ${this.name}`);
}

console.log(JsUser.greetingTwo());    //output=Hello JS user Kartikeya , undefined