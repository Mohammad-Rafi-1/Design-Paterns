let doc=`

                +----------------------+
                |       Context        |
                |----------------------|
                | state: State         |
                |----------------------|
                | request()            |
                +----------+----------+
                           |
                           | delegates
                           v
            +-------------------------------+
            |          State (Interface)    |
            |-------------------------------|
            | handle(context)               |
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


`

console.log(doc)


abstract class State{
    abstract press_button(fan:Fan): void;

}


class Offstate extends State{
    press_button(fan:Fan): void {
        console.log("Fan On")
        fan.state=new Onstate()
    }
}


class Onstate extends State{

    press_button(fan:Fan): void {
        console.log("Fan Off")
        fan.state=new Offstate()
    }

}

class Fan{
    state : State
    constructor(){
        this.state=new Offstate()
    }
    press_button(){
        this.state.press_button(this)
    }
}

const fan = new Fan();

fan.press_button();
fan.press_button();
fan.press_button();