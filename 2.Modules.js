// Node uses a CommonJS Libraray . and Every file is a module(by default)..
// Modules --> Encapsulated code (Only share Mimimum)

/*  Here for example I created  2 other files and I am encapsulate(adding) that
    files with this file. In that 2 files I write some code and 
    Iam using "module.exports"  for that file and " require " for this file 
    which means Iam exporting that file to this file */

const names = require("./2.Modules-1file");  
const message = require("./2.Modules-2file");

//Here Iam using require in this file without using "module.exports" in other file
//This is Because that file code contains in function . It can access directly.
require("./2.Modules-3-mindgranade");

  message.SayHi("Ram Reddy");
  message.SayHi(names.firstName);
  message.SayHi(names.secondName);
