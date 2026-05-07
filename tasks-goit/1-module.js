// ! 1
// // Використовуючи два console.log() напиши код, який виведе в консоль інструментів розробника два значення: рядок "Jacob Mercer" та число 26.

// console.log('Jacob Mercer');
// console.log('26');

// ! 2
// // За допомогою ключового слова const оголоси дві змінні: productName - для зберігання назви товару, pricePerItem - для зберігання ціни за одиницю товару.
// // При оголошенні змінних надай їм наступні значення:
// // назва товару - рядок "Droid";
// // ціна за одиницю товару - число 2000.

// const productName = 'Droid';
// const pricePerItem = 2000;

// ! 3
// // Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів. Перевизнач значення змінних pricePerItem і productName після їх оголошення.

// let productName = 'Droid';
// let pricePerItem = 2000;

// productName = 'Repair droid';
// pricePerItem = 3500;

// ! 4
// // Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.
// // topSpeed - число 160
// // distance - число 617.54
// // login - рядок "mango935"
// // isOnline - буль true
// // isAdmin - буль false

// const topSpeed = 160;
// const distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;

// ! 5
// // Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення. Змінна pricePerItem зберігає ціну за одиницю товару, а orderedQuantity - кількість одиниць товару в замовленні.

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;

// ! 6
// // Заміни у виразах стандартні математичні оператори на комбіновані оператори присвоєння з додаванням, відніманням, множенням і діленням відповідно.
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// // a = a + 2;
// // b = b - 4;
// // c = c * 3;
// // d = d / 10;
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// ! 7
// // Оголоси змінну message. Використовуючи конкатенацію рядків, задай їй наступне значення — рядок привітання користувача зі зверненням по імені. Ім'я зберігається в змінній username.

// // Повідомлення привітання має виглядати так: "Welcome Poly!", де Poly — це значення змінної username. Зверни увагу, що пробіл має відноситися до рядка "Welcome "

// const username = "Poly";
// const message = 'Welcome ' + username + '!';

// ! 8
// // Оголоси змінну message і запиши в неї повідомлення про покупку.

// // Це буде рядок у форматі: "You picked <назва товару>, price per item is <ціна товару> credits", де

// // <назва товару> — це значення змінної productName
// // <ціна товару> — це значення змінної pricePerItem
// // Використовуй синтаксис шаблонних рядків. Уникай зайвих символів (пробілів, коми або крапки, що не передбачені вмістом рядка).

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// ! 9
// // Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:

// // pricePerDroid - ціна одного дроїда, значення 800
// // orderedQuantity - кількість дроїдів у замовленні, значення 6
// // deliveryFee - вартість доставки, значення 50
// // totalPrice - загальна сума замовлення до сплати (ціна одного дроїда помножена на кількість дроїдів у замовленні, плюс вартість доставки)
// // message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits"

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits`;
