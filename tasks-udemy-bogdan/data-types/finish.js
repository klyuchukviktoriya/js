/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const str = 'Vika';
const num = 23;
const bool = true;
const brain = null;
const something = undefined;
const user = {
    name: 'Vika',
    age: 37,
    city: 'Odesa',
};
const arr = [1, 'Vika', 3, true];

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof brain);
console.log(typeof something);
console.log(typeof user);
console.log(typeof arr);
