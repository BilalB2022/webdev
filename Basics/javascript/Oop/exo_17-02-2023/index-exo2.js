// music player
 
// Create a class MusicPlayer that has the following properties: playlist<arraylist>, volume as default 0, isPlaying as default false, currentTrack as default 0
 
// Create the following methods:
// play() - sets isPlaying to true
// pause() - sets isPlaying to false
// next() - sets currentTrack to the next track
// previous() - sets currentTrack to the previous track
// setVolume(volume) - sets the volume to the given value
// status() - displays the current track, volume and isPlaying in the console
 
// Create a new instance of MusicPlayer and test the methods
// Expected output:
// Current track: song1, volume: 0, is playing: true
// Current track: song2, volume: 0, is playing: true
// Current track: song2, volume: 10, is playing: false
// const musicPlayer = new MusicPlayer(['song1','song2'], 50);

class MusicPlayer{
    constructor(playList){
    this.playList = playList
    this.volume = 0
    this.isPlaying = false
    this.currenTrack = 0 // index position number 
    }

    play(){
        return this.isPlaying = true
    }

    pause(){
        return this.isPlaying = false
    }

    next(){
       if(this.currenTrack < this.playList.length -1){
        this.currenTrack++
       }
    }

    previous(){
        this.currenTrack > 0 ? this.currenTrack-- : this.currenTrack
    }

    setVolume(volume){
        if (volume){
            return this.volume = volume
        }
    }

    status(){
        const obj = {
        Track:this.playList[this.currenTrack],
        CurrentVolume:this.volume,
        IsPlaying:this.isPlaying
        }
        return obj
    }
}

// let musicList=[]
// for(let x=1; x<=10;x++){
//     let songname= `song${x}`
//     musicList.push(songname)
// }
let musicList = [
    'song1', 'song2',
    'song3', 'song4',
    'song5', 'song6',
    'song7', 'song8',
    'song9', 'song10'
  ]
let set1 = new MusicPlayer(musicList)
set1.next()
set1.previous()
set1.setVolume(50)
set1.next()
set1.next()
set1.next()
set1.next()
set1.next()
set1.next()
set1.next()
set1.next()
set1.next()
set1.next()
set1.next()
set1.next()
set1.previous()
set1.previous()
set1.previous()
set1.previous()
set1.previous()
set1.previous()
set1.previous()
set1.previous()
set1.previous()
set1.previous()
console.log(set1.status());



