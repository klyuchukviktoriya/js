// Реализуй функцию createNotes().
//
// Методы:
//
// add(text)
// remove(text)
// update(oldText, newText)
// has(text)
// getAll()

function createNotes() {
    const notes = [];
    return {
        add(text) {
            return notes.push(text);
        },
        remove(text) {
            const note = notes.indexOf(text);
            if (note !== -1) {
                notes.splice(note, 1);
            }
        },
        update(oldText, newText) {
            const note = notes.indexOf(oldText);
            if (note !== -1) {
                notes.splice(note, 1, newText);
            }
        },
        has(text) {
            return notes.includes(text);
        },
        getAll() {
            return notes;
        },
    };
}

// ======================
// Проверка
// ======================

const notes = createNotes();

notes.add('Buy milk');
notes.add('Learn JS');
notes.add('Go to gym');

console.log(notes.getAll());
// ["Buy milk", "Learn JS", "Go to gym"]

console.log(notes.has('Learn JS'));
// true

notes.update('Learn JS', 'Learn React');

console.log(notes.getAll());
// ["Buy milk", "Learn React", "Go to gym"]

console.log(notes.has('Learn JS'));
// false

console.log(notes.has('Learn React'));
// true

notes.remove('Buy milk');

console.log(notes.getAll());
// ["Learn React", "Go to gym"]
