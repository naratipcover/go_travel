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
    }0

   async home ({view,request,response}) {
        const test = await Database.select('*').from('forms')
        const item =await Database.select('*').from('forms')
        return view.render("home", { test,item });
    
    }
    async comment ({view,request,response}) {
        const test = await Database.select('namepost').from('forms')
        const item =await Database.select('*').from('forms')
        const user =await Database.select('name').from('commentposts')
        const com =await Database.select('*').from('commentposts')
        return view.render("comment", { test,item,user,com });
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
    async createPost({request,response}){
       const {namepost,country,subject} = request.body

       console.log(request)
        await Database.table('forms').insert({namepost,country,subject})
        return response.redirect("/comment")
   }
    async forms ({view,request,response}) {
        
        return view.render("comment")
    }
      
    
    async crateComment({request,response}){
        const {name,comment} = request.body
         await Database.table('commentposts').insert({name,comment})
 
         return response.redirect("/comment")
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