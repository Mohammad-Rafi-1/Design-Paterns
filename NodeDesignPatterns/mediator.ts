

let doc=`

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

`

console.log(doc)

interface Mediator {
  notify(message: string): void;
}

class ChatMediator implements Mediator {
  private users: User[] = [];

  userRegister(user: User): void {
    this.users.push(user);
  }

  notify(message: string): void {
    for (const user of this.users) {
      user.receiveMessage(message);
    }
  }
}


class User {
  private mediator: Mediator;
  private name: string;

  constructor(mediator: Mediator, name: string) {
    this.mediator = mediator;
    this.name = name;
  }

  sendMessage(message: string): void {
    this.mediator.notify(message);
  }

  receiveMessage(message: string): void {
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