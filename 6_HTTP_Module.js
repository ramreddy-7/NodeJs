const http = require("http");

// const server  = http.createServer((request,response)=>{
//     response.write("hellooo")
//     response.end()
// })
// server.listen(5000);
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("Hello Bro....Welcome to My Server");
    }
    return res
    if(req.url==="/u"){
        res.end("Hello dude this is about section");
    }
    return res
    res.end(`<h1>OOPS.....<h1>
       <h2> You Came across a wrong url....<h2>
        <p>click to go back home page..<p>
        <a href = "/"> HOME PAGE </a>`)
})
server.listen(5000);
//console.log(server);