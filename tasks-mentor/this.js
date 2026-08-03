// const user = {
//     name: 'Alex',

//     sayName() {
//         console.log(this.name);
//     },
// };

// setTimeout(() => user.sayName(), 1000);



//! =========================================

// =========================================
// THIS — GITHUB PRACTICE
// =========================================

// Создай функцию:

// createUser(name)

// Она должна возвращать объект:

// {
//   name,
//   showName() {
//     console.log(this.name);
//   }
// }

// =========================================
// После этого:
// =========================================

// 1. Создай пользователя:

// const user1 = createUser('Vika');

// 2. Создай второго пользователя:

// const user2 = createUser('Igor');

// 3. Вызови:

// user1.showName();
// user2.showName();

// Должно вывести:

// Vika
// Igor

// =========================================
// Теперь потеряй контекст
// =========================================

// Создай переменную:

// const show = user1.showName;

// Попробуй вызвать:

// show();

// Посмотри, что произошло.

// =========================================
// Исправь это
// =========================================

// Используя bind(), сделай так, чтобы:

// show();

// снова выводил:

// Vika

// =========================================
// Запрещено
// =========================================

// Не менять функцию showName().
// Использовать только bind().



function createUser(name) {
    return {
        name,
        showName() {
            console.log(this.name);
        }
    }
}

const user1 = createUser('Vika');
const user2 = createUser('Igor');

user1.showName();
user2.showName();

let show = user1.showName;
show();

show = show.bind(user1);
show();

//! ЗАДАЧА: Таймер пользователя
/*
Создай функцию runTimer(callback, times).

Она должна вызвать callback указанное количество раз.

Передай в неё метод increaseSeconds так,
чтобы он не потерял контекст user.
*/

const user = {
    name: 'Анна',
    seconds: 0,

    increaseSeconds() {
        this.seconds++;
    },

    getInfo() {
        return `${this.name}: ${this.seconds} сек.`;
    },
};

function runTimer(callback, times) {
    for (let i = 0; i < times; i++) {
        callback();
    };
}

runTimer(user.increaseSeconds.bind(user), 5);

console.log(user.getInfo());
// Анна: 5 сек.

//! ЗАДАНИЕ
//
// Исправь только строку с setTimeout,
// чтобы через секунду вывелось:
// Привет, Вика

const user = {
    name: 'Вика',

    sayHello() {
        console.log(`Привет, ${this.name}`);
    },
};

// setTimeout(user.sayHello, 1000);

setTimeout(user.sayHello.bind(user), 1000);

//! ЗАДАЧА 5 ИЗ 5
//
// Не изменяй объекты и не копируй метод.
//
// 1. Вызови метод getPrice объекта shop
//    в контексте vipShop через call().
//
// 2. Создай функцию vipGetPrice через bind(),
//    навсегда привязав к ней vipShop.
//
// Оба результата должны быть 750.

const shop = {
    discount: 10,

    getPrice(price) {
        return price - (price * this.discount) / 100;
    },
};

const vipShop = {
    discount: 25,
};

// вызов через call()
const totalPrice = shop.getPrice.call(vipShop, 1000);

// создание vipGetPrice через bind()
const vipGetPrice = shop.getPrice.bind(vipShop);

console.log(totalPrice); // 750
console.log(vipGetPrice(1000)); // 750