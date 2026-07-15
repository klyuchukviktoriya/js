// //! Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.
// // const pizzaPalace = {
// //   pizzas: ["Supercheese", "Smoked", "Four meats"],
// //   checkPizza(pizzaName) {
// //     return pizzas.includes(pizzaName);
// //   },
// //   order(pizzaName) {
// //     const isPizzaAvailable = checkPizza(pizzaName);

// //     if (!isPizzaAvailable) {
// //       return `Sorry, there is no pizza named «${pizzaName}»`;
// //     }

// //     return `Order accepted, preparing «${pizzaName}» pizza`;
// //   },
// // };

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],

//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },

//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));

// //! Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // const child = {};
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// //! Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.
// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };

// // const parent = {};
// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// // const child = {};
// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(child);
// console.log(parent);
// console.log(ancestor);

// // Додай класу Car метод constructor, який приймає три параметри:
// // brand - марка автомобіля
// // model - модель автомобіля
// // price - ціна автомобіля
// // Клас Car повинен створювати об'єкт з одноіменними властивостями brand, model і price, які отримують свої значення з аргументів, переданих при створенні нового екземпляра за допомогою оператора new.
// // Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price.
// // Додай класу Car два методи.

// // getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// // changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на значення параметра newPrice.
// // Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

// // getBrand() - повертає значення приватної властивості brand.
// // changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.
// // Виконай рефакторинг класу Car. Додатково до приватної властивості #brand зроби приватними властивості model і price. Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на геттери та сеттери brand, model і price, для взаємодії з приватними властивостями.
// class Car {
//   #brand;
//   #model;
//   #price;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }
//   get model() {
//     return this.#model;
//   }
//   set model(newModel) {
//     this.#model = newModel;
//   }
// }

// //! Виконай рефакторинг класу Car. Додай публічну статичну властивість maxPrice зі значенням число 50000 - максимально допустима ціна автомобіля.
// // class Car {
// //   #price;

// //   constructor(params) {
// //     this.#price = params.price;
// //   }

// //   get price() {
// //     return this.#price;
// //   }

// //   set price(newPrice) {
// //     this.#price = newPrice;
// //   }
// // }

// // const audi = new Car({ price: 35000 });
// // console.log(audi.price); // 35000

// // audi.price = 49000;
// // console.log(audi.price); // 49000

// // audi.price = 51000;
// // console.log(audi.price); // 49000
// // Додай сеттеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за maxPrice, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// // Під оголошенням класу ми додали ініціалізації екземплярів і виклики методів, щоб показати, як будуть використовуватися геттери і сеттери price.

// class Car {

//   static maxPrice = 50000;
//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// // !Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля.Метод повинен порівняти значення параметра price і приватної статичної властивості maxPrice.

// // Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// // В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// // class Car {
// //   static #maxPrice = 50000;

// //   constructor(params) {
// //     this.price = params.price;
// //   }
// // }
// // const audi = new Car({ price: 36000 });
// // const bmw = new Car({ price: 64000 });

// class Car {
//   static #maxPrice = 50000;

//   static checkPrice(price) {
//     if (price > Car.#maxPrice) {
//       return 'Error! Price exceeds the maximum';
//     } else {
//       return 'Success! Price is within acceptable limits';
//     }
//   }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// //! У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

// // Оголоси клас Admin, який наслідує від класу User
// // Додай класу Admin публічну статичну властивість role (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }


//! Додай класу Admin метод constructor, який приймає один параметр params- об'єкт налаштувань з двома властивостями email і access. Додай класу Admin публічну властивість access, значення якої буде передаватися під час виклику конструктора.
// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  blacklistedEmails = [];
  access;
  constructor(params) {
    super(params.email);
    this.access = params.access;
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true