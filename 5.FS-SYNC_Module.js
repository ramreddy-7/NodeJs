const{ readFileSync , writeFileSync} = require('fs')
console.log("start");
// Read File
const first = readFileSync('./pathfolder/fs_2.txt');
console.log(first);

const second = readFileSync('./pathfolder/path2folder/fs_1file.txt','utf-8');
console.log(second);

const three = readFileSync('three_fs.txt','utf-8');
console.log(three);

// Write File
const four = writeFileSync(
    'writefile.txt',`This file is created
    by using writeFileSync method ${first,second,three}1`,
    {flag : 'a'});
const five = writeFileSync(
    './pathfolder/writefile2.txt',`This file is created by
    using writeFileSync method ${first,second,three}`);

console.log("DOne with the task ");
console.log("start with the next one");
