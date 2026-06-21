"use strict";
let doc = `


                 +----------------------+
                 |   PaymentStrategy    |   <<interface>>
                 +----------------------+
                 | + pay(amount)        |
                 +----------^-----------+
                            |
     ------------------------------------------------
     |                      |                       |
+-----------+        +-------------+        +-------------+
|    UPI    |        | CreditCard  |        |   Paypal    |
+-----------+        +-------------+        +-------------+
| + pay()   |        | + pay()     |        | + pay()     |
+-----------+        +-------------+        +-------------+


                 +----------------------+
                 | PaymentProcessor     |
                 +----------------------+
                 | - strategy           |
                 +----------------------+
                 | + __init__(strategy) |
                 | + process(amount)    |
                 +----------|-----------+
                            |
                            | uses
                            v
                 PaymentStrategy (interface)



`;
console.log(doc);
class UPI {
    pay(amount) {
        console.log(`amount ${amount}$ paid via upi`);
    }
}
class CreditCard {
    pay(amount) {
        console.log(`amount ${amount}$ paid via credit card`);
    }
}
class Paypal {
    pay(amount) {
        console.log(`amount ${amount}$ paid via paypal`);
    }
}
class PaymentProcessor {
    strategy;
    constructor(strategy) {
        this.strategy = strategy;
    }
    process(amount) {
        this.strategy.pay(amount);
    }
}
let payment = new PaymentProcessor(new UPI());
payment.process(100);
