
type AppRequest = {
    authenticated: boolean;
    role: string;
    requests_made: number;
};

abstract class Handler{
    next_handler: Handler| null=null;

    set_next(handler:Handler):Handler{
        this.next_handler=handler
        return handler

    }

    abstract handle(request:AppRequest):void
}


class Authentication extends Handler{
    handle(request:AppRequest):void{
        if(request.authenticated==true){
            console.log("Authentication passed")
            if (this.next_handler){
                this.next_handler.handle(request)
            }
            else{
                console.log("end of the chain")
            }
            
        }
        else{
            console.log("Authentication failed")
        }

    }
}





class Role extends Handler{
    handle(request:AppRequest):void{
        if(request.role==="admin"){
            console.log("Role Authienticated")
            if (this.next_handler){
                this.next_handler.handle(request)
            }
            else{
                console.log("end of the chain")
            }
            
        }
        else{
            console.log("Access denied")
        }

    }
}






class RateLimit extends Handler{
    handle(request:AppRequest):void{
        if(request.requests_made<10){
            console.log("Rate Limit passed")
            if (this.next_handler){
                this.next_handler.handle(request)
            }
            else{
                console.log("end of the chain")
            }
        }
        else{
            console.log("Rate Limit Exeeded")
        }

    }
}



let auth= new Authentication()
auth.set_next(new Role()).set_next(new RateLimit())
const request: AppRequest = {
    authenticated: true,
    role: "admin",
    requests_made: 3
};

auth.handle(request)