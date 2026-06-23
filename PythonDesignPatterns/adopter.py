"""

                    +------------------+
                    |   Application    |
                    +------------------+
                    | + play_song()    |
                    +------------------+
                             |
                             | uses
                             v

                    +------------------+
                    |    <<Target>>    |
                    |      Player      |
                    +------------------+
                    | + play(file)     |
                    +------------------+
                       ^            ^
                       |            |
             implements|            |implements
                       |            |

        +--------------------+   +--------------------+
        | Mp3PlayerAdapter   |   | WavPlayerAdapter   |
        +--------------------+   +--------------------+
        | - mp3_player       |   | - wav_player       |
        +--------------------+   +--------------------+
        | + play(file)       |   | + play(file)       |
        +--------------------+   +--------------------+
                 |                         |
                 | adapts                  | adapts
                 v                         v

        +--------------------+   +--------------------+
        |     Mp3Player      |   |     WavPlayer      |
        +--------------------+   +--------------------+
        | + play_mp3(file)   |   | + play_wav(file)   |
        +--------------------+   +--------------------+

"""

print(__doc__)


class Mp3Player:
    def play_mp3(self, filename):
        print(f"Playing MP3: {filename}")


class WavPlayer:
    def play_wav(self, filename):
        print(f"Playing WAV: {filename}")


# Client
class Application:
    def play_song(self, player, filename):
        player.play(filename)


# Adapter
class Mp3PlayerAdapter:
    def __init__(self, mp3_player):
        self.mp3_player = mp3_player

    def play(self, filename):
        self.mp3_player.play_mp3(filename)


# Adapter
class WavPlayerAdapter:
    def __init__(self, wav_player):
        self.wav_player = wav_player

    def play(self, filename):
        self.wav_player.play_wav(filename)


# Existing objects (Adaptees)
mp3_player = Mp3Player()
wav_player = WavPlayer()

# Adapters
mp3_adapter = Mp3PlayerAdapter(mp3_player)
wav_adapter = WavPlayerAdapter(wav_player)

# Client code
app = Application()

app.play_song(mp3_adapter, "robo")
app.play_song(wav_adapter, "east or west")