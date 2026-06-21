"use strict";
let doc = `

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


`;
console.log(doc);
class Mobile {
    update(stock, price) {
        console.log(`MobileApp: ${stock} price updated to ${price}`);
    }
}
class Webdashboard {
    update(stock, price) {
        console.log(`Webdashboard: ${stock} price updated to ${price}`);
    }
}
class Stock {
    stock_name;
    price;
    observer;
    constructor(stock) {
        this.stock_name = stock;
        this.price = 0;
        this.observer = [];
    }
    attach(observer) {
        this.observer.push(observer);
    }
    deattach(observer) {
        this.observer = this.observer.filter(obs => obs !== observer);
    }
    notify() {
        for (let i of this.observer) {
            i.update(this.stock_name, this.price);
        }
    }
    set_price(price) {
        this.price = price;
        this.notify();
    }
}
let s = new Stock("TCS");
s.attach(new Mobile());
s.attach(new Webdashboard());
s.set_price(100);
