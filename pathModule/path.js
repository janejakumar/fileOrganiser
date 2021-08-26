let path=require('path');       // importing path module in nodejs
let fs=require('fs');           // importing fs module

let inputArr=process.argv.slice(2);

let fileName=inputArr[0];
let content=inputArr[1];

// console.log(fileName);
// console.log(content);


 
let srcPath='C:/Users/Janeja kumar/Desktop/WEB DEV/fs/a.txt';
let desPath='C:/Users/Janeja kumar/Desktop/WEB DEV/FileOrganiser/pathModule/abc2.txt';

// let tobeCopied=path.basename(srcPath);
// let dest=path.join('C:\Users\Janeja kumar\Desktop\WEB DEV\FileOrganiser',tobeCopied);

fs.copyFileSync(srcPath,desPath);

