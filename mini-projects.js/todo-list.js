// Реализуй функцию createTodoList.
// Требования:
// 1. createTodoList() возвращает объект.
// 2. add(task)
//    Добавляет задачу.
// 3. remove(task)
//    Удаляет первое совпадение задачи.
// 4. getAll()
//    Возвращает массив задач.

function createTodoList() {
    const tasks = [];
    return {
        add(task) {
            tasks.push(task);
        },
        remove(task) {
            if (tasks.includes(task)) {
                tasks.splice(tasks.indexOf(task), 1);
            }
        },
        getAll() {
            return tasks;
        },
        has(task) {
            return tasks.includes(task);
        },
        count() {
            return tasks.length;
        },
        clear() {
            tasks.splice(0);
        },
    };
}

const todo = createTodoList();

todo.add('Learn JS');
todo.add('Read book');
todo.add('Practice closures');

console.log(todo.getAll());
// ["Learn JS", "Read book", "Practice closures"]

console.log(todo.has('Read book'));
// true

console.log(todo.has('Sleep'));
// false

console.log(todo.count());
// 3

todo.remove('Read book');

console.log(todo.getAll());
// ["Learn JS", "Practice closures"]

console.log(todo.count());
// 2

todo.clear();

console.log(todo.getAll());
// []

console.log(todo.count());
// 0
