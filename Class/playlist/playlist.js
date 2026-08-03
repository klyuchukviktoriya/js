class Playlist {
  songs = [];

  constructor(name) {
    this.name = name;
  }

  addSong(song) {
    if (!this.songs.includes(song)) {
      this.songs.push(song);
    }
  }

  removeSong(song) {
    this.songs = this.songs.filter(item => item !== song);
  }

  getInfo() {
    if (this.songs.length) {
      return `${this.name}: ${this.songs.join(', ')}`;
    } else {
      return `${this.name}: плейлист пуст`;
    }
  }
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