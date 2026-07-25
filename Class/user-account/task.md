// ЗАДАЧА: Пользовательские аккаунты

/*
Создай класс UserAccount.

Свойства:
- name
- #password — приватное
- static count — количество созданных аккаунтов

Методы:
- checkPassword(password) — возвращает true или false
- changePassword(oldPassword, newPassword):
  если старый пароль верный — меняет пароль и возвращает true,
  иначе возвращает false
- static getCount() — возвращает количество аккаунтов
*/

const user1 = new UserAccount('Анна', '1234');
const user2 = new UserAccount('Олег', 'qwerty');

console.log(UserAccount.getCount());
// 2

console.log(user1.checkPassword('1234'));
// true

console.log(user1.checkPassword('0000'));
// false

console.log(user1.changePassword('0000', '5678'));
// false

console.log(user1.changePassword('1234', '5678'));
// true

console.log(user1.checkPassword('5678'));
// true