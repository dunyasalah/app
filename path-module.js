const path =require ('path');

console.log(path.sep)          //specific separator

const filePath = path.join('/content', 'subFolder','test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolutePath = path.resolve(__dirname,'content','sunfolder','test.txt');
console.log(absolutePath);
