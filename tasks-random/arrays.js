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
    const sum = arr.reduce((number, acc) => (acc += number), 0);
    console.log(sum);
}

sumNumbers(numbers);
