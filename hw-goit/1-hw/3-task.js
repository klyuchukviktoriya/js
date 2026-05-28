// Задача 3. Ширина елемента
// Оголоси функцію getElementWidth, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • content— перший параметр, ширина контенту • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін • border — третій параметр, значення товщини бордера для кожної зі сторін Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.
// Доповни код функції так, щоб вона повертала число —загальну ширину елемента. При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box.
// Оголошена функція getElementWidth(content, padding, border)
// Виклик getElementWidth("50px", "8px", "4px") повертає число 74
// Виклик getElementWidth("60px", "12px", "8.5px") повертає число 101
// Виклик getElementWidth("200px", "0px", "0px") повертає число 200
// Виклик getElementWidth з будь якими-валідними аргументами повертає правильне значення

function getElementWidth (content, padding, border) {
  const width = Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
  return width;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200