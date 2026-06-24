// Реализуй функцию createInventory().
//
// Методы:
//
// add(name)
// remove(name)
// has(name)
// count(name)
// getAll()
//
// Правила:
//
// Если товар уже есть,
// add() увеличивает его количество.
//
// remove() уменьшает количество.
// Если количество стало 0 — удалить товар.
//
// has(name)
// возвращает true / false.
//
// count(name)
// возвращает количество товара.
//
// getAll()
// возвращает объект со всеми товарами.

function createInventory() {
    const fruits = {};
    return {
        add(name) {
            if (!fruits[name]) {
                fruits[name] = 1;
            } else {
                fruits[name]++;
            }
        },
        remove(name) {
            if (fruits[name]) {
                fruits[name]--;
                if (fruits[name] === 0) {
                    delete fruits[name];
                }
            }
        },
        has(name) {
            return fruits.hasOwnProperty(name);
        },
        count(name) {
            return fruits[name];
        },
        getAll() {
            return fruits;
        },
    };
}

// ======================
// Проверка
// ======================

const inventory = createInventory();

inventory.add('Apple');
inventory.add('Apple');
inventory.add('Banana');
inventory.add('Orange');
inventory.add('Orange');
inventory.add('Orange');

console.log(inventory.count('Apple'));
// 2

console.log(inventory.count('Orange'));
// 3

console.log(inventory.has('Banana'));
// true

inventory.remove('Orange');

console.log(inventory.count('Orange'));
// 2

inventory.remove('Banana');

console.log(inventory.has('Banana'));
// false

console.log(inventory.getAll());
// {
//   Apple: 2,
//   Orange: 2
// }
