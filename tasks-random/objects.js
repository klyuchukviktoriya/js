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

// Задача:
// Напиши функцию getName(user),
// которая возвращает имя пользователя.

function getName(user) {
    return user.name;
}

console.log(
    getName({
        name: 'Alex',
        age: 25,
    })
); // "Alex"

// Задача:
// Напиши функцию getUserInfo(user).
//
// Она должна вернуть строку:
//
// "Alex (25)"

function getUserInfo(user) {
    return `${user.name} (${user.age})`;
}

console.log(
    getUserInfo({
        name: 'Alex',
        age: 25,
    })
);

// Задача:
// Напиши функцию getUserInfo(user).
//
// Если age >= 18:
// вернуть "Alex (adult)"
//
// Если age < 18:
// вернуть "Alex (child)"

function getUserInfo(user) {
    return user.age >= 18 ? `${user.name} (adult)` : `${user.name} (child)`;
}

console.log(
    getUserInfo({
        name: 'Alex',
        age: 25,
    })
); // "Alex (adult)"

console.log(
    getUserInfo({
        name: 'John',
        age: 15,
    })
); // "John (child)"

// Задача:
// Напиши функцию getPropertyCount(obj).
//
// Она должна вернуть количество свойств объекта.

function getPropertyCount(obj) {
    return Object.keys(obj).length;
}

console.log(
    getPropertyCount({
        name: 'Alex',
        age: 25,
        city: 'Berlin',
    })
); // 3

// Задача:
// Напиши функцию hasProperty(obj, key).
//
// Она должна вернуть true,
// если такое свойство есть в объекте,
// иначе false.

function hasProperty(obj, key) {
    return obj.hasOwnProperty(key);
}

console.log(
    hasProperty(
        {
            name: 'Alex',
            age: 25,
        },
        'name'
    )
); // true

console.log(
    hasProperty(
        {
            name: 'Alex',
            age: 25,
        },
        'city'
    )
); // false

// Задача:
// Перепиши функцию так,
// чтобы внутри использовалась деструктуризация.

function getUserInfo(user) {
    // return `${user.name} (${user.age})`;
    const { name, age } = user;
    return `${name} (${age})`;
}

console.log(
    getUserInfo({
        name: 'Alex',
        age: 25,
    })
);

// "Alex (25)"

// Задача:
// Используй деструктуризацию.
//
// Верни строку:
// "Alex from Berlin"

function getUserLocation(user) {
    const { name, city } = user;
    return `${name} from ${city}`;
}

console.log(
    getUserLocation({
        name: 'Alex',
        city: 'Berlin',
    })
);

// "Alex from Berlin"

// Задача:
// Используй деструктуризацию прямо в параметрах функции.

function getUserInfo({ name, age }) {
    return `${name} (${age})`;
}

console.log(
    getUserInfo({
        name: 'Alex',
        age: 25,
    })
);

// "Alex (25)"
