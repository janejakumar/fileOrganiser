let helpObj=require('./commands/help');
let treeObj=require('./commands/tree');
let organizeObj=require('./commands/organize');
//const helpFn = require('./commands/help');

let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];

switch(command){
    case "help":
        helpObj.helpFn();
        break;
    
    case "tree":
        treeObj.treeFn(path);
        break;
    
    case "organiser":
        organizeObj.organizeFn(path);
        break;
    default:
        console.log("invalid input");    
}