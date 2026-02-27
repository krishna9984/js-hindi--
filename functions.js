 // cart scenarious 

 function calculatecartprice(...num1){ // ... lagane se ham jitna bhi price rahega sabko arrray me dal payenge 
    // ... it is rest operator 

    return num1 // isse kewal ek hii price ayega 

 }

 //console.log(calculatecartprice(200,400,500));

 const user ={
    username:"hitesh",
    price:199

 }

 function handleobject(anyobject){
   console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
    
 }
 //handleobject(user)
  handleobject({
    username: "krishna",
    price : 399
  })

  const myNewArray = [200,400,100,1200];

  function returnSecondValue(getArray){
    return getArray[2]
  }

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue( ))
