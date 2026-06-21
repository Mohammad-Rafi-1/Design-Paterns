"use strict";
let doc = `

                    +------------------+
                    |     Client       |
                    +------------------+
                             |
                             |
                             v

                    +------------------+
                    |     Command      |  <<interface>>
                    +------------------+
                    | + execute()      |
                    +------------------+
                             ^
                             |
          +------------------+------------------+
          |                                     |
          |                                     |
+----------------------+       +----------------------+
| ConcreteCommandA    |       | ConcreteCommandB     |
+----------------------+       +----------------------+
| - receiver          |       | - receiver           |
+----------------------+       +----------------------+
| + execute()         |       | + execute()          |
+----------------------+       +----------------------+
          |                                     |
          |                                     |
          v                                     v

+----------------------+       +----------------------+
|      ReceiverA       |       |      ReceiverB       |
+----------------------+       +----------------------+
| operationA()         |       | operationB()         |
+----------------------+       +----------------------+


                    +------------------+
                    |     Invoker      |
                    +------------------+
                    | + execute(cmd)   |
                    +------------------+
                             |
                             |
                             v
                         Command




`;
console.log(doc);
class Command {
}
class Light {
    lightOn() {
        console.log("light on");
    }
    lightOff() {
        console.log("light off");
    }
}
class Fan {
    start() {
        console.log("Fan on");
    }
    stop() {
        console.log("Fan off");
    }
}
class AC {
    coolOn() {
        console.log("AC on");
    }
    coolOff() {
        console.log("AC off");
    }
}
class LightOnCommand extends Command {
    light;
    constructor(light) {
        super();
        this.light = light;
    }
    execute() {
        this.light.lightOn();
    }
}
class LightOffCommand extends Command {
    light;
    constructor(light) {
        super();
        this.light = light;
    }
    execute() {
        this.light.lightOff();
    }
}
class ACOnCommand extends Command {
    ac;
    constructor(ac) {
        super();
        this.ac = ac;
    }
    execute() {
        this.ac.coolOn();
    }
}
class ACOffCommand extends Command {
    ac;
    constructor(ac) {
        super();
        this.ac = ac;
    }
    execute() {
        this.ac.coolOff();
    }
}
class FanOnCommand extends Command {
    fan;
    constructor(fan) {
        super();
        this.fan = fan;
    }
    execute() {
        this.fan.start();
    }
}
class FanOffCommand extends Command {
    fan;
    constructor(fan) {
        super();
        this.fan = fan;
    }
    execute() {
        this.fan.stop();
    }
}
// Client Code
const light = new Light();
const lightOn = new LightOnCommand(light);
lightOn.execute();
