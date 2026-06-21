"use strict";
class Handler {
    next_handler = null;
    set_next(handler) {
        this.next_handler = handler;
        return handler;
    }
}
class Authentication extends Handler {
    handle(request) {
        if (request.authenticated == true) {
            console.log("Authentication passed");
            if (this.next_handler) {
                this.next_handler.handle(request);
            }
            else {
                console.log("end of the chain");
            }
        }
        else {
            console.log("Authentication failed");
        }
    }
}
class Role extends Handler {
    handle(request) {
        if (request.role === "admin") {
            console.log("Role Authienticated");
            if (this.next_handler) {
                this.next_handler.handle(request);
            }
            else {
                console.log("end of the chain");
            }
        }
        else {
            console.log("Access denied");
        }
    }
}
class RateLimit extends Handler {
    handle(request) {
        if (request.requests_made < 10) {
            console.log("Rate Limit passed");
            if (this.next_handler) {
                this.next_handler.handle(request);
            }
            else {
                console.log("end of the chain");
            }
        }
        else {
            console.log("Rate Limit Exeeded");
        }
    }
}
let auth = new Authentication();
auth.set_next(new Role()).set_next(new RateLimit());
const request = {
    authenticated: true,
    role: "admin",
    requests_made: 3
};
auth.handle(request);
