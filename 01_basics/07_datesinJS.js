// Dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());

//console.log(typeof myDate); //object

//let myCreatedDate = new Date(2025, 0, 23)
//console.log(myCreatedDate.toDateString());

//let myCreatedDate = new Date(2025, 0, 23, 5, 3)
//console.log(myCreatedDate.toLocaleString());
//let myCreatedDate = new Date("2025-01-14")
let myCreatedDate = new Date("01-14-2025")
//console.log(myCreatedDate.toLocaleString());


let mytimeStamp = Date.now()// new Date can be used

//console.log(mytimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));






let newDate = new Date()
//console.log(newDate.getMonth()+1);
//console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))