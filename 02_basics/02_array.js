const marvel_heros = ["Thor", "ironman","spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);    //output=[ 'Thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heros[3][1]);    // flash (2nd element of 2nd array) 



//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);     //output=[ 'Thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//spread operator method--
const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros); //output=[ 'Thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4 ,5]]]
const real_another_array = another_array.flat(Infinity)    //in flat() we given as a depth in finite number like as 1,2,3.....etc
//console.log(real_another_array);     //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5] 


//console.log(Array.isArray("kartik")); //output=false
//console.log(Array.from("kartik"));   //output=[ 'k', 'a', 'r', 't', 'i', 'k' ]
//console.log(Array.from({name: "kartikeya"}));  //output=[]  //interesting case




let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));  //output=[ 100, 200, 300 ]
