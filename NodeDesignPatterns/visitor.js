"use strict";
let doc = `
                    +------------------+
                    |     Visitor      |
                    +------------------+
                    | +visitA(A)       |
                    | +visitB(B)       |
                    +--------+---------+
                             ^
                             |
                +------------+------------+
                |                         |
    +-------------------+     +-------------------+
    | ConcreteVisitor1  |     | ConcreteVisitor2  |
    +-------------------+     +-------------------+
    | visitA()          |     | visitA()          |
    | visitB()          |     | visitB()          |
    +-------------------+     +-------------------+


                    +------------------+
                    |     Element      |
                    +------------------+
                    | +accept(v)       |
                    +--------+---------+
                             ^
                             |
                +------------+------------+
                |                         |
       +----------------+      +----------------+
       | ConcreteA      |      | ConcreteB      |
       +----------------+      +----------------+
       | accept(v)      |      | accept(v)      |
       +-------+--------+      +-------+--------+
               |                       |
               | calls                 | calls
               v                       v

        visitor.visitA(this)    visitor.visitB(this)

`;
console.log(doc);
class Visitor {
}
class CompressionVisitor {
    visit_text(name, size) {
        console.log("File compressed to 50%");
    }
    visit_image(name, resolution, size) {
        console.log("Image compressed to 25%");
    }
    visit_video(name, duration, size) {
        console.log("vidoe compressed to 10%");
    }
}
class EnhanceVisitor {
    visit_text(name, size) {
        console.log("Not applicable");
    }
    visit_image(name, resolution, size) {
        console.log("Image enhanced to 25%");
    }
    visit_video(name, duration, size) {
        console.log("vidoe enhanced to 10%");
    }
}
class TextFile {
    name;
    size;
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
    accept(visitor) {
        visitor.visit_text(this.name, this.size);
    }
}
class ImageFile {
    name;
    size;
    resolution;
    constructor(name, resolution, size) {
        this.name = name;
        this.size = size;
        this.resolution = resolution;
    }
    accept(visitor) {
        visitor.visit_image(this.name, this.resolution, this.size);
    }
}
class Videoile {
    name;
    size;
    duration;
    constructor(name, duration, size) {
        this.name = name;
        this.size = size;
        this.duration = duration;
    }
    accept(visitor) {
        visitor.visit_video(this.name, this.duration, this.size);
    }
}
let t = new TextFile("test", "2kb");
t.accept(new CompressionVisitor());
t.accept(new EnhanceVisitor());
