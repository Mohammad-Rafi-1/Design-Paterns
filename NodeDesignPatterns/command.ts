

let doc=`

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




`
console.log(doc)



abstract class Command {
    abstract execute(): void;
}

class Light {
    lightOn(): void {
        console.log("light on");
    }

    lightOff(): void {
        console.log("light off");
    }
}

class Fan {
    start(): void {
        console.log("Fan on");
    }

    stop(): void {
        console.log("Fan off");
    }
}

class AC {
    coolOn(): void {
        console.log("AC on");
    }

    coolOff(): void {
        console.log("AC off");
    }
}

class LightOnCommand extends Command {
    constructor(private light: Light) {
        super();
    }

    execute(): void {
        this.light.lightOn();
    }
}

class LightOffCommand extends Command {
    constructor(private light: Light) {
        super();
    }

    execute(): void {
        this.light.lightOff();
    }
}

class ACOnCommand extends Command {
    constructor(private ac: AC) {
        super();
    }

    execute(): void {
        this.ac.coolOn();
    }
}

class ACOffCommand extends Command {
    constructor(private ac: AC) {
        super();
    }

    execute(): void {
        this.ac.coolOff();
    }
}

class FanOnCommand extends Command {
    constructor(private fan: Fan) {
        super();
    }

    execute(): void {
        this.fan.start();
    }
}

class FanOffCommand extends Command {
    constructor(private fan: Fan) {
        super();
    }

    execute(): void {
        this.fan.stop();
    }
}

// Client Code

const light = new Light();

const lightOn = new LightOnCommand(light);

lightOn.execute();