// CRURD 
/*
CREATE A FILE 
READ A FILE
UPDATE A FILE
RENAME A FILE 
DELETE A FILE  */

const { isUtf8 } = require('buffer');
const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'CRUD');
const filePath = `${dirpath}/apple.txt`

fs.writeFileSync(filePath,'this is a text file');
fs.readFile(filePath,'Utf8',(err,item)=>{
    console.log(item);
fs.appendFile(filePath,' and this is appended file ',(err)=>{
    if(!err) console.log("appended file");
fs.rename(filePath,`${dirpath}/fruit.txt` , (err)=>{
    if(!err) console.log("file name is updated");
// fs.unlinkSync(`${dirpath}/fruit,txt`);
});
})
})