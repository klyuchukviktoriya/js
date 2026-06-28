// Напиши функцию:
//
// getTopAuthor(books)
//
// Она принимает массив книг и должна вернуть
// автора, у которого больше всего книг.

function getTopAuthor(arr) {
    const obj = arr.reduce((acc, obj) => {
        const author = obj.author;
        if (!acc[author]) {
            acc[author] = 0;
        }
        acc[author]++;

        return acc;
    }, {});
    const author = Object.entries(obj).reduce((acc, arr) =>
        acc[1] > arr[1] ? acc : arr
    );
    return author[0];
}

const books = [
    { title: 'A', author: 'Alex' },
    { title: 'B', author: 'Kate' },
    { title: 'C', author: 'Alex' },
    { title: 'D', author: 'John' },
    { title: 'E', author: 'Alex' },
    { title: 'F', author: 'Kate' },
];

console.log(getTopAuthor(books));
// "Alex"
