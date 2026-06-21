
"""                 +------------------+
                 |    Prototype     |
                 +------------------+
                 | + clone()        |
                 +------------------+
                          ^
                          |
          ---------------------------------
          |                               |
          |                               |
+------------------+         +------------------+
| ConcreteProtoA   |         | ConcreteProtoB   |
+------------------+         +------------------+
| state            |         | state            |
+------------------+         +------------------+
| + clone()        |         | + clone()        |
+------------------+         +------------------+

                ^
                |
                |
        +------------------+
        |      Client      |
        +------------------+
        | uses prototype   |
        +------------------+"""



print(__doc__)










from abc import ABC, abstractmethod
import copy

class Address:

    def __init__(self,city):
        self.city=city





class Person:

    @abstractmethod
    def copy(self):
        pass



#shallow copy
     
class User(Person):

    def __init__(self,name,age):
        self.name=name
        self.age=age
        self.address=Address("Hyderabad")
    

    def copy(self):
        new_user=User(self.name,self.age)
        new_user.address=self.address
        return new_user
    

u1=User("Rafi",27)
u2=u1.copy()


print(u1 is u2)
print(u1.name is u2.name)
u1.name="XXX"
print(u1.name ,u2.name)
u1.address.city="Mumbai"
print(u1.address.city,u2.address.city)





#deep copy
class User(Person):

    def __init__(self,name,age):
        self.name=name
        self.age=age
        self.address=Address("Hyderabad")
    

    def copy(self):
        new_user=User(self.name,self.age)
        return new_user

u1=User("Rafi",27)
u2=u1.copy()


print(u1 is u2)
print(u1.name is u2.name)
u1.name="XXX"
print(u1.name ,u2.name)
u1.address.city="Mumbai"
print(u1.address.city,u2.address.city)
