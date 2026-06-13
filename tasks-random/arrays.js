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
