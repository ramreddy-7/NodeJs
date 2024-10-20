/* 1.set input from command line
   2.create file with input
   3.delete file with input

   process is a big object in node js it consists almost all properties
*/

console.log(process.argv[3])

// It prints the whatever input we give in terminal it will also prints an 
// in the array.

//2.create file with input

  const fs = require('fs');

const input = process.argv;
fs.writeFileSync(input[2],input[3]);

//in input :[ node || 8_Make_API.js || 8_creating_With_terminal.txt || hello ]
//              0          1                    2                      3

//text file created with index no 2 , and wtritten text in index 3 .

// 3.create or delete files with input

const file = require('fs')
const inputt = process.argv;

if(inputt[2]=="add"){
    file.writeFileSync(input[3],input[4]);
}
else if(inputt[2]=="delete"){
    file.unlinkSync(input[3]);
}
else{
    console.log("nothingg happpende");
}