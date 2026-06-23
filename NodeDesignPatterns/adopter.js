"use strict";
let doc = `

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


`;
console.log(doc);
class Mp3Player {
    playMp3(filename) {
        console.log(`Playing MP3: ${filename}`);
    }
}
class WavPlayer {
    playWav(filename) {
        console.log(`Playing WAV: ${filename}`);
    }
}
class Mp3PlayerAdapter {
    mp3Player;
    constructor(mp3Player) {
        this.mp3Player = mp3Player;
    }
    play(filename) {
        this.mp3Player.playMp3(filename);
    }
}
class WavPlayerAdapter {
    wavPlayer;
    constructor(wavPlayer) {
        this.wavPlayer = wavPlayer;
    }
    play(filename) {
        this.wavPlayer.playWav(filename);
    }
}
class Application {
    playSong(player, filename) {
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
