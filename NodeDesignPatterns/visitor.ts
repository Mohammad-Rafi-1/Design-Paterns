let doc =`
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

`

console.log(doc)
abstract class Visitor {
    abstract visit_text(name: string, size: string): void;
    abstract visit_image(name: string, resolution: string, size: string): void;
    abstract visit_video(name: string, duration: number, size: string): void;
}


class CompressionVisitor{
    visit_text(name:string,size:string):void{
        console.log("File compressed to 50%")
    }
    visit_image(name:string,resolution:string,size:string):void{
        console.log("Image compressed to 25%")
    }
    visit_video(name:string,duration:number,size:string):void{
        console.log("vidoe compressed to 10%")
    }
}



class EnhanceVisitor{
    visit_text(name:string,size:string):void{
        console.log("Not applicable")
    }
    visit_image(name:string,resolution:string,size:string):void{
        console.log("Image enhanced to 25%")
    }
    visit_video(name:string,duration:number,size:string):void{
        console.log("vidoe enhanced to 10%")
    }
}



class TextFile{
    name:string;
    size:string
    constructor(name:string,size:string){
        this.name=name;
        this.size=size
    }
    accept(visitor:Visitor):void{
        visitor.visit_text(this.name,this.size)
    }
}


class ImageFile{
    name:string;
    size:string;
    resolution:string
    constructor(name:string,resolution:string,size:string){
        this.name=name;
        this.size=size;
        this.resolution=resolution
    }
    accept(visitor:Visitor):void{
        visitor.visit_image(this.name,this.resolution,this.size)
    }
}


class Videoile{
    name:string;
    size:string;
    duration:number
    constructor(name:string,duration:number,size:string){
        this.name=name;
        this.size=size;
        this.duration=duration;
    }
    accept(visitor:Visitor):void{
        visitor.visit_video(this.name,this.duration,this.size)
    }
}







let t = new TextFile("test","2kb")

t.accept(new CompressionVisitor())
t.accept(new EnhanceVisitor())