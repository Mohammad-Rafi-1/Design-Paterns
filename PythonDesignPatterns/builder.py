

"""

              +----------+
              |  Client  |
              +----------+
                    |
                    | uses
                    v
          +-------------------+
          |   UserBuilder     |
          +-------------------+
          | set_name()        |
          | set_email()       |
          | set_age()         |
          | build()           |
          +-------------------+
                    |
                    | creates
                    v
              +----------+
              |   User   |
              +----------+
              | name     |
              | email    |
              | age      |
              +----------+


"""




print(__doc__)




class User:
    
    def __init__(self,name,age,email,address=None,dob=None):
        self.name=name
        self.age=age
        self.email=email
        self.address=address
        self.dob=dob


class UserBuilder:
    def __init__(self):
        self.name=None
        self.age=None
        self.email=None
        self.address=None
        self.dob=None

    def set_name(self,name):
      self.name=name
      return self
    
    def set_age(self,age):
        self.age=age
        return self
    
    def set_email(self,email):
        self.email=email
        return self

    def set_address(self,adr):
        self.address=adr
        return self
    
    def set_dob(self,dob):
        self.dob=dob
        return self
    
    def build(self):
        return User(self.name,self.age,self.email,self.address,self.dob)
    


client=UserBuilder().set_name("Raif").set_age(27).set_email("rafi@evre.in").build()
print(client)