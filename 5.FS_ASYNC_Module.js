const {readFile,writeFile} = require('fs');
console.log("start");
readFile('./pathfolder/fs_2.txt','utf-8',(err,result)=>{
    if(err){
    console.log(err);
    return 
    }
 const first = result

 console.log(result);

 writeFile('./pathfolder/writefile3.txt',`Hello Dude ${first}`,(err,result)=>{
    if(err){
        console.log(err);
    return 
    }
    console.log("done with the task");
 })
})
console.log("starting next task");
