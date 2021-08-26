let fs=require('fs')
let contact=fs.readFileSync('abc.txt');

fs.writeFileSync('abc.txt','im fine');
//console.log(contact+"");

fs.appendFileSync('abc.txt', "2nd line")// tp maje at a location
//fs.writeFileSync('C:\Users\Janeja kumar\Desktop\WEB DEV\wcat\new.txt',"this is new file");
fs.unlinkSync('new2.txt');

fs.writeFileSync("new2.txt","");

// directories
// to make a new directory
//fs.mkdirSync('new falder');

// to remove dir
//fs.rmdirSync('new falder');

let doesExist=fs.existsSync('abc.txt');
//console.log("abc.txt file exist",doesExist);

// statusObj of file
let statusObj=fs.lstatSync('C:\\Users\\Janeja kumar\\Desktop\\WEB DEV\\wcat');
//console.log(statusObj);
// console.log(statusObj.isFile());
// console.log(statusObj.isFile());

let fileArr=fs.readdirSync('C:\\Users\\Janeja kumar\\Desktop\\WEB DEV\\wcat');
console.log(fileArr);