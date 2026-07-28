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

// Задача:
// Верни массив строк вида:
//
// "Alex: 25"
// "John: 30"
// "Kate: 20"
//
// Используй Object.values и map.

function getUsersInfo(users) {
    return Object.values(users).map((item) => `${item.name}: ${item.age}`);
}

console.log(
    getUsersInfo({
        user1: { name: 'Alex', age: 25 },
        user2: { name: 'John', age: 30 },
        user3: { name: 'Kate', age: 20 },
    })
);

// [
//   "Alex: 25",
//   "John: 30",
//   "Kate: 20"
// ]

// Задача:
// Верни объект только со взрослыми пользователями (age >= 18).
//
// Используй Object.entries.

function getAdults(users) {
    const array = Object.entries(users).filter((arr) => arr[1].age >= 18);
    return Object.fromEntries(array);
}

console.log(
    getAdults({
        user1: { name: 'Alex', age: 25 },
        user2: { name: 'John', age: 15 },
        user3: { name: 'Kate', age: 20 },
    })
);

// {
//   user1: { name: "Alex", age: 25 },
//   user3: { name: "Kate", age: 20 }
// }

// Задача:
// Верни массив ключей пользователей,
// чей возраст >= 18.
//
// Используй Object.entries.

function getAdultUserKeys(users) {
    return Object.entries(users)
        .filter((arr) => arr[1].age >= 18)
        .map((item) => item[0]);
}

console.log(
    getAdultUserKeys({
        user1: { name: 'Alex', age: 25 },
        user2: { name: 'John', age: 15 },
        user3: { name: 'Kate', age: 20 },
    })
);

// ["user1", "user3"]

// Задача:
// Верни массив имен только взрослых пользователей.
//
// Используй Object.entries.

function getAdultNames(users) {
    return Object.entries(users)
        .filter((arr) => arr[1].age >= 18)
        .map((item) => item[1].name);
}

console.log(
    getAdultNames({
        user1: { name: 'Alex', age: 25 },
        user2: { name: 'John', age: 15 },
        user3: { name: 'Kate', age: 20 },
    })
);

// ["Alex", "Kate"]

// Задача:
// Верни объект,
// где ключ — имя пользователя,
// значение — весь объект пользователя.
//
// Используй Object.values и reduce.

function keyByName(users) {
    return Object.values(users).reduce((acc, item) => {
        acc[item.name] = item;
        return acc;
    }, {});
}

console.log(
    keyByName({
        user1: { name: 'Alex', age: 25 },
        user2: { name: 'John', age: 30 },
        user3: { name: 'Kate', age: 20 },
    })
);

// {
//   Alex: { name: "Alex", age: 25 },
//   John: { name: "John", age: 30 },
//   Kate: { name: "Kate", age: 20 }
// }

// Задача:
// Верни объект,
// где ключ — возраст,
// значение — количество пользователей этого возраста.

function countByAge(users) {
    return Object.values(users).reduce((acc, item) => {
        if (!acc[item.age]) {
            acc[item.age] = 1;
        } else {
            acc[item.age]++;
        }

        return acc;
    }, {});
}

console.log(
    countByAge({
        user1: { name: 'Alex', age: 20 },
        user2: { name: 'John', age: 30 },
        user3: { name: 'Kate', age: 20 },
        user4: { name: 'Mike', age: 30 },
        user5: { name: 'Bob', age: 30 },
    })
);

// {
//   20: 2,
//   30: 3
// }

// Задача:
// Верни возраст,
// который встречается чаще всего.
//
// Если:
// 20 -> 2 человека
// 30 -> 3 человека
//
// вернуть 30

function getMostCommonAge(users) {
    const ages = Object.values(users).reduce((acc, obj) => {
        if (!acc[obj.age]) {
            acc[obj.age] = 1;
        } else {
            acc[obj.age]++;
        }

        return acc;
    }, {});
    return Object.entries(ages).reduce((acc, arr) =>
        acc[1] > arr[1] ? acc[0] : arr[0]
    );
}

console.log(
    getMostCommonAge({
        user1: { name: 'Alex', age: 20 },
        user2: { name: 'John', age: 30 },
        user3: { name: 'Kate', age: 20 },
        user4: { name: 'Mike', age: 30 },
        user5: { name: 'Bob', age: 30 },
    })
);

// 30

// Задача:
// Верни объект,
// где ключ — возраст,
// значение — массив имен людей этого возраста.

function groupNamesByAge(users) {
    return Object.values(users).reduce((acc, obj) => {
        if (!acc[obj.age]) {
            acc[obj.age] = [];
        }
        acc[obj.age].push(obj.name);

        return acc;
    }, {});
}

console.log(
    groupNamesByAge({
        user1: { name: 'Alex', age: 20 },
        user2: { name: 'John', age: 30 },
        user3: { name: 'Kate', age: 20 },
        user4: { name: 'Mike', age: 30 },
    })
);

// {
//   20: ["Alex", "Kate"],
//   30: ["John", "Mike"]
// }

// Задача:
// Верни объект,
// где ключ — первая буква имени,
// значение — массив имен на эту букву.

function groupByFirstLetter(users) {
    return Object.values(users).reduce((acc, obj) => {
        if (!acc[obj.name[0]]) {
            acc[obj.name[0]] = [];
        }
        acc[obj.name[0]].push(obj.name);

        return acc;
    }, {});
}

console.log(
    groupByFirstLetter({
        user1: { name: 'Alex' },
        user2: { name: 'Anna' },
        user3: { name: 'John' },
        user4: { name: 'Jack' },
    })
);

// {
//   A: ["Alex", "Anna"],
//   J: ["John", "Jack"]
// }


//! ЗАДАЧА: Обновление пользователя

/*
Напиши функцию updateUser(user, updates).

Она должна вернуть новый объект пользователя:
- заменить свойства, переданные в updates;
- сохранить остальные свойства;
- добавить свойство updatedAt со значением '2026-07-27'.

Исходные объекты изменять нельзя.
*/

const user = {
    id: 1,
    name: 'Анна',
    age: 25,
    city: 'Одесса',
};

const updates = {
    name: 'Мария',
    age: 30,
};

function updateUser(user, updates) {
    return {
        ...user,
        ...updates,
        updatedAt: '2026-07-27'
    }
}

console.log(updateUser(user, updates));
// {
//   id: 1,
//   name: 'Мария',
//   age: 30,
//   city: 'Одесса',
//   updatedAt: '2026-07-27'
// }

console.log(user);
// { id: 1, name: 'Анна', age: 25, city: 'Одесса' }


//! ЗАДАЧА: Удаление пароля

/*
Напиши функцию hidePassword(user).

Она должна вернуть новый объект без свойства password.
Исходный объект изменять нельзя.

Используй деструктуризацию и rest-оператор.
*/

const user = {
    id: 1,
    name: 'Анна',
    password: '1234',
    city: 'Одесса',
};

function hidePassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;

}

console.log(hidePassword(user));
// { id: 1, name: 'Анна', city: 'Одесса' }

console.log(user);
// { id: 1, name: 'Анна', password: '1234', city: 'Одесса' }

//! ЗАДАНИЕ
//
// Верни новый объект пользователя с обновлениями.
// Исходные объекты изменять нельзя.

const user = {
    id: 1,
    name: 'Анна',
    age: 25,
    city: 'Одесса',
};

const updates = {
    name: 'Мария',
    age: 30,
};

function updateUser(user, updates) {
    return { ...user, ...updates };
}

const updatedUser = updateUser(user, updates);

console.log(updatedUser);
// {
//   id: 1,
//   name: 'Мария',
//   age: 30,
//   city: 'Одесса'
// }

console.log(user);
// исходный объект не изменился