"""
                    ┌──────────────────────┐
                    │     Factory (ABC)    │
                    │----------------------│
                    │ +build_sky()         │
                    │ +build_enemy()       │
                    │ +build_weapon()      │
                    └──────────┬───────────┘
                               │
          ┌────────────────────┴────────────────────┐
          │                                         │
┌──────────────────────┐               ┌──────────────────────┐
│   EarthOneFactory    │               │   EarthTwoFactory    │
│----------------------│               │----------------------│
│ +build_sky()         │               │ +build_sky()         │
│ +build_enemy()       │               │ +build_enemy()       │
│ +build_weapon()      │               │ +build_weapon()      │
└──────────┬───────────┘               └──────────┬───────────┘
           │                                      │
           │                                      │
           ▼                                      ▼
   ┌──────────────────┐                 ┌──────────────────┐
   │      Sky (ABC)   │                 │      Sky (ABC)   │
   └────────┬─────────┘                 └────────┬─────────┘
            │                                    │
   ┌────────┴────────┐                  ┌────────┴────────┐
   │                 │                  │                 │
EarthOneSky     EarthTwoSky

   ┌──────────────────┐                 ┌──────────────────┐
   │     Enemy (ABC)  │                 │     Enemy (ABC)  │
   └────────┬─────────┘                 └────────┬─────────┘
            │                                    │
   ┌────────┴────────┐                  ┌────────┴────────┐
   │                 │                  │                 │
EarthOneEnemy   EarthTwoEnemy

   ┌──────────────────┐                 ┌──────────────────┐
   │    Weapon (ABC)  │                 │    Weapon (ABC)  │
   └────────┬─────────┘                 └────────┬─────────┘
            │                                    │
   ┌────────┴────────┐                  ┌────────┴────────┐
   │                 │                  │                 │
EarthOneWeapon  EarthTwoWeapon


"""

print(__doc__)













from abc import ABC, abstractmethod



class Enemy(ABC):


    @abstractmethod
    def create(self):
        pass


class Weapon(ABC):

    @abstractmethod
    def create(self):
        pass


class Sky(ABC):

    @abstractmethod
    def create(self):
        pass


#build Earth and other dimensional one

class EarthOneEnemy(Enemy):

    def create(self):
        print("Earth-1 Enemy ready")

class EarthTwoEnemy(Enemy):
    def create(self):
        print("Earth-2 Enemy ready ")


class EarthOneWeapon(Weapon):
    
    def create(self):
        print("Earth-1 weapons are ready")


class EarthTwoWeapon(Weapon):
    
    def create(self):
        print("Earth-2 weapons are ready")


class EarthOneSky(Sky):

    def create(self):
        print("Earth-1 sky is ready")


class EarthTwoSky(Sky):

    def create(self):
        print("Earth-2 sky is ready")



class Factory(ABC):

    @abstractmethod
    def build_sky(self):
        pass

    @abstractmethod
    def build_enemy(self):
        pass


    @abstractmethod
    def build_weapon(self):
        pass


class EarthOneFactory(Factory):

    def build_enemy(self):
        return EarthOneEnemy()
    
    def build_sky(self):
        return EarthOneSky()
    
    def build_weapon(self):
        return EarthOneWeapon()


class EarthTwoFactory(Factory):

    def build_enemy(self):
        return EarthTwoEnemy()
    
    def build_sky(self):
        return EarthTwoSky()
    
    def build_weapon(self):
        return EarthTwoWeapon()
    



#client


def create_world(factory):
    factory.build_sky().create()
    factory.build_enemy().create()
    factory.build_weapon().create()


earthOne=EarthOneFactory()
earthTwo=EarthTwoFactory()


create_world(earthOne)
create_world(earthTwo)
