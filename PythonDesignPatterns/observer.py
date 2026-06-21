"""

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



"""


print(__doc__)

from abc import ABC, abstractmethod

class Observer(ABC):

    @abstractmethod
    def update(self,stock_name,price):
        pass



class Stock:

    def __init__(self,stock):
        self.stock=stock
        self.price=0
        self.observer=[]
    
    def attach(self,observer):
        self.observer.append(observer)
    def deattach(self,observer):
        self.observer.remove(observer)

    def notify(self):
        for i in self.observer:
            i.update(self.stock,self.price)
    
    def set_price(self,price):
        self.price=price
        self.notify()



class Mobile(Observer):

    def update(self, stock_name, price):
        print(f"MobileApp: {stock_name} price updated to {price}")

class Webdashboard(Observer):

    def update(self, stock_name, price):
        print(f"webdashboard: {stock_name} price updated to {price}")


s=Stock("TCS")
s.attach(Mobile())
s.attach(Webdashboard())
s.set_price(100)