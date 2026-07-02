const user = {
    name: 'Alex',

    sayName() {
        console.log(this.name);
    },
};

setTimeout(() => user.sayName(), 1000);
