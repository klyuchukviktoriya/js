// ! Массивы
// length - длина
//  методы
// ! мутируют оригинальный массив
//! push - добавляет элемент в конец массива
// возвращает длину массива
//! pop - удаляет последний ()
// возвращает удаленный элемент
//! unshift добавляет  элемент в начало массива
// возвращает длину
//! shift удаляет первый
// возвращает удаленный
// ! splice удаляет (с какого, сколько элементов, чем заменить если надо)
// возвращает удаленные
//!-----------------------------------------

// ! не мутирует
//! forEach - перебирает, передаем функцию колбеком
// нифига не возвращает, просто перебирает, если законсолить - будет undefined

//! map перебирает, передаем колбэк
// возвращает новый массив

//! slice копирует часть массива с того элемента который передала
// возвращает новый массив
// ! concat соединяет Массивы
// возвращает новый массив
// ! join делает строку
// возвращает новый
// ! includes проверяет наличие элемента
// буль
const arr1 = [1, 2, 3];

const arr2 = new Array(4, 5, 6);

// console.log(arr1);
// console.log(arr2);

// console.log(arr1.length);

// console.log(arr1 === arr2); // false (ссылочный тип данных объект)

const arr3 = arr1;

// console.log(arr1 === arr3); // true, потому что скопирована ссылка на массив
arr3[0] = 88;
// console.log(arr1); //[ 88, 2, 3 ]
// console.log(arr1[0]);

// arr1.push(77);
// console.log(arr1);
// arr1.pop();
// const deletedWithPop = arr1.pop();
// console.log(deletedWithPop = arr1.pop();

console.log(arr1);
// arr1.unshift(123);
// console.log(arr1);
// console.log(arr1.shift();

// arr1.forEach(el=> console.log(el *3));

// const foreachMethod = arr1.forEach(el => el *3);
// console.log(foreachMethod); // undefined

const mapped = arr1.map((el) => el * 2);
console.log(mapped);

const numbers = [1, 2, 3, 4];

numbers.forEach((el, index) => {
    console.log(el * 2, index);
});

// ! Деструктуризация

// const arr = ['apple', 'orange', 'banana'];

// const [first, second, third] = arr;

// console.log(second);

// const arrSlice = arr.slice(1);
// console.log(arrSlice);
// console.log(arr);

// arr.splice(1, 0, 'plum');
// arr.splice(1, 1, 'grape');
// arr.splice(1, 1);
// console.log(arr);
// const arrConcat = arr.concat(arr1);
// console.log(arrConcat);

console.log(arr.join(', '));

const arr = ['apple', 'orange', 'banana'];
// console.log(arr.includes('banana'));
// console.log(arr.includes('hello'));
// console.log(arr.indexOf('banana'));
// console.log(arr.indexOf('hello'));

console.log(arr);

// ! find

const numbers = new Array(1, 2, 3, 4);

function sumNumbers(arr) {
    const sum = arr.reduce((acc, number) => (acc += number), 0);
    console.log(sum);
}

sumNumbers(numbers);

function arrayFromArgs() {
    const arrLetters = Array.from(arguments);
    console.log(arrLetters);
}

arrayFromArgs(1, 2, 3, 4, 5);

//  -- 1 --
// У вас є масив об’єктів fruits, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

const fruits = [
    { id: 0, fruitName: 'Apple' },
    { id: 1, fruitName: 'Tomat' },
    { id: 2, fruitName: 'Cherry' },
    { id: 3, fruitName: 'Orange' },
];

let names = fruits.map((item) => item.fruitName);
console.log(names);

//  -- 5 --
// Вирахуйте середній вік

const girls = [
    { age: 23, name: 'Оля' },
    { age: 29, name: 'Аня' },
    { age: 10, name: 'Юля' },
    { age: 20, name: 'Катя' },
];
const age = girls.reduce((acc, item) => (acc += item.age), 0) / girls.length;
console.log(age);

// Задача:
// Напиши функцию getFirstElement(arr),
// которая возвращает первый элемент массива.

function getFirstElement(arr) {
    return arr[0];
}

console.log(getFirstElement([10, 20, 30])); // 10
console.log(getFirstElement(['a', 'b'])); // "a"
console.log(getFirstElement([true])); // true

// Задача:
// Напиши функцию getLastElement(arr),
// которая возвращает последний элемент массива.

function getLastElement(arr) {
    return arr[arr.length - 1];
}

console.log(getLastElement([10, 20, 30])); // 30
console.log(getLastElement(['a', 'b'])); // "b"
console.log(getLastElement([true])); // true

// Задача:
// Напиши функцию getArrayLength(arr),
// которая возвращает длину массива.

function getArrayLength(arr) {
    return arr.length;
}

console.log(getArrayLength([10, 20, 30])); // 3
console.log(getArrayLength(['a', 'b'])); // 2
console.log(getArrayLength([])); // 0

// Задача:
// Напиши функцию getSecondElement(arr),
// которая возвращает второй элемент массива.

function getSecondElement(arr) {
    return arr[1] !== undefined ? arr[1] : 'второго элемента не существует';
}

console.log(getSecondElement([10, 20, 30])); // 20
console.log(getSecondElement(['a', 'b'])); // "b"
console.log(getSecondElement([true, false])); // false

// Задача:
// Напиши функцию containsElement(arr, value),
// которая возвращает true, если элемент есть в массиве,
// и false, если элемента нет.

function containsElement(arr, value) {
    return arr.includes(value);
}

console.log(containsElement([1, 2, 3], 2)); // true
console.log(containsElement([1, 2, 3], 5)); // false
console.log(containsElement(['a', 'b'], 'a')); // true
console.log(containsElement(['a', 'b'], 'c')); // false

// Задача:
// Напиши функцию addElement(arr, value),
// которая добавляет элемент в конец массива
// и возвращает массив.

function addElement(arr, value) {
    arr.push(value);
    return arr;
}

console.log(addElement([1, 2, 3], 4)); // [1, 2, 3, 4]
console.log(addElement([], 'a')); // ["a"]

// Задача:
// Напиши функцию removeLastElement(arr),
// которая удаляет последний элемент массива
// и возвращает массив.

function removeLastElement(arr) {
    arr.pop();
    return arr;
}

console.log(removeLastElement([1, 2, 3])); // [1, 2]
console.log(removeLastElement(['a', 'b'])); // ["a"]
console.log(removeLastElement([true])); // []

// Задача:
// Напиши функцию addElementToStart(arr, value),
// которая добавляет элемент в начало массива
// и возвращает массив.

function addElementToStart(arr, value) {
    arr.unshift(value);
    return arr;
}

console.log(addElementToStart([2, 3], 1)); // [1, 2, 3]
console.log(addElementToStart(['b'], 'a')); // ["a", "b"]
console.log(addElementToStart([], 1)); // [1]

// Задача:
// Напиши функцию removeFirstElement(arr),
// которая удаляет первый элемент массива
// и возвращает массив.

function removeFirstElement(arr) {
    arr.shift();
    return arr;
}

console.log(removeFirstElement([1, 2, 3])); // [2, 3]
console.log(removeFirstElement(['a', 'b'])); // ["b"]
console.log(removeFirstElement([true])); // []

// Задача:
// Напиши функцию sumArray(arr),
// которая возвращает сумму всех чисел в массиве.
//
// Пока без reduce.
// Используй то, что считаешь нужным.

function sumArray(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }

    return sum;
}

console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([10, 20])); // 30
console.log(sumArray([])); // 0

// Задача:
// Напиши функцию countEvenNumbers(arr),
// которая возвращает количество чётных чисел в массиве.

function countEvenNumbers(arr) {
    let sum = [];
    arr.forEach((item) => {
        if (item % 2 === 0) {
            sum.push(item);
        }
    });
    return sum.length;
}

console.log(countEvenNumbers([1, 2, 3, 4])); // 2
console.log(countEvenNumbers([2, 4, 6])); // 3
console.log(countEvenNumbers([1, 3, 5])); // 0

// Задача:
// Напиши функцию getEvenNumbers(arr),
// которая возвращает новый массив
// только с чётными числами.

function getEvenNumbers(arr) {
    return arr.filter((item) => item % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4])); // [2, 4]
console.log(getEvenNumbers([2, 4, 6])); // [2, 4, 6]
console.log(getEvenNumbers([1, 3, 5])); // []

// Задача:
// Напиши функцию hasNegativeNumber(arr),
// которая возвращает true,
// если в массиве есть хотя бы одно отрицательное число.

function hasNegativeNumber(arr) {
    return arr.some((num) => num < 0);
}

console.log(hasNegativeNumber([1, 2, 3])); // false
console.log(hasNegativeNumber([1, -2, 3])); // true
console.log(hasNegativeNumber([-1])); // true

// Задача:
// Напиши функцию doubleNumbers(arr),
// которая возвращает новый массив,
// где каждое число умножено на 2.

function doubleNumbers(arr) {
    return arr.map((item) => item * 2);
}

console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
console.log(doubleNumbers([10, 20])); // [20, 40]
console.log(doubleNumbers([])); // []

// Задача:
// Напиши функцию getStringsLongerThan3(arr),
// которая возвращает новый массив
// только со строками длиннее 3 символов.

function getStringsLongerThan3(arr) {
    return arr.filter((item) => item.length > 3);
}

console.log(getStringsLongerThan3(['hi', 'hello', 'JS', 'world'])); // ["hello", "world"]
console.log(getStringsLongerThan3(['a', 'ab'])); // []
console.log(getStringsLongerThan3(['JavaScript'])); // ["JavaScript"]

// Задача:
// Напиши функцию getNames(arr),
// где arr — массив объектов вида:
//
// [
//   { name: "Alex", age: 25 },
//   { name: "John", age: 30 }
// ]
//
// Функция должна вернуть массив имен.

function getNames(arr) {
    return arr.map((item) => item.name);
}

console.log(
    getNames([
        { name: 'Alex', age: 25 },
        { name: 'John', age: 30 },
    ])
); // ["Alex", "John"]

// Задача:
// Напиши функцию getAdults(arr),
// которая возвращает массив объектов,
// у которых age >= 18.

function getAdults(arr) {
    return arr.filter((item) => item.age >= 18);
}

console.log(
    getAdults([
        { name: 'Alex', age: 25 },
        { name: 'John', age: 15 },
        { name: 'Kate', age: 18 },
    ])
);

// [
//   { name: "Alex", age: 25 },
//   { name: "Kate", age: 18 }
// ]

// Задача:
// Напиши функцию getAdultNames(arr),
// которая возвращает массив имен
// только совершеннолетних людей.

function getAdultNames(arr) {
    let names = [];
    arr.forEach((item) => {
        if (item.age >= 18) {
            names.push(item.name);
        }
    });
    return names;
}

console.log(
    getAdultNames([
        { name: 'Alex', age: 25 },
        { name: 'John', age: 15 },
        { name: 'Kate', age: 18 },
    ])
);

// ["Alex", "Kate"]

// Задача:
// Напиши функцию getAverageAge(arr),
// которая возвращает средний возраст всех людей.
//
// Гарантируется, что массив не пустой.

function getAverageAge(arr) {
    return arr.reduce((acc, item) => (acc += item.age), 0) / arr.length;
}

console.log(
    getAverageAge([
        { name: 'Alex', age: 20 },
        { name: 'John', age: 30 },
    ])
); // 25

// Задача:
// Напиши функцию getOldestPerson(arr),
// которая возвращает объект самого старшего человека.

function getOldestPerson(arr) {
    return arr.reduce((acc, item) => (acc.age > item.age ? acc : item));
}

console.log(
    getOldestPerson([
        { name: 'Alex', age: 20 },
        { name: 'John', age: 30 },
        { name: 'Kate', age: 25 },
    ])
);

// { name: "John", age: 30 }

// Задача:
// Напиши функцию getTotalAge(arr),
// которая возвращает сумму возрастов всех людей.

function getTotalAge(arr) {
    return arr.reduce((acc, item) => (acc += item.age), 0);
}

console.log(
    getTotalAge([
        { name: 'Alex', age: 20 },
        { name: 'John', age: 30 },
        { name: 'Kate', age: 25 },
    ])
); // 75

// Задача:
// Напиши функцию hasAdult(arr),
// которая возвращает true,
// если среди людей есть хотя бы один совершеннолетний.

function hasAdult(arr) {
    return arr.some((item) => item.age >= 18);
}

console.log(
    hasAdult([
        { name: 'Alex', age: 15 },
        { name: 'John', age: 17 },
    ])
); // false

console.log(
    hasAdult([
        { name: 'Alex', age: 15 },
        { name: 'Kate', age: 18 },
    ])
); // true

// Задача:
// Напиши функцию getPersonByName(arr, name),
// которая возвращает объект человека по имени.
//
// Если человека нет — вернуть undefined.

function getPersonByName(arr, name) {
    return arr.find((item) => item.name === name);
}

console.log(
    getPersonByName(
        [
            { name: 'Alex', age: 20 },
            { name: 'John', age: 30 },
            { name: 'John', age: 30 },
        ],
        'John'
    )
);

// { name: "John", age: 30 }

// Задача:
// Напиши функцию getNamesUpperCase(arr),
// которая возвращает массив имен в верхнем регистре.

function getNamesUpperCase(arr) {
    return arr.map((item) => item.name.toUpperCase());
}

console.log(
    getNamesUpperCase([
        { name: 'Alex', age: 20 },
        { name: 'John', age: 30 },
        { name: 'Kate', age: 25 },
    ])
);

// ["ALEX", "JOHN", "KATE"]

// Задача:
// Напиши функцию getAdultsNames(arr),
// которая возвращает массив имен
// только совершеннолетних людей в верхнем регистре.

function getAdultsNames(arr) {
    return arr
        .filter((item) => item.age >= 18)
        .map((item) => item.name.toUpperCase());
}

console.log(
    getAdultsNames([
        { name: 'Alex', age: 25 },
        { name: 'John', age: 15 },
        { name: 'Kate', age: 18 },
    ])
);

// ["ALEX", "KATE"]

// Задача:
// Напиши функцию getAverageAdultAge(arr),
// которая возвращает средний возраст
// только совершеннолетних людей.
//
// Гарантируется, что совершеннолетние есть.

function getAverageAdultAge(arr) {
    const adult = arr.filter((i) => i.age >= 18);
    return adult.reduce((acc, i) => (acc += i.age), 0) / adult.length;
}

console.log(
    getAverageAdultAge([
        { name: 'Alex', age: 25 },
        { name: 'John', age: 15 },
        { name: 'Kate', age: 35 },
    ])
);

// 30

// Задача:
// Напиши функцию getYoungestPerson(arr),
// которая возвращает объект самого молодого человека.

function getYoungestPerson(arr) {
    return arr.reduce((acc, item) => (acc.age < item.age ? acc : item));
}

console.log(
    getYoungestPerson([
        { name: 'Alex', age: 20 },
        { name: 'John', age: 30 },
        { name: 'Kate', age: 18 },
    ])
);

// { name: "Kate", age: 18 }

// Задача:
// Напиши функцию groupByAge(arr).
//
// Она должна вернуть объект,
// где ключ — возраст,
// а значение — массив людей этого возраста.

function groupByAge(arr) {
    return arr.reduce((acc, item) => {
        const age = item.age;

        if (!acc[age]) {
            acc[age] = [];
        }

        acc[age].push(item);

        return acc;
    }, {});
}

console.log(
    groupByAge([
        { name: 'Alex', age: 20 },
        { name: 'John', age: 30 },
        { name: 'Kate', age: 20 },
    ])
);

/*
{
  20: [
    { name: "Alex", age: 20 },
    { name: "Kate", age: 20 }
  ],
  30: [
    { name: "John", age: 30 }
  ]
}
*/

// Задача:
// Напиши функцию countByAge(arr).
//
// Она должна вернуть объект,
// где ключ — возраст,
// а значение — количество людей этого возраста.

function countByAge(arr) {
    return arr.reduce((acc, item) => {
        const age = item.age;

        if (acc[age]) {
            acc[age]++;
        } else {
            acc[age] = 1;
        }

        return acc;
    }, {});
}

console.log(
    countByAge([
        { name: 'Alex', age: 20 },
        { name: 'John', age: 30 },
        { name: 'Kate', age: 20 },
        { name: 'Mike', age: 30 },
        { name: 'Bob', age: 30 },
    ])
);

/*
{
  20: 2,
  30: 3
}
*/

//! ЗАДАЧА: Отчёт по товарам
/*
Напиши функцию getInventoryReport(products), которая возвращает:

{
  totalQuantity: 10,
  totalValue: 4600,
  outOfStock: ['Мышь', 'Кабель'],
  mostExpensive: 'Ноутбук'
}

Исходный массив изменять нельзя.
*/
const products = [
    { name: 'Ноутбук', price: 1200, quantity: 3 },
    { name: 'Мышь', price: 25, quantity: 0 },
    { name: 'Клавиатура', price: 80, quantity: 5 },
    { name: 'Монитор', price: 300, quantity: 2 },
    { name: 'Кабель', price: 10, quantity: 0 },
];

function getInventoryReport(products) {
    const totalQuantity = products.reduce((acc, obj) => acc + obj.quantity, 0);
    const totalValue = products.reduce(
        (acc, obj) => acc + obj.price * obj.quantity,
        0
    );
    const outOfStock = products
        .filter((obj) => obj.quantity === 0)
        .map((obj) => obj.name);
    const mostExpensive = products.reduce((acc, obj) => {
        if (acc.price > obj.price) {
            return acc;
        }
        return obj;
    });
    return {
        totalQuantity,
        totalValue,
        outOfStock,
        mostExpensive: mostExpensive.name,
    };
}

console.log(getInventoryReport(products));

//! ЗАДАЧА: Отчёт по заказам
/*
Напиши функцию getOrdersReport(orders), которая возвращает:

{
  completedRevenue: 620,
  pendingOrders: [2],
  largestOrder: 5,
  ordersByStatus: {
    completed: 3,
    pending: 1,
    cancelled: 1
  }
}

Исходный массив изменять нельзя.
*/

const orders = [
    { id: 1, customer: 'Анна', total: 120, status: 'completed' },
    { id: 2, customer: 'Олег', total: 80, status: 'pending' },
    { id: 3, customer: 'Анна', total: 200, status: 'completed' },
    { id: 4, customer: 'Мария', total: 150, status: 'cancelled' },
    { id: 5, customer: 'Олег', total: 300, status: 'completed' },
];

function getOrdersReport(orders) {
    const completedRevenue = orders
        .filter((obj) => obj.status === 'completed')
        .reduce((acc, obj) => acc + obj.total, 0);

    const pendingOrders = orders
        .filter((obj) => obj.status === 'pending')
        .map((obj) => obj.id);

    const largestOrder = orders.reduce((acc, obj) => {
        return acc.total > obj.total ? acc : obj;
    });

    const ordersByStatus = orders.reduce((acc, obj) => {
        const status = obj.status;
        if (!acc[status]) {
            acc[status] = 0;
        }
        acc[status]++;
        return acc;
    }, {});

    return {
        completedRevenue,
        pendingOrders,
        largestOrder: largestOrder.id,
        ordersByStatus,
    };
}

console.log(getOrdersReport(orders));

//! ЗАДАЧА: Отчёт по сотрудникам
/*
Напиши функцию getEmployeesReport(employees), которая возвращает:

{
  activeEmployees: ['Анна', 'Олег', 'Иван', 'Катя'],
  totalSalary: 10200,
  highestPaid: 'Иван',
  employeesByDepartment: {
    Frontend: 2,
    Backend: 2,
    Design: 1
  }
}
Исходный массив изменять нельзя.
*/
const employees = [
    { name: 'Анна', department: 'Frontend', salary: 1800, active: true },
    { name: 'Олег', department: 'Backend', salary: 2200, active: true },
    { name: 'Мария', department: 'Frontend', salary: 2000, active: false },
    { name: 'Иван', department: 'Backend', salary: 2500, active: true },
    { name: 'Катя', department: 'Design', salary: 1700, active: true },
];

function getEmployeesReport(employees) {
    const activeEmployees = employees
        .filter((obj) => obj.active)
        .map((obj) => obj.name);

    const totalSalary = employees.reduce((acc, obj) => acc + obj.salary, 0);

    const highestPaid = employees.reduce((acc, obj) =>
        acc.salary > obj.salary ? acc : obj
    );

    const employeesByDepartment = employees.reduce((acc, obj) => {
        const department = obj.department;
        if (!acc[department]) {
            acc[department] = 0;
        }
        acc[department]++;
        return acc;
    }, {});

    return {
        activeEmployees,
        totalSalary,
        highestPaid: highestPaid.name,
        employeesByDepartment,
    };
}

console.log(getEmployeesReport(employees));

//! ЗАДАНИЕ
//
// Верни массив имён только активных
// совершеннолетних пользователей.
//
// Ожидаемый результат:
// ['Анна', 'Мария']

const users = [
    { name: 'Анна', age: 25, active: true },
    { name: 'Игорь', age: 16, active: true },
    { name: 'Олег', age: 32, active: false },
    { name: 'Мария', age: 19, active: true },
];

function getActiveAdults(users) {
    return users
        .filter((obj) => obj.active && obj.age >= 18)
        .map((obj) => obj.name);
}

console.log(getActiveAdults(users));

//! ЗАДАНИЕ
//
// Верни общую стоимость всех товаров:
// price * quantity
//
// Ожидаемый результат: 4300

const products = [
    { name: 'Телефон', price: 1000, quantity: 2 },
    { name: 'Наушники', price: 300, quantity: 1 },
    { name: 'Ноутбук', price: 2000, quantity: 1 },
];

function getTotalPrice(products) {
    //   return products.map(obj => obj.price * obj.quantity).reduce((acc,item) => acc + item, 0);
    return products.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

console.log(getTotalPrice(products));

//! ЗАДАНИЕ
//
// Верни объект самого дорогого товара.
// Если массив пустой — верни null.

const products = [
    { name: 'Телефон', price: 1000 },
    { name: 'Наушники', price: 300 },
    { name: 'Ноутбук', price: 2000 },
];

function getMostExpensive(products) {
    if (products.length === 0) {
        return null;
    }
    return products.reduce((acc, obj) => {
        if (acc.price > obj.price) {
            return acc;
        } else {
            return obj;
        }
    });
}

console.log(getMostExpensive(products));
// { name: 'Ноутбук', price: 2000 }

console.log(getMostExpensive([]));
// null

//! ЗАДАНИЕ
//
// Верни объект с количеством пользователей
// в каждом городе.
//
// Ожидаемый результат:
// {
//   Одесса: 3,
//   Киев: 1,
//   Львов: 1
// }

const users = [
    { name: 'Анна', city: 'Одесса' },
    { name: 'Игорь', city: 'Киев' },
    { name: 'Мария', city: 'Одесса' },
    { name: 'Олег', city: 'Львов' },
    { name: 'Вика', city: 'Одесса' },
];

function countByCity(users) {
    return users.reduce((acc, obj) => {
        const city = obj.city;
        if (!acc[city]) {
            acc[city] = 0;
        }
        acc[city]++;
        return acc;
    }, {});
}

console.log(countByCity(users));

//! ЗАДАЧА 1 ИЗ 5
//
// Верни новый массив оплаченных заказов.
//
// Для каждого заказа оставь только:
// - id;
// - total — общую стоимость всех его товаров.
//
// Результат отсортируй по total от большего к меньшему.
// Исходный массив изменять нельзя.
//
// Ожидаемый результат:
//
// [
//   { id: 3, total: 2400 },
//   { id: 1, total: 1300 }
// ]

const orders = [
    {
        id: 1,
        status: 'paid',
        items: [
            { name: 'Телефон', price: 1000, quantity: 1 },
            { name: 'Наушники', price: 300, quantity: 1 },
        ],
    },
    {
        id: 2,
        status: 'pending',
        items: [{ name: 'Ноутбук', price: 2000, quantity: 1 }],
    },
    {
        id: 3,
        status: 'paid',
        items: [
            { name: 'Клавиатура', price: 800, quantity: 2 },
            { name: 'Мышь', price: 400, quantity: 2 },
        ],
    },
];

function getPaidOrders(orders) {
    return orders
        .filter((obj) => obj.status === 'paid')
        .map((obj) => {
            const id = obj.id;
            const total = obj.items.reduce(
                (acc, obj) => acc + obj.price * obj.quantity,
                0
            );
            return { id, total };
        })
        .toSorted((a, b) => b.total - a.total);
}

console.log(getPaidOrders(orders));

//! НОВОЕ ЗАДАНИЕ: обработка заказа
//
// Верни новый массив товаров с уменьшенным stock.
//
// Правила:
//
// 1. Исходный массив и объекты изменять нельзя.
// 2. Для товаров из заказа уменьши stock на quantity.
// 3. Товары, которых нет в заказе, оставь без изменений.
// 4. Если хотя бы одного товара из заказа не существует либо его недостаточно — функция должна вернуть null вместо массива. Никакие товары при этом не списываются.

const products = [
    { id: 1, name: 'Телефон', stock: 5 },
    { id: 2, name: 'Наушники', stock: 2 },
    { id: 3, name: 'Ноутбук', stock: 10 },
];

const order = [
    { productId: 1, quantity: 2 },
    { productId: 2, quantity: 1 },
];

function processOrder(products, order) {
    const allInStock = order.every(item => {
        return products.find(obj => obj.id === item.productId && obj.stock >= item.quantity);
    });

    if (!allInStock) {
        return null;
    }

    return products.map(obj => {
        const orderItem = order.find(item => obj.id === item.productId);

        if (!orderItem) {
            return obj;
        }

        return {
            ...obj,
            stock: obj.stock - orderItem.quantity,
        };
    });
}

console.log(processOrder(products, order));
// [
//   { id: 1, name: 'Телефон', stock: 3 },
//   { id: 2, name: 'Наушники', stock: 1 },
//   { id: 3, name: 'Ноутбук', stock: 10 }
// ]

console.log(products);
// исходный массив не изменился

console.log(processOrder(products, [{ productId: 2, quantity: 3 }]));
// null
