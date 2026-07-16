class BankAccount {
  owner;
  #balance;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }

  showInfo() {
    return `${this.owner}: ${this.#balance} грн`;
  }
}

const account1 = new BankAccount('Vika', 1000);
const account2 = new BankAccount('Igor', 500);

account1.deposit(700);
account1.withdraw(200);

account2.withdraw(800);
account2.deposit(300);

console.log(account1.showInfo());
console.log(account2.showInfo());

console.log(account1.getBalance());
// 1500

console.log(account2.getBalance());
// 800
