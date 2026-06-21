let doc=`
                 +------------------+
                 |    Prototype     |
                 +------------------+
                 | + clone()        |
                 +------------------+
                          ^
                          |
          ---------------------------------
          |                               |
          |                               |
+------------------+         +------------------+
| ConcreteProtoA   |         | ConcreteProtoB   |
+------------------+         +------------------+
| state            |         | state            |
+------------------+         +------------------+
| + clone()        |         | + clone()        |
+------------------+         +------------------+

                        ^
                        |
                        |
                +------------------+
                |      Client      |
                +------------------+
                | uses prototype   |
                +------------------+`

console.log(doc)

interface Person{
    clone(): Person
}

class Address{
    public location:string;
    constructor(){
     this.location="Hyderabad"
    }
}


class User implements Person{
    name:string;
    age:number;
    email:string;
    obj:Address;
    constructor(name:string,age:number,email:string){
        this.name=name;
        this.age=age;
        this.email=email
        this.obj=new Address()

    }  

    clone(): User{

        let new_user=new User(this.name,this.age,this.email);
        new_user.obj=this.obj;
        return new_user
    }

}



let u1=new User("rafi",27,"evre.in")
let u2=u1.clone()

console.log(u1 === u2)
console.log(u1.name === u2.name)
console.log(u1.obj===u2.obj)



//deep copy

u1=new User("rafi",27,"evre.in")
u2=structuredClone(u1)

console.log(u1 === u2)
console.log(u1.name === u2.name)
console.log(u1.obj===u2.obj)

