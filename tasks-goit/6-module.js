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

//! Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.
const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};

// const parent = {};
const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

// const child = {};
const child = Object.create(parent);
child.name = "Jason";
child.age = 27;


console.log(child);
console.log(parent);
console.log(ancestor);


