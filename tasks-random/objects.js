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

// Задача:
// Используй деструктуризацию с переименованием.
//
// Верни строку:
// "Alex"

function getUserName({ name: userName, age }) {
    return `${userName}`;
}

console.log(
    getUserName({
        name: 'Alex',
        age: 25,
    })
);

// "Alex"

// Задача:
// Используй деструктуризацию со значением по умолчанию.
//
// Если city отсутствует,
// вернуть "Unknown".

function getCity({ city = 'Unknown' }) {
    return `${city}`;
}

console.log(
    getCity({
        city: 'Berlin',
    })
); // "Berlin"

console.log(getCity({})); // "Unknown"

// Задача:
// Не изменяя исходный объект,
// создай новый объект,
// где возраст увеличен до 30.

function updateAge(user) {
    const obj = { ...user };
    obj.age = 30;
    return obj;
}

const user = {
    name: 'Alex',
    age: 25,
};

console.log(updateAge(user));
// { name: "Alex", age: 30 }

console.log(user);
// { name: "Alex", age: 25 }

// Задача:
// Не изменяя исходный объект,
// добавь свойство city со значением "Berlin".

function addCity(user) {
    return { ...user, city: 'Berlin' };
}

const user = {
    name: 'Alex',
    age: 25,
};

console.log(addCity(user));

// {
//   name: "Alex",
//   age: 25,
//   city: "Berlin"
// }

// Задача:
// Не изменяя исходный объект,
// измени имя на "John".

function updateName(user) {
    return { ...user, name: 'John' };
}

const user = {
    name: 'Alex',
    age: 25,
};

console.log(updateName(user));

// { name: "John", age: 25 }

// Задача:
// Не изменяя исходный объект,
// добавь свойство city: "Berlin"
// и измени age на 30.

function updateUser(user) {
    return { ...user, city: 'Berlin', age: 30 };
}

const user = {
    name: 'Alex',
    age: 25,
};

console.log(updateUser(user));

// {
//   name: "Alex",
//   age: 30,
//   city: "Berlin"
// }

// Задача:
// Не изменяя исходный массив,
// добавь число 4 в конец.

function addNumber(arr) {
    // arr1 = [...arr];
    // arr1.push(4);
    // return arr1;
    return [...arr, 4];
}

console.log(addNumber([1, 2, 3]));

// [1, 2, 3, 4]

// Задача:
// Верни массив всех ключей объекта.

function getKeys(obj) {
    return Object.keys(obj);
}

console.log(
    getKeys({
        name: 'Alex',
        age: 25,
        city: 'Berlin',
    })
);

// ["name", "age", "city"]

// Задача:
// Верни массив всех значений объекта.

function getValues(obj) {
    return Object.values(obj);
}

console.log(
    getValues({
        name: 'Alex',
        age: 25,
        city: 'Berlin',
    })
);

// ["Alex", 25, "Berlin"]

// Задача:
// Верни массив пар [ключ, значение].

function getEntries(obj) {
    return Object.entries(obj);
}

console.log(
    getEntries({
        name: 'Alex',
        age: 25,
    })
);

// [
//   ["name", "Alex"],
//   ["age", 25]
// ]

// Задача:
// Верни массив только имен пользователей.
//
// Используй Object.values.

function getNames(users) {
    return Object.values(users).map((item) => item.name);
}

console.log(
    getNames({
        user1: { name: 'Alex' },
        user2: { name: 'John' },
        user3: { name: 'Kate' },
    })
);

// ["Alex", "John", "Kate"]

// Задача:
// Верни объект, в котором ключами будут имена пользователей,
// а значениями — их возраст.
//
// Используй Object.values.

function getUsersAges(users) {
    return Object.values(users).reduce((acc, item) => {
        const name = item.name;
        const age = item.age;
        acc[name] = age;
        return acc;
    }, {});
}

console.log(
    getUsersAges({
        user1: { name: 'Alex', age: 25 },
        user2: { name: 'John', age: 30 },
        user3: { name: 'Kate', age: 20 },
    })
);

// {
//   Alex: 25,
//   John: 30,
//   Kate: 20
// }
