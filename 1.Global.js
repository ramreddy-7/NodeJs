//Globals  --> No window in node js like js it has a global variable..

// 1 . __dirname --> path to current directory..
// 2 . __filename -> filename
// 3 . require   --> function to use modules (common Js).
// 4 . module    --> info about current module(file)
// 5 . process   --> info about environment where the program is being excecuted.

setTimeout(()=>{
    console.log("hello world")
},5000);

setInterval(()=>{
    console.log("hello")
},5000);   // it prints in a loop until we stop