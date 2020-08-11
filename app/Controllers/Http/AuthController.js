'use strict'
const Database = use("Database");
let token
let usercurrent
class AuthController {
   
// ....................................................................

    login = ({view}) => {
        return view.render("login")
    } 
    async loginUser ({view,request,response}) {
        const{username,password} = request.body;
        const datauser = await Database
        .select("*")
        .from("registers")
        .where({ usernames:username,passwords:password});

        if(datauser.length){
          
            usercurrent=datauser ;
            return response.redirect('/home')

        }
        else{
            
            return response.redirect('/login')
        }
        return response.redirect("/login");
    }

    home ({view,request,response}) {
        return view.render("home");
    }
    comment = ({view}) => {
        return view.render("comment")
    } 
    async commentUser ({request,response}) {
        const{write_post,write_comment,date} = request.body;
        await Database.insert({write_post,write_comment,date}).into("comments");
        return response.redirect("/comment");
    }
    
    

    register = ({view}) => {
        return view.render("register")
    } 
    async registerUser ({request,response}) {
        const{usernames,passwords,confirmPassword} = request.body;
        await Database.insert({usernames,passwords,confirmPassword}).into("registers");

        return response.redirect("/login");
    }

    

    post ({view,request,response}) {
        return view.render("post");
    }

    regionNorthern({view,request,response}) {
        return view.render("regionNorthern");
    }

    regionSouthern({view,request,response}) {
        return view.render("regionSouthern");
    }

    regionCentral({view,request,response}) {
        return view.render("regionCentral");
    }

    regionIsaan({view,request,response}) {
        return view.render("regionIsaan");
    }

    loginProject({view,request,response}) {
        return view.render("loginProject");
    }

    index({view,request,response}) {
        return view.render("index");
    }

}

module.exports = AuthController;