// stack and heap memory

// stack- primitive
// heap- non- primitive memory 

let myyoutubename= " krishna tours"

let anothername = myyoutubename
anothername = " travel througgh worlds"


//console.log(anothername)
//console.log(myyoutubename)

let userone = {
    email: "krsihanasdfd@gami",
    upi: "upi@slfnd"
   
}

let usertwo = userone

usertwo.email = "hitesh@gamil.com"

// console.log(userone.email)
// console.log(usertwo.email)


/// strings-----------


const name = "hhitesh"

const repoCount = 50

///console.log(name + repoCount + "Value");// not used in modern days

console.log(`Heloo my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('kalli-hc')
console.log(gameName[0]);// string call through index

console.log(gameName.__proto__)// its called objects {}
console.log(gameName.length)
console.log(gameName.toUpperCase());// convert into upper case KALLI

console.log(gameName.charAt(4));

console.log(gameName.indexOf('i'));


const newString = gameName.substring(0,3);
console.log(newString);
const anotherString = gameName.slice(-2,1)
//console.log(anotherString);
const newStringone = 'krishan'
console.log(newStringone.trim());

// trim start and trim end isse satrting and ending se trim karte hye 
const url= "https:// krishna.com%20yadav"

console.log(url.replace('20%','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))
