 // in this we are going to talk about the strings 

 const name = "krishna"

 const repoCount = 50;

 //console.log( name    +" "+ repoCount +" " + "  Value  ");


 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gamename = new String('krishna');

 console.log(gamename[4]);
 console.log(gamename.__proto__);

 console.log(gamename.length);
 console.log(gamename.toUpperCase());// isse pura game name jo hye capital me milega 

 console.log(gamename.charAt(3));
  console.log(gamename.indexOf('h'));


  const newString = gamename.substring(0,4);
  console.log(newString);// this will not count the last calling strings

  const anotherString = gamename.slice(-5,4); // slice function will also allow the negative value 
 console.log(anotherString);// the length is samll then it will neglect the given value and proceed with 0

const url= "https:// krishna.com/hitesh%20yadav";
 console.log(url.replace('%20', '_'));

 console.log(gamename.split('_'));



