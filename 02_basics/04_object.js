//const tinderUser = new Object()   //singleton object
//console.log(tinderUser);    //output={}

//const tinderUser = {}      //non-singleton object
//console.log(tinderUser);   //output={} 
//----------------------------------------------------------

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);  //output={ id: '123abc', nane: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kartikeya",
            lastname: "shakya"
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname); // output=shakya


// how to merge two or more object there--
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2} 
   //+
//console.log(obj3); //output={ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//  ----------------------------------

//const obj3 = Object.assign({}, obj1, obj2)   //-- {}= this is also not required (use or nor use) 
//+
//console.log(obj3);  //output={ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//-----------------------------------------

//const obj3 = {...obj1, ...obj2} //spread operator using there
//console.log(obj3);              //output={ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }









const users = [
    {
        id: 1,
        email: "k@gmailcom"
    },
    {
        id: 2,
        email: "a@gmailcom"
    },
    {
        id: 3,
        email: "r@gmailcom"
    }
]

//console.log(users[0].email);  //output=k@gmailcom


//console.log(tinderUser);

//console.log(Object.keys(tinderUser));  //output=[ 'id', 'name', 'isLoggedIn' ]
//console.log(Object.values(tinderUser)); //output=[ '123abc', 'Sammy', false ]
//console.log(Object.keys(tinderUser).length);  //output=3
//console.log(Object.values(tinderUser).length); //output=3
//console.log(Object.entries(tinderUser)); //output=[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]  //less used of entries() in coding

//console.log(tinderUser.hasOwnProperty("isLoggedIn")); //output=true
//console.log(tinderUser.hasOwnProperty("isLoggedOut"));  //output=false





 
//part-3------------------------------------------------destructure in object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "kartik"
}
//console.log(course["courseinstructor"]);   //common method

//const {courseinstructor} = course
//console.log(courseinstructor);

const {courseinstructor: othername} = course
console.log(othername);