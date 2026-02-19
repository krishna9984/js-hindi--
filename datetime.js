 // in this i am going to study about the time and date functionality 

 let myDate = new Date()
 console.log(myDate);
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());// yeah time ko local language understand form me dete hye 
 console.log(typeof myDate);// date is object 


 let mycreateddate = new Date(2004,4,21)// it count the months from the zero
 console.log(mycreateddate.toDateString());

 // timestamps

//  let mytimestamp = Date.now();
//  console.log(mytimestamp);// output given in the milisecond value 
//  console.log(mycreateddate.getTime());
//  console.log(Math.floor(Date.now()/1000));// isse value decimal me nhi milegi kewal second me milegi 


let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);




 
