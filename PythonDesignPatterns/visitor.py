
"""
                    +------------------+
                    |     Visitor      |
                    +------------------+
                    | +visitA(A)       |
                    | +visitB(B)       |
                    +--------+---------+
                             ^
                             |
                +------------+------------+
                |                         |
    +-------------------+     +-------------------+
    | ConcreteVisitor1  |     | ConcreteVisitor2  |
    +-------------------+     +-------------------+
    | visitA()          |     | visitA()          |
    | visitB()          |     | visitB()          |
    +-------------------+     +-------------------+


                    +------------------+
                    |     Element      |
                    +------------------+
                    | +accept(v)       |
                    +--------+---------+
                             ^
                             |
                +------------+------------+
                |                         |
       +----------------+      +----------------+
       | ConcreteA      |      | ConcreteB      |
       +----------------+      +----------------+
       | accept(v)      |      | accept(v)      |
       +-------+--------+      +-------+--------+
               |                       |
               | calls                 | calls
               v                       v

        visitor.visitA(this)    visitor.visitB(this)

"""
print(__doc__)

from abc import ABC,abstractmethod


class Interface(ABC):

    @abstractmethod
    def accept(self):
        pass




class TextFile(Interface):
    def __init__(self,name,size):
        self.name=name
        self.size=size

    def accept(self,visitor):

        visitor.visit_file(self.name,self.size)


class ImageFile(Interface):
    def __init__(self,name,resolution,size):
        self.name=name
        self.size=size
        self.resolution=resolution

    def accept(self,visitor):

        visitor.visit_image(self.name,self.resolution,self.size)


class VideoFile(Interface):
    def __init__(self,name,duration,size):
        self.name=name
        self.size=size
        self.duration=duration

    def accept(self,visitor):

        visitor.visit_video(self.name,self.duration,self.size)


class CompressionVisitor:

    def visit_file(self,name,size):
        print("File compressed to 50%")
    
    def visit_image(self,name,resolution,size):
        print("Image compressed to 30%")
    
    def visit_video(self,name,duration,size):
        print("Video compressed to 10%")

files = [
    TextFile("doc.txt", 100),
    ImageFile("img.png", "1080p", 500),
    VideoFile("movie.mp4", "2hr", 2000)
]

visitor = CompressionVisitor()

for f in files:
    f.accept(visitor)