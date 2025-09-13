// array

const myArr = [0, 1, 2, 3, 4, 5,]
const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr2[3]);




// Array methods
//myArr.push(6)
//myArr.push(7)
//myArr.pop() // last value of entire array is deleted in output//
//myArr.unshift(9) //unshift is add new value from starting index value
//myArr.shift()      //shift is remove the first element entire array

//console.log(myArr.includes(3)); //in output is true or false(boolean) there check value in array 
//console.log(myArr.indexOf(9)); // OUTPUT is -1 for location






//const newArr = myArr.join()

//console.log(myArr); //output is [ 0, 1, 2, 3, 4, 5 ]
//console.log(newArr); //output is 0,1,2,3,4,5 datatype of newArr is string




//slice, splice
//const myArr = [0, 1, 2, 3, 4, 5,]
console.log("A ", myArr); //output=A  [ 0, 1, 2, 3, 4, 5 ]


const myn1 = myArr.slice(1, 3)
console.log(myn1);     //output=[ 1, 2 ]
console.log("B ", myArr);  //output=B  [ 0, 1, 2, 3, 4, 5 ] //this is not remove element of original array in given by slice operation


const myn2 = myArr.splice(1, 3)
console.log(myn2);      //output=[ 1, 2, 3 ]   
console.log("C ", myArr);  //output=C  [ 0, 4, 5 ]  //this is remove element in original array given by splice operation 

