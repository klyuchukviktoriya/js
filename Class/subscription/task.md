// ЗАДАЧА: Платные подписки

/*
Создай класс Subscription.

Свойства:
- name
- price

Метод:
- getInfo() — возвращает строку:
  "Music — 10$"


Создай класс PremiumSubscription, который наследуется от Subscription.

Дополнительное свойство:
- discount — скидка в процентах

Переопредели метод getInfo(), чтобы он возвращал:
"Movies — 16$ со скидкой 20%"

Для получения цены используй отдельный метод getPrice().
*/

const basic = new Subscription('Music', 10);
const premium = new PremiumSubscription('Movies', 20, 20);

console.log(basic.getPrice());
// 10

console.log(basic.getInfo());
// Music — 10$

console.log(premium.getPrice());
// 16

console.log(premium.getInfo());
// Movies — 16$ со скидкой 20%