//! ЗАДАНИЕ: notes-localStorage
//
// Создай простое приложение "Заметки".
//
// HTML:
// - textarea;
// - кнопка "Сохранить";
// - кнопка "Очистить".
//
// ===============================
// ФУНКЦИОНАЛ
// ===============================
//
// 1. Пользователь вводит текст в textarea.
//
// 2. При нажатии на кнопку "Сохранить":
//    - сохранить текст в localStorage;
//    - использовать ключ "note".
//
// 3. При загрузке страницы:
//    - проверить, есть ли сохранённая заметка;
//    - если есть — показать её в textarea.
//
// 4. При нажатии на кнопку "Очистить":
//    - удалить заметку из localStorage;
//    - очистить textarea.
//
// ===============================
// ОГРАНИЧЕНИЯ
// ===============================
//
// - Использовать только localStorage.
// - JSON.stringify() и JSON.parse() НЕ нужны,
//   потому что сохраняется обычная строка.
// - Не использовать никаких библиотек.
//
// ===============================
// ДОПОЛНИТЕЛЬНО (не обязательно)
// ===============================
//
// Если textarea пустая,
// не сохранять пустую заметку.

const input = document.querySelector('textarea');
const saveBtn = document.querySelector('.save');
const clearBtn = document.querySelector('.clear');

saveBtn.addEventListener('click', () => {
  if (input.value.trim()) {
    localStorage.setItem('note', input.value)
  }
})

const notes = localStorage.getItem('note');

if (notes !== null) {
  console.log(notes);
  input.value = notes;
}

clearBtn.addEventListener('click', () => {
  localStorage.removeItem('note');
  input.value = '';
})



