// Реализуй функцию createStudentManager().
//
// Методы:
//
// add(name, age)
// remove(name)
// find(name)
// getAdults()
// averageAge()
// getAll()

function createStudentManager() {
    const students = {};
    return {
        add(name, age) {
            students[name] = { name, age };
        },
        remove(name) {
            if (students[name]) {
                delete students[name];
            }
        },
        find(name) {
            // const studentArray = Object.entries(students).find(
            //     (arr) => arr[0] === name
            // );
            // if (studentArray !== undefined) {
            //     return studentArray[1];
            // }
            return students[name];
        },
        getAdults() {
            return Object.values(students).filter((obj) => obj.age >= 18);
        },
        averageAge() {
            const arr = Object.values(students);
            return arr.reduce((acc, obj) => acc + obj.age, 0) / arr.length;
        },
        getAll() {
            return students;
        },
    };
}

// ======================
// Проверка
// ======================

const students = createStudentManager();

students.add('Alex', 20);
students.add('John', 17);
students.add('Kate', 25);
students.add('Mike', 18);

console.log(students.find('Kate'));
// { name: "Kate", age: 25 }

students.remove('John');

console.log(students.find('John'));
// undefined

console.log(students.find('Alex'));
// { name: "Alex", age: 20 }

console.log(students.getAdults());
// [
//   { name: "Alex", age: 20 },
//   { name: "Kate", age: 25 },
//   { name: "Mike", age: 18 }
// ]

console.log(students.averageAge());
// 21

console.log(students.getAll());
// {
//   Alex: { name: "Alex", age: 20 },
//   Kate: { name: "Kate", age: 25 },
//   Mike: { name: "Mike", age: 18 }
// }
