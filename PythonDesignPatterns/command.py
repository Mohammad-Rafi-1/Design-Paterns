"""
                    +------------------+
                    |     Client       |
                    +------------------+
                             |
                             |
                             v

                    +------------------+
                    |     Command      |  <<interface>>
                    +------------------+
                    | + execute()      |
                    +------------------+
                             ^
                             |
          +------------------+------------------+
          |                                     |
          |                                     |
+----------------------+       +----------------------+
| ConcreteCommandA    |       | ConcreteCommandB     |
+----------------------+       +----------------------+
| - receiver          |       | - receiver           |
+----------------------+       +----------------------+
| + execute()         |       | + execute()          |
+----------------------+       +----------------------+
          |                                     |
          |                                     |
          v                                     v

+----------------------+       +----------------------+
|      ReceiverA       |       |      ReceiverB       |
+----------------------+       +----------------------+
| operationA()         |       | operationB()         |
+----------------------+       +----------------------+


                    +------------------+
                    |     Invoker      |
                    +------------------+
                    | + execute(cmd)   |
                    +------------------+
                             |
                             |
                             v
                         Command


"""
print(__doc__)

from abc import ABC, abstractmethod

class Light:
    
    def light_on(self):
        print("light on")
    
    def light_off(self):
        print("light off")

class Fan:
    def start(self):
        print("Fan on")
    def stop(self):
        print("Fan off")


class AC:
    def cool_on(self):
        print("AC on")
    def cool_off(self):
        print("AC off")



class command(ABC):
    @abstractmethod
    def execute(self):
        pass



class LightOncommand(command):
    def __init__(self,light):
        self.light=light
    def execute(self):
        return self.light.light_on()

class LightOffcommand(command):
    def __init__(self,light):
        self.light=light
    def execute(self):
        return self.light.light_off()



class ACncommand(command):
    def __init__(self,ac):
        self.ac=ac
    def execute(self):
        return self.ac.cool_on()
class ACoffcommand(command):
    def __init__(self,ac):
        self.ac=ac
    def execute(self):
        return self.ac.cool_()
    


class FanOncommand(command):
    def __init__(self,fan):
        self.fan=fan
    def execute(self):
        return self.fan.start()

class FanOffcommand(command):
    def __init__(self,fan):
        self.fan=fan
    def execute(self):
        return self.fan.stop()
    



light=Light()
light_on=LightOncommand(light)
light_on.execute()
