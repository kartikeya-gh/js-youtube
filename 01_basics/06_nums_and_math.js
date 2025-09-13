const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2)); //for 100 to 100.00

const otherNumber = 123.8966
//console.log(otherNumber.toPrecision(4)); //output 123.9//



const hundreds = 1000000
//console.log(hundreds.toLocaleString()); //output is 1,000,000 (US Standard)
//console.log(hundreds.toLocaleString('en-IN')); //output is 10,00,000(INDIAN Standards)






//++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++
//console.log(Math);
//console.log(Math.abs(-4));  //output = 4    //abs stands for absolute value there means negative value convert in positive value not vice-versa
//console.log(Math.round(4.6)); //output = 5
//console.log(Math.ceil(4.1)); //output = 5 ceil ceiling value
//console.log(Math.floor(4.9)); //output = 4
//console.log(Math.min(4,8,9,3)); //output = 3(min value in array)
//console.log(Math.max(4,8,9,3)); //output = 9(max valuue in array)

console.log(Math.random()); //value always be differ but between in 0 and 1 there
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // value always given between 10 and 20 