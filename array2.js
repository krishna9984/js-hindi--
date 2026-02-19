 const marvel_heroes = ["thor","ironman","spiderman"]

 const dcheroes= ["superman","flash","batman"]

 marvel_heroes.push(dcheroes);// agar isme " yeah " colon  lagayenge to vo separte siingle value man ke push kar deta hye array me 

//  console.log(marvel_heroes);

//   const allheroes = marvel_heroes.concat(dcheroes);
 
//  console.log(allheroes);


const all_new_heroes =  [... marvel_heroes,...dcheroes,];
//console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[76,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
// upper rule jo hye vo sabhi array ko open up karke solve kar dega 


// console.log(real_another_array);

console.log(Array.isArray("krishna"));
console.log(Array.from("krishna"))
console.log(Array.from({name:"krishna"})) // interesting for interviers