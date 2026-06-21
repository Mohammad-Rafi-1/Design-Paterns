
"""
                +----------------------+
                |       Context        |
                |----------------------|
                | state: State        |
                |----------------------|
                | request()           |
                +----------+----------+
                           |
                           | delegates
                           v
        +-------------------------------+
        |          State (Interface)    |
        |-------------------------------|
        | handle(context)              |
        +---------------+---------------+
                        |
        +---------------+-------------------+
        |               |                   |
        v               v                   v
+----------------+ +----------------+ +----------------+
| ConcreteStateA | | ConcreteStateB | | ConcreteStateC |
|----------------| |----------------| |----------------|
| handle()       | | handle()       | | handle()       |
| (changes state)| | (changes state)| | (changes state)|
+----------------+ +----------------+ +----------------+


"""

print(__doc__)

from abc import ABC, abstractmethod


class state(ABC):
    @abstractmethod
    def press_button(self,obj):
        pass

class Offstate(state):

    def press_button(self,fan):
        print("Fan turned ON")
        fan.state=Onstate()

class Onstate(state):
    def press_button(self,fan):
        print("Fan turned off")
        fan.state=Offstate()


class Fan:
    def __init__(self):
        self.state=Offstate()

    def press_button(self):
        self.state.press_button(self)


fan = Fan()

fan.press_button()
fan.press_button()
fan.press_button()