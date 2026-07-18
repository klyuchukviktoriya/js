/\*
ЗАДАНИЕ 1

Создай класс Lamp.

constructor(isOn)

Свойство:

- isOn

Методы:

- turnOn() — меняет isOn на true
- turnOff() — меняет isOn на false

Создай класс Person.

Метод:

- turnOnLamp(lamp)

В метод передаётся объект лампы.
Person должен вызвать у переданной лампы метод turnOn().

Проверка:

const lamp = new Lamp(false);
const person = new Person();

person.turnOnLamp(lamp);

console.log(lamp.isOn);
// true
\*/
