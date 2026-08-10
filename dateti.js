 //Dates

 let myDate = new Date()

 console.log(myDate.toString());
 console.log(myDate.toLocaleString())

 console.log(myDate.toDateString())
//  console.log(myDate.toLocaleString)

console.log(typeof myDate);

let myCreateDate  = new Date(2026,7,15)
console.log(myCreateDate.toDateString())


let myTimeStamp = Date.now()

console.log(myTimeStamp);// output in milisecond value 

console.log(myCreateDate.getTime());// it gives the exact value 

console.log(Math.floor(Date.now()/1000));// it neglect decimal value

let newDate = new Date()

console.log(newDate);
console.log(newDate.getDay());

console.log(newDate.getMonth()+1);


// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone: ''
})