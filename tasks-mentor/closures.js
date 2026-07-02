// Задача:
// Напиши функцию createCounter.
//
// Она должна возвращать функцию,
// которая при каждом вызове увеличивает счетчик на 1.

function createCounter() {
    let count = 0;
    return function counterFn() {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Задача:
// Напиши функцию createMultiplier.
//
// Она принимает число n
// и возвращает функцию,
// которая умножает аргумент на n.

function createMultiplier(n) {
    return function multiply(a) {
        return n * a;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(double(10)); // 20

console.log(triple(5)); // 15
console.log(triple(10)); // 30

// Задача:
// Напиши функцию createAdder.
//
// Она принимает число n
// и возвращает функцию,
// которая прибавляет n к аргументу.

function createAdder(n) {
    return function add(a) {
        return a + n;
    };
}

const add5 = createAdder(5);

console.log(add5(10)); // 15
console.log(add5(20)); // 25

const add100 = createAdder(100);

console.log(add100(1)); // 101

// Задача:
// Напиши функцию createGreeting.
//
// Она принимает приветствие,
// а возвращает функцию,
// которая принимает имя
// и возвращает строку.
//
// Пример:
function createGreeting(greeting) {
    return function returnString(name) {
        return `${greeting}, ${name}`;
    };
}
const sayHi = createGreeting('Hi');
const sayHello = createGreeting('Hello');

console.log(sayHi('Alex')); // "Hi, Alex"
console.log(sayHello('John')); // "Hello, John"

// Задача:
// Напиши функцию createCounter.
//
// Она должна возвращать объект с двумя методами:
//
// increment() — увеличивает счетчик на 1
// getValue() — возвращает текущее значение

function createCounter() {
    let counter = 0;
    return {
        increment() {
            counter++;
        },
        getValue() {
            return counter;
        },
    };
}
const counter = createCounter();

console.log(counter.getValue()); // 0

counter.increment();
counter.increment();

console.log(counter.getValue()); // 2

// Напиши функцию once.
//
// Она принимает функцию fn
// и возвращает новую функцию.
//
// Новая функция может вызвать fn
// только один раз.
//
// Все последующие вызовы ничего не делают.

function once(fn) {
    let called = false;
    return function callfn(a) {
        if (!called) {
            called = true;
            return fn(a);
        }
    };
}

function greet(name) {
    console.log(`Hello, ${name}`);
}

const greetOnce = once(greet);

greetOnce('Alex'); // Hello, Alex
greetOnce('John'); // ничего
greetOnce('Kate'); // ничего

// Задача:
//
// Напиши функцию createSecret.
//
// Она принимает секретную строку
// и возвращает объект с двумя методами:
//
// getSecret() — возвращает секрет
// setSecret(newSecret) — меняет секрет

function createSecret(str) {
    return {
        getSecret() {
            return str;
        },
        setSecret(newSecret) {
            str = newSecret;
        },
    };
}

const secret = createSecret('12345');

console.log(secret.getSecret()); // "12345"

secret.setSecret('qwerty');

console.log(secret.getSecret()); // "qwerty"
