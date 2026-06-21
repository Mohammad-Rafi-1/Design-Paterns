"use strict";
let doc = `

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

`;
console.log(doc);
class Memento {
    state;
    constructor(state) {
        this.state = state;
    }
}
class TextEditor {
    state = "";
    write(text) {
        this.state = text;
    }
    store() {
        return new Memento(this.state);
    }
    restore(memento) {
        this.state = memento.state;
    }
}
class History_text {
    h = [];
    constructor() {
        this.h = new Array();
    }
    save(memento) {
        this.h.push(memento);
    }
    undo() {
        return this.h.pop();
    }
}
let t = new TextEditor();
let hist = new History_text();
t.write("Hello world");
hist.save(t.store());
t.write("Bye Bye");
hist.save(t.store());
let memento = hist.undo();
if (memento) {
    t.restore(memento);
    console.log(t.state);
}
