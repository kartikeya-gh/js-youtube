const name = "Kartikeya"
const repoCount = 50

//console.log(name + repoCount +" Value");


//``= backticks (make string-interpolation like make placeholder)
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //using mostly there

const gameName = new String('kartikeya-ks-com')
//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)//negative value is given but not reverse the output of string
//console.log(newString);

const anotherString = gameName.slice(-11, 4)
//console.log(anotherString);

const newStringOne = "    hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());  // trim is remove the space between string.

const url = "https://kartik.com/kartik%20shakya"
console.log(url.replace('%20', '-'));

console.log(url.includes('kartik'));
console.log(url.includes('pagal'));

console.log(gameName.split('-'));