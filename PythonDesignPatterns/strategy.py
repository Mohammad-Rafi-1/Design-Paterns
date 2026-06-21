"""
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
                 PaymentStrategy (interface)"""

print(__doc__)








from abc import ABC, abstractmethod



class PaymentStratergy:

    def pay(self,amount):
        pass



class UPI(PaymentStratergy):

    def pay(self, amount):
        print(f"amount {amount}$ paid via upi")



class CreditCard(PaymentStratergy):

    def pay(self, amount):
        print(f"amount {amount}$ paid via credit card")


class Paypal(PaymentStratergy):

    def pay(self, amount):
        print(f"amount {amount}$ paid via paypal")






class PaymentProcessor:


    def __init__(self,strategy):
        self.strategy=strategy
    

    def process(self,amount):
        self.strategy.pay(amount)



payment=PaymentProcessor(UPI())
payment.process(100)
