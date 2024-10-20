// NPM --global command , comes with node
// npm--version


//local dependency -- use it only in this particular project
// npm i <packageName>

//global dependency -- use it in any project
// npm install -g <package name>

// package.json --Manifest File (Stores Important Info about project/package)
// manual Approach --(create Package.json in the root , create properties etc..)
// npm init (step by step , press enter to skip)
// npm init -y (everything default)

/* package-lock.json : If our project version is changed we get some bugs 
in our project thats why we use package-lock.json . In these we have 
specific versions for all the packages that are dependencies using. */ 

const o = require('lodash');

const array = [1,[2,[3,[4,[5,[6,[7]]]]]]];
const newArray = o.flattenDeep(array);

console.log(newArray);
console.log("ram reddy");