// Напиши функцию countWords(text)
//
// Она должна вернуть объект,
// где ключ — слово,
// значение — количество повторений.

function countWords(text) {
    return text.split(' ').reduce((acc, item) => {
        if (!acc[item]) {
            acc[item] = 0;
        }
        acc[item]++;
        return acc;
    }, {});
}

// ======================
// Проверка
// ======================

console.log(countWords('hello hello world'));

// {
//   hello: 2,
//   world: 1
// }

console.log(countWords('js is fun js'));

// {
//   js: 2,
//   is: 1,
//   fun: 1
// }
