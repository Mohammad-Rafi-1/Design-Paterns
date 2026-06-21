
"""
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


"""

print(__doc__)


class PlaylistIterator:
    def __init__(self,songs):
        self.songs=songs
        self.i=0
    def __next__(self):

        if self.i < len(self.songs):
            self.i+=1
            return self.songs[self.i-1]
        raise StopIteration


        



class Playlist:

    def __init__(self):
        self.songs=[]
    

    def add_song(self,song):
        self.songs.append(song)
    
    def __iter__(self):
        return PlaylistIterator(self.songs)
    



music_list=Playlist()

music_list.add_song("Baby doll")
music_list.add_song("Beinteha")
music_list.add_song("Mona Mona")
music_list.add_song("Afreen Afreen")
music_list.add_song("Robo")


for i  in music_list:
    print(i)
