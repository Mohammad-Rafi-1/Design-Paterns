"use strict";
let doc = `

                +----------------------+
                |       Context        |
                |----------------------|
                | state: State        |
                |----------------------|
                | request()           |
                +----------+----------+
                           |
                           | delegates
                           v
        +-------------------------------+
        |          State (Interface)    |
        |-------------------------------|
        | handle(context)              |
        +---------------+---------------+
                        |
        +---------------+-------------------+
        |               |                   |
        v               v                   v
+----------------+ +----------------+ +----------------+
| ConcreteStateA | | ConcreteStateB | | ConcreteStateC |
|----------------| |----------------| |----------------|
| handle()       | | handle()       | | handle()       |
| (changes state)| | (changes state)| | (changes state)|
+----------------+ +----------------+ +----------------+


`;
console.log(doc);
class State {
}
class Offstate extends State {
    press_button(fan) {
        console.log("Fan On");
        fan.state = new Onstate();
    }
}
class Onstate extends State {
    press_button(fan) {
        console.log("Fan Off");
        fan.state = new Offstate();
    }
}
class Fan {
    state;
    constructor() {
        this.state = new Offstate();
    }
    press_button() {
        this.state.press_button(this);
    }
}
const fan = new Fan();
fan.press_button();
fan.press_button();
fan.press_button();
