// Напиши функцию invert(obj).
//
// Она должна поменять местами
// ключи и значения.
//
// Предполагаем, что значения уникальны.

function invert(obj) {
    const arr = Object.entries(obj).map((arr) => arr.toReversed());
    return Object.fromEntries(arr);
}

// ======================
// Проверка
// ======================

console.log(
    invert({
        a: 1,
        b: 2,
        c: 3,
    })
);

// {
//   1: "a",
//   2: "b",
//   3: "c"
// }

console.log(
    invert({
        apple: '🍎',
        banana: '🍌',
    })
);

// {
//   🍎: "apple",
//   🍌: "banana"
// }
