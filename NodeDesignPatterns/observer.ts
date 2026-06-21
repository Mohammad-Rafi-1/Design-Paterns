

let doc =
`

                +--------------------+
                |      Subject       |
                +--------------------+
                | - observers: list  |
                +--------------------+
                | + attach(obs)      |
                | + detach(obs)      |
                | + notify()         |
                +--------------------+
                         |
                         |
                         v
        -------------------------------------
        |                 |                 |
+----------------+ +----------------+ +----------------+
|   Observer     | |   Observer     | |   Observer     |
+----------------+ +----------------+ +----------------+
| + update()     | | + update()     | | + update()     |
+----------------+ +----------------+ +----------------+
        ^                 ^                 ^
        |                 |                 |
+----------------+ +----------------+ +----------------+
| ConcreteObsA   | | ConcreteObsB   | | ConcreteObsC   |
+----------------+ +----------------+ +----------------+
| + update()     | | + update()     | | + update()     |
+----------------+ +----------------+ +----------------+


`
console.log(doc)



interface Observer{
    update(stock:string,price:number): void
}

class Mobile implements Observer{
    update(stock:string,price:number): void{
        console.log(`MobileApp: ${stock} price updated to ${price}`)
    }
}




class Webdashboard implements Observer{
    update(stock:string,price:number): void{
        console.log(`Webdashboard: ${stock} price updated to ${price}`)
    }
}




class Stock{

    private stock_name:string;
    private price:number;
    private observer:Observer[];

    constructor(stock:string){

        this.stock_name=stock;
        this.price=0
        this.observer=[]
    
    }

    attach(observer:Observer){
        this.observer.push(observer)
    }

    deattach(observer:Observer){
        this.observer = this.observer.filter(obs => obs !== observer);
    }

    notify(){

        for(let i of this.observer){
            i.update(this.stock_name,this.price)
        }
    }

    set_price(price:number){
        this.price=price
        this.notify()
    }
}

let s = new Stock("TCS")
s.attach(new Mobile())
s.attach(new Webdashboard())
s.set_price(100)
