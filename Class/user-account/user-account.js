class UserAccount {
  #password;
  static count = 0;

  constructor(name, password) {
    this.name = name;
    this.#password = password;
    UserAccount.count++;
  }

  checkPassword(password) {
    return this.#password === password;
  }

  changePassword(oldPassword, newPassword) {
    if (this.#password === oldPassword) {
      this.#password = newPassword;
      return true;
    }
    return false;
  }

  static getCount() {
    return UserAccount.count;
  }
}

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