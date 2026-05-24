// ! Деструктуризация

const user = {
  name: 'Vika',
  age: 37
}

// const {name, age} = user;

// console.log(name);


// const isAdult  = ({name, age})=> {
//   if(age < 18) {
//     return `${name}, you're a kid, go away`
//   } else {
//     return `${name}, your age is ${age}, you're adult already`
//   }
// }

// isAdult(user);

// for (key in user) {
//   console.log(key, user[key]);
// }

// console.log(Object.keys(user).forEach((el)=> {
//   console.log(el);
// }));

console.log(Object.values(user));


const name = 'vasya';

for (el of name) {
  console.log(el);
  
}