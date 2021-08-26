let fs=require('fs');
let path=require('path');

function treeFn(srcPath){
    
    let baseName=path.basename(srcPath);
    console.log(baseName);
    let content=fs.readdirSync(srcPath);
    for(let i in content){
        let contentPath=path.join(srcPath,content[i]);
        if(fs.lstatSync(contentPath).isDirectory()){
            let newsrcPath=path.join(srcPath,content[i]);
            treeFn(newsrcPath);
        }
        console.log('   └──'+content[i]);
    }
    //console.log(content);
}

module.exports={
    treeFn
}