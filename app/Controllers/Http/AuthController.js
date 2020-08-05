'use strict'

class AuthController {
    login ({view,request,response}){
        const name = "Naratip"
        const age = 20;
        const friends= ["new","ko","han"];
        const address = {
            postcode:"10104",
            country: "Thailand" ,
        };
        return view.render("login",{name,age,friends,address})
    };

    register ({ view} ){
        return view.render("register");
    }
}

module.exports = AuthController
