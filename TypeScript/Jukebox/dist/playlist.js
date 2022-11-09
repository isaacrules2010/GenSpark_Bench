"use strict";
class Jukebox {
    constructor(pl) {
        this.playlists = [pl];
        this.selected = this.playlists[0];
    }
    addPlaylist(pl) {
        this.playlists.push(pl);
    }
    selectPlaylist(index) {
        this.selected = this.playlists[index];
    }
    playSong() {
        return 'Now Playing: ' + this.selected.songs[Math.floor(Math.random() * this.selected.songs.length)];
    }
    get songs() {
        return 'playlist: "' + this.selected.name + '" \n' + 'songlist: ' + this.selected.songs;
    }
}
class playlist {
    constructor(newName, songlist) {
        this._name = newName;
        if (songlist !== undefined) {
            this._songs = songlist;
        }
        else {
            this._songs = [];
        }
    }
    ;
    static get host() {
        return playlist._host;
    }
    get name() {
        return this._name;
    }
    addSong(song) {
        this._songs.push(song);
    }
    toString() {
        return this._songs.toString();
    }
    get songs() {
        return this._songs;
    }
}
playlist._host = 'notSpotify';
let myPlaylist = new playlist('My Playlist');
myPlaylist.addSong("6, 8, 12 - Brian McKnight");
myPlaylist.addSong("You make me feel so young - Frank Sinatra");
myPlaylist.addSong("How I beat Shaq - Aaron Carter");
myPlaylist.addSong("Angel with a shotgun - The Cab");
myPlaylist.addSong("I'm Autistic - BJ Connolly");
myPlaylist.addSong("Leave the door open - Silk Sonic");
console.log('Songs on "' + myPlaylist.name + '": ' + myPlaylist.toString());
console.log('Playlists hosted by: ' + playlist.host);
let myJukebox = new Jukebox(myPlaylist);
console.log(myJukebox.songs);
for (let i = 0; i < 10; i++) {
    console.log(myJukebox.playSong());
}
//# sourceMappingURL=playlist.js.map