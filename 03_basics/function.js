//  console.log('k');
//  console.log('r');
//  console.log('i');
//  console.log('s');
//  console.log('h');
//  console.log('n');
//  console.log('a');


 function saymyname(){
     console.log('k');
 console.log('r');
 console.log('i');
 console.log('s');
 console.log('h');
 console.log('n');
 console.log('a');
 }

 // refrence of function

//  saymyname()


function addTwoNumbers(number1,number2){
    // console.log(number1 + number2);
    return number1+number2
}

addTwoNumbers(3,'4');//issme  yeah ek dusare ko samjhenge kii vo string hye aur 34 print kar denge 
 addTwoNumbers(3,4); // add karke print hoga 
 addTwoNumbers(3,null);// isme vo kewal ek value print karega


 // printing through store as variable

 const result = addTwoNumbers(3,5);
//  console.log("Result:", result);
 // result undefined given beaccause 

function loginusermsg(username){
    if(username === undefined){
        
   console.log("please enter the username")
   return
    }
    return `${username} just logged in`
}

 console.log(loginusermsg ("krishna"));
 console.log(loginusermsg ());// it gives the undefine not the null