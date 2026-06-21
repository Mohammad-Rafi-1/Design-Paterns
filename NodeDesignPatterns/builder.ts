

let doc=`

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


`

console.log(doc)



class User{
    constructor(public name:string,public age:number,public email:string,public address?:string,public dob?:string){

        this.name=name;
        this.age=age;
        this.dob=dob;
        this.address=address;
        this.email=email;

    }
}



class UserBuilder{
    private name="";
    private age=0;
    private dob="";
    private address="";
    private email="";

    set_name(name:string):this{
        this.name=name;
        return this
    }
    set_age(age:number):this{
        this.age=age;
        return this
    }
    set_email(email:string):this{
        this.email=email;
        return this
    }
    set_dob(dob:string):this{
        this.dob=dob;
        return this
    }
    set_address(address:string):this{
        this.address=address;
        return this
    }

    build(): User{
        return new User(this.name,this.age,this.email,this.address,this.dob)
    }
}



let client = new UserBuilder().set_name("Rafi").set_age(27).set_email("rafi@evre.in")
console.log(client)