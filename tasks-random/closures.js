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
