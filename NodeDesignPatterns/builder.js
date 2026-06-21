"use strict";
let doc = `

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


`;
console.log(doc);
class User {
    name;
    age;
    email;
    address;
    dob;
    constructor(name, age, email, address, dob) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
        this.dob = dob;
        this.name = name;
        this.age = age;
        this.dob = dob;
        this.address = address;
        this.email = email;
    }
}
class UserBuilder {
    name = "";
    age = 0;
    dob = "";
    address = "";
    email = "";
    set_name(name) {
        this.name = name;
        return this;
    }
    set_age(age) {
        this.age = age;
        return this;
    }
    set_email(email) {
        this.email = email;
        return this;
    }
    set_dob(dob) {
        this.dob = dob;
        return this;
    }
    set_address(address) {
        this.address = address;
        return this;
    }
    build() {
        return new User(this.name, this.age, this.email, this.address, this.dob);
    }
}
let client = new UserBuilder().set_name("Rafi").set_age(27).set_email("rafi@evre.in");
console.log(client);
