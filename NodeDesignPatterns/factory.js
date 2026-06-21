"use strict";
let doc = `
                 +----------------------+
                 |      Client          |
                 +----------------------+
                          |
                          | uses
                          v
                 +----------------------+
                 |      Factory         |
                 +----------------------+
                 | + createProduct()    |
                 +----------------------+
                          |
                          | creates
                          v
        -----------------------------------------
        |                 |                     |
        v                 v                     v
+----------------+ +----------------+ +----------------+
| ConcreteProduct | | ConcreteProduct | | ConcreteProduct |
|       A         | |       B         | |       C         |
+----------------+ +----------------+ +----------------+
          \               |                 /
           \              |                /
            \             |               /
             v            v              v
              +----------------------+
              |    Product (interface)|
              +----------------------+
              | + operation()        |
              +----------------------+
`;
console.log(doc);
class Email {
    sent() {
        console.log("email sent ....");
    }
}
class Push {
    sent() {
        console.log("Push sent ....");
    }
}
class SMS {
    sent() {
        console.log("SMS sent ....");
    }
}
class NotificationFactory {
    static create(type) {
        if (type == "Email") {
            return new Email();
        }
        else if (type == "Push") {
            return new Push();
        }
        else if (type == "SMS") {
            return new SMS();
        }
        throw new Error("Invalid notification type");
    }
}
let client1 = NotificationFactory.create("Email");
client1.sent();
client1 = NotificationFactory.create("Push");
client1.sent();
