doc=`

┌─────────────────────────┐
│       Singleton         │
├─────────────────────────┤
│ - static instance       │
├─────────────────────────┤
│ + getInstance()         │
└───────────┬─────────────┘
            │
            │ creates once
            │
            ▼
┌─────────────────────────┐
│     Singleton Obj       │
├─────────────────────────┤
│ createdAt               │
│ other properties...     │
└─────────────────────────┘

new Singleton()
    |
    ├─ first call → create object → store in Singleton.instance
    |
    └─ later calls → constructor returns existing instance

`

console.log(doc)

class Singleton{
    constructor(){

        this.createdAt=Date.now()

    }
    static getInstance(){

        if(Singleton.instance){
            return Singleton.instance
        }

        this.instance=new Singleton();
        return this.instance
    }
}

a= Singleton.getInstance()
b= Singleton.getInstance()

console.log(a===b)