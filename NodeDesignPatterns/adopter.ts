
let doc=`

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


`
console.log(doc)


class Mp3Player {
    playMp3(filename: string): void {
        console.log(`Playing MP3: ${filename}`);
    }
}

class WavPlayer {
    playWav(filename: string): void {
        console.log(`Playing WAV: ${filename}`);
    }
}

interface Player {
    play(filename: string): void;
}

class Mp3PlayerAdapter implements Player {
    constructor(private mp3Player: Mp3Player) {}

    play(filename: string): void {
        this.mp3Player.playMp3(filename);
    }
}

class WavPlayerAdapter implements Player {
    constructor(private wavPlayer: WavPlayer) {}

    play(filename: string): void {
        this.wavPlayer.playWav(filename);
    }
}


class Application {
    playSong(player: Player, filename: string): void {
        player.play(filename);
    }
}


const mp3Player = new Mp3Player();
const wavPlayer = new WavPlayer();

const mp3Adapter = new Mp3PlayerAdapter(mp3Player);
const wavAdapter = new WavPlayerAdapter(wavPlayer);

const app = new Application();

app.playSong(mp3Adapter, "robo");
app.playSong(wavAdapter, "east or west");