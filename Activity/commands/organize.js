let fs=require('fs');
let path=require('path');

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}

function organizeFn(srcPath){
    let contents=fs.readdirSync(srcPath);
    let organiseFolder=path.join(srcPath,"fileOrganiser");
    if(!fs.existsSync(organiseFolder)){
        fs.mkdirSync(organiseFolder);
    }
    for(let i in contents){
        let file=contents[i];
        let filePath=path.join(srcPath,file);
        if(fs.lstatSync(filePath).isFile()){
            let type=checkType(file);
            //console.log(type);
            let typeFolder=path.join(organiseFolder,type);
            if(!fs.existsSync(typeFolder)){
                fs.mkdirSync(typeFolder);
            }
            let src=path.join(srcPath,contents[i]);
            let dest=path.join(typeFolder,contents[i]);
            fs.copyFileSync(src,dest);
            //console.log(type);
        }
        
    }
    // console.log(srcPath);

}
function checkType(file){
    for(let type in types){
        for(let ext of types[type]){
            if(path.extname(file).split('.')[1]==ext){
                return type;
            }
            
        }
    }
    return "others";
}
module.exports={
    organizeFn
}
