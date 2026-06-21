

let doc=`

+------------------+
|    TextEditor    |  <<Originator>>
+------------------+
| - content        |
+------------------+
| + write()        |
| + save()         |
| + restore()      |
+------------------+
         |
         | creates
         v
+------------------+
|     Memento      |
+------------------+
| - state          |
+------------------+
+------------------+

         ^
         |
         | stores
         |
+------------------+
|     History      |  <<Caretaker>>
+------------------+
| - h : list       |
+------------------+
| + save()         |
| + undo()         |
+------------------+

`


console.log(doc)


class Memento{
    public state:string;

    constructor(state:string){
        this.state=state
    }
}



class TextEditor{

    public state:string=""

    write(text:string):void{
        this.state=text
    }
    store():Memento{
        return new Memento(this.state)
    }

    restore(memento:Memento):void{
        this.state=memento.state
    }

}


class History_text{
    private h: Memento[]=[];
    constructor(){
        this.h=new Array()
    }

    save(memento:Memento):void{
        this.h.push(memento)
    }
    undo():Memento|undefined{
      return   this.h.pop()
    }
}



let t = new TextEditor()
let hist =  new History_text()

t.write("Hello world")
hist.save(t.store())

t.write("Bye Bye")
hist.save(t.store())


let memento = hist.undo();

if (memento) {
    t.restore(memento);
    console.log(t.state);
}