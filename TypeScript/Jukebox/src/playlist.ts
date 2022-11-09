class Jukebox{
    private playlists:playlist[];
    private selected:playlist;

    constructor(pl:playlist){
        this.playlists = [pl];
        this.selected = this.playlists[0];
    }

    addPlaylist(pl:playlist){
        this.playlists.push(pl);
    }

    selectPlaylist(index:number){
        this.selected = this.playlists[index];
    }

    playSong(){
        return 'Now Playing: '+this.selected.songs[Math.floor(Math.random() * this.selected.songs.length)]
    }

    public get songs(){
        return 'playlist: "'+this.selected.name + '" \n'+'songlist: '+this.selected.songs;
    }
}

class playlist{
    private static _host:string = 'notSpotify';
    private _songs:string[];
    private _name:string;

    constructor(newName:string, songlist?:string[]){
        this._name = newName;
        if(songlist !== undefined){
            this._songs=songlist;
        }
        else{
            this._songs = [];
        }
    };

    public static get host(){
        return playlist._host;
    }

    public get name(){
        return this._name;
    }

    public addSong(song:string){
        this._songs.push(song);
    }

    public toString(){
        return this._songs.toString();
    }

    // public playSong(){
    //     return this._songs[Math.floor(Math.random() * this._songs.length)];
    // }

    public get songs():string[]{
        return this._songs;
    }
}

let myPlaylist = new playlist('My Playlist');

//Adding songs to playlist
myPlaylist.addSong("6, 8, 12 - Brian McKnight");
myPlaylist.addSong("You make me feel so young - Frank Sinatra");
myPlaylist.addSong("How I beat Shaq - Aaron Carter");
myPlaylist.addSong("Angel with a shotgun - The Cab");
myPlaylist.addSong("I'm Autistic - BJ Connolly");
myPlaylist.addSong("Leave the door open - Silk Sonic")

//testing that the class works
console.log('Songs on "'+myPlaylist.name+'": '+myPlaylist.toString());
console.log('Playlists hosted by: '+playlist.host);

//creating Jukebox and playing songs
let myJukebox = new Jukebox(myPlaylist);
console.log(myJukebox.songs);
for(let i:number = 0; i < 10; i++){
    console.log(myJukebox.playSong());
}