
doc =`


+-----------+
| Aggregate |
+-----------+
| data      |
+-----------+
| iterator()|
+-----+-----+
      |
      | creates
      v
+-----------+
| Iterator  |
+-----------+
| position  |
+-----------+
| next()    |
+-----------+


`

console.log(doc)


class PlayListIterator{
    constructor(songs){
        this.songs=songs
        this.i=0
    }
    next(){

        if (this.i<this.songs.length){
            this.i+=1
            return {value:this.songs[this.i-1], done:false}
        }
        else{
            return {done:true}
        }

    }
}


class PlayList{

    constructor(){
        this.songs=[]
    }

    add_song(song){
        this.songs.push(song)
    }
    [Symbol.iterator](){
        return new PlayListIterator(this.songs)
    }
}




let music_list=new PlayList()

music_list.add_song("Baby doll")
music_list.add_song("Mona Mona")
music_list.add_song("Afreen Afreen")
music_list.add_song("Robo")


for (let i of music_list){
    console.log(i)
}