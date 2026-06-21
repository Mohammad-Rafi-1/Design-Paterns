"use strict";
let doc = `

          +----------------------+
          |      Mediator        |  <<interface>>
          +----------------------+
          | +notify(sender, msg) |
          +----------+-----------+
                     ^
                     |
     +---------------+----------------+
     |                                |
+---------------------+     +----------------------+
|   ChatMediator      |     |   ConcreteMediator   |
+---------------------+     +----------------------+
| - users: List<User> |
+---------------------+
| +register(user)     |
| +notify(sender,msg) |
+---------------------+
            |
            |
            v
+----------------------+
|        User          |
+----------------------+
| - mediator           |
| - name               |
+----------------------+
| +send_message(msg)   |
| +receive_message(msg)|
+----------------------+

`;
console.log(doc);
class ChatMediator {
    users = [];
    userRegister(user) {
        this.users.push(user);
    }
    notify(message) {
        for (const user of this.users) {
            user.receiveMessage(message);
        }
    }
}
class User {
    mediator;
    name;
    constructor(mediator, name) {
        this.mediator = mediator;
        this.name = name;
    }
    sendMessage(message) {
        this.mediator.notify(message);
    }
    receiveMessage(message) {
        console.log(`"${message}" delivered to ${this.name}`);
    }
}
const chatMediator = new ChatMediator();
const u1 = new User(chatMediator, "Rafi");
const u2 = new User(chatMediator, "Asma");
const u3 = new User(chatMediator, "Nila");
chatMediator.userRegister(u1);
chatMediator.userRegister(u2);
chatMediator.userRegister(u3);
u1.sendMessage("Hello guys");
