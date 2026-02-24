 // this is the new objects 
 const tinderUser = new Object ()
 const tinderUser2 ={}

 tinderUser.id = "123abc"
 tinderUser.name = "sammy"
 tinderUser.isloggedIn = false

//  console.log(tinderUser);

 const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname:"krishna",
        lastname: "chaudhary"
        }
    }
 }

 //console.log(regularUser.fullname.userFullname.firstname);

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}
 const obj4 = {5: "a", 7: "b"}

 // const obj3 ={obj1,obj2}
 //const obj3=  object.assign({},obj1,obj2,obj4)

//  const obj3 = {...obj1, ...obj2}
//  console.log(obj3);

//  const useres = [
//     {
//         id = 
//     }
//  ]

console.log(tinderUser);

console.log(obj1.keys(tinderUser));
console.log(obj2.values(tinderUser));
