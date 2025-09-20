//function scope called like [function sayName()]

function sayMyName(){        //function definition called there 
    console.log("K");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("I");
    console.log("K");
}

/*sayMyName()  ===//reference of funtion=sayMyName without() ,is called reference butsayName() with() is called as execution of function.
output=K
       A
       R
       A
       T
       I
       K    */


/*function addTwoNumbers(number1,number2){  //here when we make definition of function, in() we given parameters
    console.log(number1+number2);
} */

//if given addTwoNumbers(3,4) output is 7
//if given addTwoNumbers(3,"4") output is ==34
//if given addTwoNumbers(3,"a") output is ==3a
//if given addTwoNumbers(3,null) output is ==3

//addTwoNumbers(3,4)   //here in () bracket we have to given argument there //can say value there

//const result = addTwoNumbers(3,4)  //save in variable there
//console.log("Result: ", result);   //output=Result:  undefined

//============================

/* function addTwoNumbers(number1, number2){  
    let result = number1 + number2
    //console.log("Kartikeya") //yes this is execute because before return statement 
    return result
    //console.log("Kartik") //not execute because after return statement 
}*/
//const result = addTwoNumbers(3,5)
//console.log("Result: ",result); //output=Result:  8



//another method
function addTwoNumbers(number1, number2){ 
    return number1 + number2
}    
const result = addTwoNumbers(3,5)
//console.log("Result: ",result);  //output=Result:  8




/* function loginUserMessage(username){
    return `${username} just logged in`
}
//console.log(loginUserMessage("Kartikeya")); //output=Kartikeya just logged in

console.log(loginUserMessage(""));   //output= just logged in
console.log(loginUserMessage());     //output=undefined just logged in

*/

function loginUserMessage(username){  //if given (username="sam") this is condition never goes to if condition there and print with no () in value so output is =sam just logged in but with the but after pass the argument with another value like kartik so sam is override and output is kartik just logged in there //
    if(username===undefined /*in other method we write !username */ ){    //if condition is true there
    console.log("Please enter a username");
    return
    }
    return `${username} just logged in` //this statement is never read because we use already previous used of return in function
}
//console.log(loginUserMessage()); //  output=Please enter a username
                                   //         undefined
//console.log(loginUserMessage(""));   //output=just logged in


//==========================================================================================================================
//video number 20

/*function calculateCartPrice(...num1){   ///...this is here called rest op//  (spread or rest operator)  called there but these are different on basis of use case there
    return num1
} */
//console.log(calculateCartPrice(200,400,500)); //output=[ 200, 400, 500 ]


function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500,2000));  //output=[ 500, 2000 ]==  because val1 goes to 200 and val2 goes to 400 so num1 value is return only take 500,200




const user={
    username
}

