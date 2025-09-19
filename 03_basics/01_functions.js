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


function addTwoNumbers(number1,number2){  //here
    console.log(number1+number2);
}

//if given addTwoNumbers(3,"4") output is ==34
//if given addTwoNumbers(3,"a") output is ==3a
//if given addTwoNumbers(3,null) output is ==3
addTwoNumbers(3,4)   //here in () bracket we have to given argument there