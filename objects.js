// singleton (yeah ek apne tarah ka eklauta object hye )

// object literals


const jsuser = { name: "krishna" ,age: 18,location:"jaipur",email:"krishna@gmail.com",lastloginday:["monday","tuesday"]}

console.log(jsuser.location);// aise bhi pata kar sakate hye aur alag tarika bhi hye 
console.log(jsuser);
console.log(jsuser["email"])// aisa isiliye use karte hye kyukii agar value defined hoo " fullname " to ham easily kar sake kyuki .se ham nhi call kar sakte 
jsuser.email = "kalii@gmail.cm"// aise hum isiliye value ko override kar sakte hye 

jsuser.greeting = function(){
    console.log(`hello js user,${this.name}`);

}

console.log(jsuser.greeting());// give sort result with undefined 
console.log(jsuser.greeting);// imp that is says anaonymsous 