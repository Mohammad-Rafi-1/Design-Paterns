let doc=`


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



`


console.log(doc)



interface PaymentStrategy{
    pay(amount:number): void
}


class UPI implements PaymentStrategy{
    pay(amount: number): void{
        console.log(`amount ${amount}$ paid via upi`)
    }
}


class CreditCard implements PaymentStrategy{
    pay(amount: number): void{
        console.log(`amount ${amount}$ paid via credit card`)
    }
}



class Paypal implements PaymentStrategy{
    pay(amount: number): void{
        console.log(`amount ${amount}$ paid via paypal`)
    }
}




class PaymentProcessor{
    private strategy:PaymentStrategy;
    constructor(strategy: PaymentStrategy ){
        this.strategy=strategy
    }

    process(amount:number){
        this.strategy.pay(amount)
    }
}


let payment=new PaymentProcessor(new UPI());
payment.process(100)