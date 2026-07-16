// ! 1
// // Оголоси змінну apartment і задай ій об'єкт, який описує квартиру з наступними характеристиками:

// // imgUrl - рядок, що містить шлях до зображення, значення "https://via.placeholder.com/640x480";
// // descr - рядок, що містить опис, значення "Spacious apartment in the city center";
// // rating - число, що містить рейтинг, значення 4;
// // price - число, що містить ціну, значення 2153;
// // tags - масив рядків, що містить метаінформацію, значення ["premium", "promoted", "top"].

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };

// ! 2
// Об'єкт apartment описує квартиру з наступними характеристиками

// imgUrl - шлях до зображення
// descr - опис
// rating - рейтинг
// price - ціна
// tags - метаінформація
// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника.
// Додай об'єкту owner наступні властивості:
// name - рядок, що містить ім'я власника, значення "Henry";
// phone - рядок, що містить номер телефону, значення "982-126-1588";
// email - рядок, що містить пошту, значення "henry.carter@aptmail.com"
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Henry',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     },
// };

// ! 3
// // Об'єкт apartment описує квартиру і має 5 властивостей: шлях до зображення, опис, рейтинг, ціна, теги. Оголошені 4 змінні, значенням яких є значення властивостей об'єкту apartment.
// // Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
// // aptRating - рейтинг;
// // aptDescr - опис;
// // aptPrice - ціна;
// // aptTags - теги.
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// ! 4
// // Об'єкт apartment описує квартиру 6 властивостями: шлях до зображення, опис, рейтинг, ціна, теги і власник. Властивість owner (власник) також є об'єктом. Оголошено шість змінніх, значення яких це значення відповідних властивостей об'єкту apartment.
// // Доповни код, задавши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
// // ownerName - ім'я власника;
// // ownerPhone - телефон власника;
// // ownerEmail - пошта власника;
// // numberOfTags - кількість елементів масиву у властивості tags;
// // firstTag - перший елемент масиву у властивості tags;
// // lastTag - останній елемент масиву у властивості tags.

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Henry',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// ! 5
// // Об'єкт apartment описує квартиру з 5 властивостями: шлях до зображення, опис, рейтинг, ціна, теги. Оголошені 4 змінні, значення яких це значення відповідних властивостей об'єкту apartment.

// // Доповни код, задавши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис квадратних дужок.

// // aptRating - рейтинг;
// // aptDescr - опис;
// // aptPrice - ціна;
// // aptTags - теги.

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// ! 6
// // Доповни код, оновивши значення властивостей об'єкта apartment:
// // ціну у властивості price на 5000;
// // рейтинг квартири у властивості rating на 4.7;
// // ім'я власника у вкладеній властивості name на "Henry Sibola";
// // масив тегів у властивості tags, додавши в кінець рядок "trusted".

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Henry',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// ! 7
// // Додай об'єкту apartment кілька нових властивостей:
// // area - площа в квадратних метрах, число 60;
// // rooms - кількість кімнат, число 3;
// // location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// // country - країна, рядок "Jamaica";
// // city - місто, рядок "Kingston".
// // Зверніть увагу: якщо ви спробуєте додати властивості country і city до ще не створеної властивості location, ви отримаєте помилку. Спочатку ініціалізуйте location як порожній об'єкт, а потім додавайте до нього властивості.

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4.7,
//     price: 5000,
//     tags: ['premium', 'promoted', 'top', 'trusted'],
//     owner: {
//         name: 'Henry Sibola',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: 'Jamaica',
//     city: 'Kingston',
// };

// ! 8
// // Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price, image і tags зі значеннями зі змінних з аналогічними іменами. Обов'язково використовуй синтаксис коротких властивостей.

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };

// ! 9
// // Використовуючи синтаксис обчислювальних властивостей, доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості: email і password, ключі яких зберігаються у змінних emailInputName і passwordInputName.

// // Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", а значенням властивості password - рядок "jqueryismyjam".

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//     [emailInputName]: 'henry.carter@aptmail.com',
//     [passwordInputName]: 'jqueryismyjam',
// };

// ! 10
// // Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const item in apartment) {
//   keys.push(item);
// }

// for (const item in apartment) {
//   values.push(apartment[item]);
// }

// ! 11
// // Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// const apartment = {
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (item of keys) {
//     values.push(apartment[item]);
// }

// ! 12
// // Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in на метод Object.keys() для отримання масиву властивостей. Функція має повернути кількість властивостей в об'єкті object.
// // function countProps(object) {
// //     let propCount = 0;

// //     for (const key in object) {
// //         if (object.hasOwnProperty(key)) {
// //             propCount += 1;
// //         }
// //     }

// //     return propCount;
// // }

// function countProps(object) {
//     let propCount = 0;

//     propCount = Object.keys(object).length;

//     return propCount;
// }

//! 13
// // Запиши у змінну keys масив ключів властивостей об'єкта apartment, а у змінну values - масив їх значень. Використовуй методи Object.keys() і Object.values().

// const apartment = {
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// ! 14
// // Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.
// // Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.
// // Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
// // Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
// // Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
// // Поверни totalSalary як результат

// function countTotalSalary(salaries) {
//     let totalSalary = 0;

//     for (item of Object.values(salaries)) {
//         totalSalary += item;
//     }
//     return totalSalary;
// }

// ! 15
// // Масив colors містить колекцію кольорів. Кожен колір представлений об'єктом і має властивості hex і rgb з відповідними для цього формату і кольору значеннями.

// // Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (item of colors) {
//     hexColors.push(item.hex);
// }

// for (item of colors) {
//     rgbColors.push(item.rgb);
// }

// ! 16
// // Функція getProductPrice(productName) приймає один параметр productName - назва продукту. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// // Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// function getProductPrice(productName) {
//     const products = [
//         { name: 'Radar', price: 1300, quantity: 4 },
//         { name: 'Scanner', price: 2700, quantity: 3 },
//         { name: 'Droid', price: 400, quantity: 7 },
//         { name: 'Grip', price: 1200, quantity: 9 },
//     ];
//     for (const item of products) {
//         if (item.name === productName) {
//             return item.price;
//         }
//     }
//     return null;
// }

// ! 17
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

function getAllPropValues(propName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];

  const values = [];

  for (item of products) {
    if (item.hasOwnProperty(propName)) {
      values.push(item[propName]);
    }
  }
  return values;
}

// ! 18
// Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.

// function calculateTotalPrice(productName) {
//     const products = [
//         { name: 'Radar', price: 1300, quantity: 4 },
//         { name: 'Scanner', price: 2700, quantity: 3 },
//         { name: 'Droid', price: 400, quantity: 7 },
//         { name: 'Grip', price: 1200, quantity: 9 },
//     ];

//     for (item of products) {
//         if (item.name === productName) {
//             return item.price * item.quantity;
//         }
//     }
//     return `Product ${productName} not found!`;
// }

// ! 20
// // До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю. Програма має додавати, видаляти, шукати та оновлювати зілля.

// // Оголоси об'єкт atTheOldToad з наступними властивостями:

// // potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
// // getPotions() — метод, який повертає рядок "List of all available potions"
// // addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", де potionName — це значення параметра potionName

// const atTheOldToad = {
//     potions: [],
//     getPotions() {
//         return 'List of all available potions';
//     },
//     addPotion(potionName) {
//         return `Adding ${potionName}`;
//     },
// };

// ! 21
// // Об'єкт atTheOldToad має наступні властивості:

// // potions — масив рядків, з назвами зілль
// // getPotions() — метод, який повертає рядок "List of all available potions"
// // Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions

// const atTheOldToad = {
//     potions: ['Speed potion', 'Stone skin'],
//     getPotions() {
//         return this.potions;
//     },
// };

// ! 22
// // Об'єкт atTheOldToad має наступні властивості:

// // potions — масив рядків, з назвами зілль
// // getPotions() — метод, який повертає значення властивості potions
// // addPotion() — метод, який приймає параметр рядок з назвою зілля potionName
// // Зміни код методу addPotion(potionName) так, щоб він додавав зілля potionName в кінець масиву у властивості potions.

// const atTheOldToad = {
//     potions: ['Speed potion', 'Stone skin'],
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(potionName) {
//         return this.potions.push(potionName);
//     },
// };

// ! 23
// // Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною. Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.

// // Об'єкт atTheOldToad має наступні властивості:

// // potions — масив рядків, з назвами зілль
// // getPotions() — метод, який повертає значення властивості potions
// // addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в кінець масиву у властивості potions.
// // Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.

// const atTheOldToad = {
//     potions: [
//         { name: 'Speed potion', price: 460 },
//         { name: 'Stone skin', price: 520 },
//     ],
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         this.potions.push(newPotion);
//     },
//     getTotalPrice() {
//         let total = 0;
//         for (item of this.potions) {
//             total += item.price;
//         }
//         return total;
//     },
// };

// ! 24
// // Об'єкт atTheOldToad має наступні властивості:
// // potions — масив об'єктів зілль
// // getPotions() — метод, який повертає значення властивості potions
// // updatePotionName() — метод, який приймає два параметра рядків oldName і newName
// // Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//     potions: [
//         { name: 'Speed potion', price: 460 },
//         { name: 'Stone skin', price: 520 },
//     ],
//     getPotions() {
//         return this.potions;
//     },
//     updatePotionName(oldName, newName) {
//         for (const item of this.potions) {
//             if (item.name === oldName) {
//                 item.name = newName;
//             }
//         }
//     },
// };

// ! 25
// // Використовуючи синтаксис залишкових параметрів, доповни код функції add() так, щоб вона приймала будь-яку кількість аргументів у параметр args і повертала їхню суму.

// function add (...args) {
//   return args.reduce((acc, el ) => acc += el, 0);
// }

// ! 26
// // Функція addOverNum() приймає довільну кількість аргументів чисел.
// // Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, які більші за задане число. Це число завжди буде передано першим аргументом.
// // Для вирішення цього завдання тобі потрібно зробити наступне:
// // Перший параметр value повинен представляти задане число, а решта аргументів повинні бути зібрані за допомогою синтаксису (...args)
// // Усередині функції ініціалізуй змінну для зберігання загальної суми
// // Потім пройдись по кожному аргументу за допомогою циклу
// // Перевір, чи кожен аргумент більший за вказане число, і якщо так, додай його до загальної суми
// // На завершення поверни загальну суму

// function addOverNum(value, ...args) {
//     let total = 0;
//     for (const el of args) {
//         if (el > value) {
//             total += el;
//         }
//     }
//     return total;
// }

// ! 27
// // Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.

// // Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:

// // Властивість best має містити найбільше число з масиву scores
// // Властивість worst має містити найменше число з масиву scores.
// // Використовуй оператор (...spread) і методи Math.max() і Math.min().

// function getExtremeScores(scores) {
//     return {
//         best: Math.max(...scores),
//         worst: Math.min(...scores),
//     };
// }

// ! 28
// // У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп. Використовуючи розпилення, доповни код таким чином, щоб:

// // У змінній allScores зберігався масив всіх результатів від першої до третьої групи включно.
// // У змінній bestScore був найвищий загальний бал.
// // У змінній worstScore був найнижчий загальний бал.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//     ...firstGroupScores,
//     ...secondGroupScores,
//     ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// ! 29
// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings. Під час створення тесту, усі або частину налаштувань можна перевизначити, користувацькі налаштування зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і поверх них застосувати перевизначені користувацькі налаштування. Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {
  ...defaultSettings, ...overrideSettings
};
