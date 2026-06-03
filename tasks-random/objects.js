// ! Деструктуризация

const user = {
    name: 'Vika',
    age: 37,
};

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

// ! structuredClone(obj) - глубокое копирование, библиотека lodash _.cloneDeep()
// ! JSON.parse(JSON.stringify(obj))

const user = {
    name: 'Anna',
    sayHi: function () {
        return 'Hi!';
    },
};
const newUser = JSON.parse(JSON.stringify(user));
console.log(newUser); //! проебал функцию

const userA = {
    name: 'Иван',
    skills: {
        html: true,
        js: false,
    },
};

// Как сделать так, чтобы userB стал абсолютно независимым?
const userB = JSON.parse(JSON.stringify(userA));
console.log(userB);
