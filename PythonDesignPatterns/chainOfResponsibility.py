

from abc import ABC, abstractmethod

class Handler(ABC):

    def __init__(self):
        self.next_handler=None

    def set_next(self,handler):
        self.next_handler=handler
        return handler
    @abstractmethod
    def handle(self):
        pass


class Authentication_check(Handler):

    def handle(self,request):
        if request["authenticated"]==True:
            print("Authentication Passed")
            self.next_handler.handle(request)
        else:
            print("Authentication Failed")


class Role_check(Handler):

    def handle(self,request):
        if request["role"]=="admin":
            print("Access granted")
            self.next_handler.handle(request)
        else:
            print("Access denied")




class RateLimit_check(Handler):

    def handle(self,request):
        if request["requests_made"]<True:
            print("Rate Limit passed")
            self.next_handler.handle(request)
        else:
            print("Rate Limit Exceeded")



request = {"authenticated": True, "role": "admin", "requests_made": 3}


auth=Authentication_check()
auth.set_next(Role_check()).set_next(RateLimit_check())

auth.handle(request)

