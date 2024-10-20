const path =  require("path");

console.log("iam ram", path.sep,"reddy"); // It seperates with the \

const filePath = path.join('pathfolder','path2folder','pathfile');
console.log(filePath); //     pathfolder\path2folder\pathfile

const base = path.basename(filePath); 
console.log(base);  //pathfile

const absolute = path.resolve(__dirname,'pathfolder','path2folder','pathfile');
console.log(absolute);
