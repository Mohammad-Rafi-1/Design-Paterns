
"""
+------------------+
|    TextEditor    |  <<Originator>>
+------------------+
| - content        |
+------------------+
| + write()        |
| + save()         |
| + restore()      |
+------------------+
         |
         | creates
         v
+------------------+
|     Memento      |
+------------------+
| - state          |
+------------------+
+------------------+

         ^
         |
         | stores
         |
+------------------+
|     History      |  <<Caretaker>>
+------------------+
| - h : list       |
+------------------+
| + save()         |
| + undo()         |
+------------------+

"""

print(__doc__)
class Memento:

    def __init__(self,state):
        self.state=state
    

    # def store(self):
    #     return self.state


class TextEditor:

    def __init__(self):
        self.content=None
    
    def write(self,content):
        self.content=content
    
    def save(self):
        return Memento(self.content)
    def restore(self,memento):
        self.content= memento.state


class History:
    def __init__(self):
        self.h=[]
    def save(self,history):
        self.h.append(history)
    def undo(self):
        return self.h.pop()




t=TextEditor()
history=History()

t.write("hello world")
history.save(t.save())

t.write("Bye bye")
history.save(t.save())


print(history.undo().state)