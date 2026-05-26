'use strict';
// ! false
// Boolean("");
// Boolean(null);
// Boolean(undefined);
// Boolean(false);
// Boolean(0);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 10 === 'number');

console.log(0 && 1); // 0
console.log(1 && 2); // 2

console.log(0 || 1); // 1
console.log(1 || 2); // 1

const hello = 'Hello';
const world = 'world!';
console.log(hello + ' ' + world);

console.log(`${hello} beautiful ${world}`);

const myName = 'Vika';
const myCity = 'Odessa';

console.log(`My name's ${myName} and I'm from ${myCity}`);

console.log(10 + 'abc'); // 10abc
console.log(undefined + 'abc'); // undefinedabc

console.log(undefined + 1); // NaN
console.log('string' + 1); // string1

console.log(false + 1); // 1
// ! function declaration
function declaration() {} // имеет имя, может быть вызвана до объявления, поднимается (hoisting)
// ! function expression
// function () { };
const expression = function () {}; // по сути анонимная, просто присвоенная переменной, либо передается как аргумент, не поднимается
// !Стрелочные функции (=>)
// (a, b) => {}
const multiply = (a, b) => a * b;
// Краткий синтаксис, не имеют собственного this, arguments, super.
console.log(multiply(2, 5)); // 10
// Удобны для коллбеков и коротких выражений.

setTimeout(function () {
    console.log('hi');
}, 4000);

setTimeout(() => console.log('hi'), 2000); // неявно возвращает значение

function mltp(a, b = 2) {
    return a * b;
}
console.log(mltp(4, 4)); // 16
console.log(mltp(4)); // 8

// const objWithDate = (post, createdAt = Date()) => ({
//     ...post,
//     createdAt,
// });
const objWithDate = (post, createdAt = Date()) => {
    return {
        ...post,
        createdAt,
    };
};
const newPost = {
    title: 'Post',
    autor: 'Vasya',
};

console.table(objWithDate(newPost));
// ! ловлю ошибку
// const error = () => {
//     throw new Error('Some error');
// };

// error();

// console.log('Continue'); // сюда не дойдет, потому что выше uncaught error (непойманная ошибка)
const errorFn = () => {
    throw new Error('Some fucking error');
};

try {
    errorFn();
} catch (error) {
    // console.error(error);
    console.log(error.message);
}

console.log('I did it');

// !
