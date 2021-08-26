let fs=require('fs');
let path=require('path');

let inputArr=process.argv.slice(2);

let mainDir=inputArr[0];
let subDir=inputArr.slice(1);

let mainDirPath=path.join('E:/',mainDir);
if(!fs.existsSync(mainDirPath)){
    fs.mkdirSync(mainDirPath);
}

for(let i=0;i<subDir.length;i++){
    let folder=path.join(mainDirPath,subDir[i]);
    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder);
    }  
    for(let j=1;j<=3;j++){
        let file=path.join(folder,`module${j}`);
        if(!fs.existsSync(file)){
            fs.mkdirSync(file);
        }
        let data=path.join(file,'content.md');
        fs.writeFileSync(data,"surprise mf");
    }
}
