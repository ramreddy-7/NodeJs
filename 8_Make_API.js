/*  1 .Make a Server   
    2 .create a header and API body (in header there is a server status code,and message)
    3 .create an API with static data
    4 .put data in another file 
*/

const http = require("http");
const data = require('./8_Make_api_code');

http.createServer((request,response)=>{
    //response.writeHead(200,{'content' : 'Application'})
    response.write(JSON.stringify(data)) ;
    response.end(); 
}).listen(5000);
