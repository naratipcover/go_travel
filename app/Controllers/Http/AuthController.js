'use strict'
const Database = use("Database");
let name ;
class AuthController {
    async login ({view,request,response}) {
        return view.render("login");
        const users = await Database.select("*").from("users")
        // .whereNot({age:20})
        // .whereBetween('age',[18,32]);
        // const name = "Ponlawat";
        // const age = 20;
        // const friends = ["Sue", "Bam", "Friend", "Fern"];
        // const address = {
        //     postcode: "10140",
        //     country: "Thailand",
        // }
        return view.render("login", { users })
    }

    loginUser({view,request,response}){
        const {username,password} =request.body
        // const profile = request.body
        // console.log(profile)
        // return view.render("login")
        return response.redirect("/login")
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

// ....................................................................
    home ({view,request,response}) {
        return view.render("home");
    }
    async forms ({view,request,response}) {
        const database = await Database.select('namepost').from("forms")
        let test = database
        let subject =database
        await Database.select('*').from("forms")
        return view.render("comment",{test,subject});
    }
   
    
    comment ({view,request,response}) {
        return view.render("comment");
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
}

module.exports = AuthController;