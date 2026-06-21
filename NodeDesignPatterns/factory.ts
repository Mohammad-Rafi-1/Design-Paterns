let doc=`
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
`

console.log(doc)

// class Notification{
//     sent(){
//         throw new Error("Sent function must be implemented")

//         }  
//      }


// class Email extends Notification{

// }

// a=new Email()





//interface using typescript



interface NotificationService{
    sent(): void;
}



class Email implements NotificationService{

    sent():void{
        console.log("email sent ....");
    }

}




class Push implements NotificationService{

    sent():void{
        console.log("Push sent ....")
    }

}




class SMS implements NotificationService{

    sent():void{
        console.log("SMS sent ....")
    }

}


class NotificationFactory{
    static create(type: string): NotificationService {

        if(type=="Email"){

            return new Email();
        }
        else if(type=="Push"){
            return new Push()

        }
        else if(type=="SMS"){

            return new SMS()

        }
        throw new Error("Invalid notification type");
    }
}




let client1= NotificationFactory.create("Email")
client1.sent()

client1= NotificationFactory.create("Push")
client1.sent()