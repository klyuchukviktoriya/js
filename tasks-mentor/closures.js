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

//! ЗАДАЧА: Банковский счёт

/*
Напиши функцию createBankAccount(initialBalance).

Она возвращает объект с методами:

deposit(amount) — пополняет счёт.
withdraw(amount) — снимает деньги, если их достаточно.
getBalance() — возвращает текущий баланс.

Переменная balance должна быть недоступна снаружи.
*/

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {

        deposit(amount) {
            return balance += amount;
        },

        withdraw(amount) {
            if (balance >= amount) {
                balance -= amount;
                return true;
            }
            return false;
        },

        getBalance() {
            return balance;
        }
    }
}

const account = createBankAccount(1000);

console.log(account.getBalance());
// 1000

account.deposit(500);

console.log(account.getBalance());
// 1500

console.log(account.withdraw(700));
// true

console.log(account.getBalance());
// 800

console.log(account.withdraw(1000));
// false

console.log(account.getBalance());
// 800

//! ЗАДАНИЕ
//
// Создай счётчик с замыканием.
// Каждый вызов функции должен увеличивать число на 1.

function createCounter() {
    let counter = 0;
    return function add() {
        counter++;
        return counter;
    }
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

//! ЗАДАЧА 3 ИЗ 5
//
// Создай функцию createHistory(initialValue).
//
// Она должна вернуть объект с методами:
//
// set(value)
// - сохраняет текущее значение в историю;
// - устанавливает новое значение.
//
// undo()
// - возвращает предыдущее значение;
// - если истории нет, значение не меняется.
//
// getValue()
// - возвращает текущее значение.
//
// Внутренние данные должны быть недоступны снаружи.

function createHistory(initialValue) {
    let current = initialValue;

    let prev = [];

    return {
        set(value) {
            prev.push(current);
            current = value;
        },
        undo() {
            if (prev.length >= 1) {
                current = prev[prev.length - 1];
                prev.pop();
                return current;
            } else {
                return current;
            }
        },
        getValue() {
            return current;
        }
    }
}

const history = createHistory('HTML');

console.log(history.getValue()); // HTML

history.set('CSS');
history.set('JavaScript');

console.log(history.getValue()); // JavaScript

history.undo();
console.log(history.getValue()); // CSS

history.undo();
console.log(history.getValue()); // HTML

history.undo();
console.log(history.getValue()); // HTML