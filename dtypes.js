 // --------DATATYPES-------------//

 console.log("datatypes")
 
 // primitive

 // 7 types of primitive data types in javascript 
 // 1- string
 //2- Number, 
 //3- boolean
 //4- null
 //5- undefined
 //6- object
 //7- symbol
 //8- bigint

 const score= 100; 
 const scoreValue= 100.4

 const isLoggedIn= true;
 const outsideTemp = null

 let userEmail;

 const id= Symbol('343')
 const anotherId = Symbol('343')
 console.log(id=== anotherId) // its not the same value 

 const bigNumber = 34567890123456789012345n


 //** 
 // Reference(Non primitive ) 
 // Array, objects, functions
 // 
 // */


 const heros = ["ironman", "spider man", "thor"]

 let myObj={
    name: "krishna",
    age: 21,

 }


 // how to treat variable as a functions
 
 const myfunctions = function(){
console.log("hello world")

 }

 console.log(typeof bigNumber);