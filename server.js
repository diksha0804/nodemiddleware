// const http = require('http');
// http.createServer(function(request,response){
//     response.writeHead(200,{'Content-Type': 'Text/plain'});
//     response.end("Hello World");
// }).listen(3000)

const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 3000;
const blogModule = require('./blog_module/blog');
const practiceroute = require ("./routes/practice");
const bcrypt = require("bcrypt");
const plainPassword = "#@wereYOU";
const saltRounds = 10;

const logger = (req,res,next) => {
console.log("logging",req.url);
next();
}
const sendResponse = ( req,res,next) => {
 console.log("Response");
 res.sendStatus(200);
}

app.use("/practice",practiceroute);
app.use("/question",practiceroute);
app.use(logger);
app.use("/list",sendResponse);

app.get('/',(request,response) =>{
    console.log("You are a steady Learner");
    response.send("Hello World");
})

app.get('/list',(request,response)=> {
    const blogData = blogModule.blogList();
    console.log(blogData);
    response.send("Find the list here")
})
app.get("/list/Sandalwood",(request,response)=>{
    const blogpack = blogModule.blogitem()
    console.log(blogpack);
    response.send("you can see the movie list on the server");

})
app.get("/register" ,(request,response)=> {
// bcrypt.genSalt(saltRounds,function(err,salt)
// {
//     if(err){
//         // console.log(err);
//         response.send(401);
//     }
//     else{
//         bcrypt.hash(plainPassword ,salt, (err,hashedPwd) => {
//             if(err){
//                 response.send(401);
//             }
//             else{
//                 response.send(hashedPwd);
//             }
//         })
//     }
// })
// })
// bcrypt.hash(plainPassword,saltRounds,function(err,hashedPwd){
// if(err){
//     response.send(401);
//     }
//     else{
//         response.send(hashedPwd);
//     }
// })
// })
// app.listen(PORT,()=>{
//     console.log("Server is Running");
// });
bcrypt.hash(plainPassword,saltRounds, function(err, hashedPwd){
    let inCorrectPwd = "abc";
    if(err){
        response.send(401);
    }
    else{
        let isPasswordcorrect = bcrypt.compare(plainPassword,hashedPwd,function (err,result){
           if(err){
            // response.send(err);
            console.log(err);
           }
           else{
            console.log(result);
           }
        })
    }
})
})
app.listen(PORT,()=>{
console.log("Server is Running");
 });