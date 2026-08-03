// ЗАДАЧА 4 ИЗ 5
//
// Создай класс Playlist.
//
// constructor(name)
// - сохраняет название плейлиста;
// - создаёт пустой массив songs.
//
// addSong(song)
// - добавляет песню;
// - одинаковые песни добавлять нельзя.
//
// removeSong(song)
// - удаляет песню;
// - если её нет, ничего не происходит.
//
// getInfo()
// - возвращает строку:
// "Rock: Queen, AC/DC"
//
// - если песен нет:
// "Rock: плейлист пуст"

class Playlist {
// твой код
}

const playlist = new Playlist('Rock');

playlist.addSong('Queen');
playlist.addSong('AC/DC');
playlist.addSong('Queen');

console.log(playlist.getInfo());
// Rock: Queen, AC/DC

playlist.removeSong('Queen');

console.log(playlist.getInfo());
// Rock: AC/DC

playlist.removeSong('AC/DC');

console.log(playlist.getInfo());
// Rock: плейлист пуст
