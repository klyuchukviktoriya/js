class Lamp {
  constructor(isOn) {
    this.isOn = isOn;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
  }
}

class Person {
  turnOnLamp(lamp) {
    lamp.turnOn();
  }

  turnOffLamp(lamp) {
    lamp.turnOff();
  }
}


const lamp = new Lamp(false);
const person = new Person();

person.turnOnLamp(lamp);

console.log(lamp.isOn);
// true

person.turnOffLamp(lamp);

console.log(lamp.isOn);
// false