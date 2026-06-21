"""
          +----------------------+
          |      Mediator        |  <<interface>>
          +----------------------+
          | +notify(sender, msg) |
          +----------+-----------+
                     ^
                     |
     +---------------+----------------+
     |                                |
+---------------------+     +----------------------+
|   ChatMediator      |     |   ConcreteMediator   |
+---------------------+     +----------------------+
| - users: List<User> |
+---------------------+
| +register(user)     |
| +notify(sender,msg) |
+---------------------+
            |
            |
            v
+----------------------+
|        User          |
+----------------------+
| - mediator           |
| - name               |
+----------------------+
| +send_message(msg)   |
| +receive_message(msg)|
+----------------------+

"""

print(__doc__)

from abc import ABC, abstractmethod


class Mediator(ABC):

    @abstractmethod
    def notify(self,message):
        pass



class ChatMediator(Mediator):

    def __init__(self):
        self.users=[]

    def user_register(self,user):
        self.users.append(user)

    def notify(self,message):
        for i in self.users:
            i.receive_message(message)


class User:

    def __init__(self,mediatior,name):
        self.mediator=mediatior
        self.name=name
    
    def send_message(self,message):
        self.mediator.notify(message)
    def receive_message(self,message):
        print(f"\"{message}\" delivered to  {self.name}")


chat_mediator=ChatMediator()


u1=User(chat_mediator,"Rafi")
u2=User(chat_mediator,"Asma")
u3=User(chat_mediator,"Nila")


chat_mediator.user_register(u1)
chat_mediator.user_register(u2)
chat_mediator.user_register(u3)


u1.send_message("Hello guys")