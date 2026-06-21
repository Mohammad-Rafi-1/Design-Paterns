"""
                 +----------------------+
                 |      Client          |
                 +----------------------+
                          |
                          | uses
                          v
                 +----------------------+
                 |      Factory         |
                 +----------------------+
                 | + createProduct()    |
                 +----------------------+
                          |
                          | creates
                          v
        -----------------------------------------
        |                 |                     |
        v                 v                     v
+----------------+ +----------------+ +----------------+
| ConcreteProduct | | ConcreteProduct | | ConcreteProduct |
|       A         | |       B         | |       C         |
+----------------+ +----------------+ +----------------+
          \               |                 /
           \              |                /
            \             |               /
             v            v              v
              +----------------------+
              |    Product (interface)|
              +----------------------+
              | + operation()        |
              +----------------------+
"""


print(__doc__)


from abc import ABC, abstractmethod

class Notification(ABC):

    @abstractmethod
    def sent():
        pass




class EmailService(Notification):

    def sent(self):
        print("Email sent....")    



class SmsService(Notification):

    def sent(self):
        print("SMS sent....")   




class PushService(Notification):

    def sent(self):
        print("Push sent....")   



#create Factory


class NotificationFactory:

    @staticmethod
    def create(type):
        if type=="email":
            return EmailService()
        if type=="Push":
            return PushService()
        if type=="SMS":
            return SmsService()



client1=NotificationFactory.create("email")
client1.sent()


client2=NotificationFactory.create("Push")
client2.sent()