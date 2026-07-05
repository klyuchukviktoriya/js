//! ЗАДАНИЕ: character-counter

// Есть textarea и место для вывода числа.

// Сделай счетчик символов, который обновляется во время ввода.

// Дополнительно:
// - максимум 100 символов;
// - когда пользователь близко к лимиту — визуально предупреди;
// - лишний текст не должен оставаться в поле.

const textarea = document.querySelector('.message');
const count = document.querySelector('.count');

textarea.addEventListener('input', () => {
    if (textarea.value.length >= 80) {
        count.classList.add('warning');
    } else {
        count.classList.remove('warning');
    }
    if (textarea.value.length > 100) {
        textarea.value = textarea.value.slice(0, 100);
    }
    count.textContent = textarea.value.length;
});
