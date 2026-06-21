"""

┌─────────────────────────┐
│       Singleton         │
├─────────────────────────┤
│ - static instance       │
├─────────────────────────┤
│ + getInstance()         │
└───────────┬─────────────┘
            │
            │ creates once
            │
            ▼
┌─────────────────────────┐
│     Singleton Obj       │
├─────────────────────────┤
│ createdAt               │
│ other properties...     │
└─────────────────────────┘

new Singleton()
    |
    ├─ first call → create object → store in Singleton.instance
    |
    └─ later calls → constructor returns existing instance

"""


print(__doc__)


# Singleton using new function

class Singleton:
    instance=None
    intialization=False

    def __new__(cls):
        if(cls.instance is None):
            cls.instance=super().__new__(cls)
            
            return cls.instance
        return cls.instance
    
    def __init__(self):
        if self.intialization:
            return
        self.data="data"
        self.intialization=True



a=Singleton()
b=Singleton()
print(a is b)


# Singleton Lazy initialization


class Singleton:

    instance =None

    @staticmethod
    def getInstance():

        if Singleton.instance ==None:
            Singleton.instance = Singleton()
        return Singleton.instance
    


a = Singleton.getInstance()
b = Singleton.getInstance()
print(a is b)



#thread saftey singleton

import threading

class Singleton:

    instance =None
    lock=threading.Lock()

    def __init__(self):
        pass

    @staticmethod
    def getInstance():
        with Singleton.lock:
            if Singleton.instance ==None:
                Singleton.instance = Singleton()
        return Singleton.instance
    

a = Singleton.getInstance()
b = Singleton.getInstance()
print(a is b)