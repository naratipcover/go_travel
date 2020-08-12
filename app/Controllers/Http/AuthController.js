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
    register = ({view}) => {
        return view.render("register")
    }
    // async = *
    async registerUser({request,response}){
       const{email,password,username} = request.body;
       await Database.from("users").insert({email,password,username});
    //    await Database.insert({email,password}).into("users")
    //    yield
    //    await = yield 
       return response.redirect("/login");
         

   }
    async form({request,response}){
       const {namepost,nameAddress,country,subject} = request.body

       console.log(request)
        await Database.table('forms').insert({ namepost,nameAddress,country,subject})

        return response.redirect("/comment")
   }
    async forms ({view,request,response}) {
        const database = await Database.select('namepost').from("forms")
        const data =await Database.select('*').from('forms')
      
        let test = database
        let subject =data
         
        return view.render("comment",{test,subject});
    }
   
    
    comment ({view,request,response}) {
        return view.render("comment");
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