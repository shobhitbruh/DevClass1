//fs => functions fs X
const fs = require("fs");
const path = require("path");

const downloadsPath = "../foldersorting";
// loop on all files


let contentOfDownloads = fs.readdirSync(downloadsPath);

console.log(contentOfDownloads);


for(let i=0 ; i<contentOfDownloads.length ; i++){
    sortFolder(contentOfDownloads[i]);
}

function checkFolder(ext){
    if(ext == "doc" || ext == "pdf" || ext == "txt"){
        // check Documents Folder
        //"./Downloads/Documents"
        let folderPath = downloadsPath+"/Documents"
        return fs.existsSync(folderPath);
    }
    else if(ext == "jpeg" || ext == "jpg" || ext == "png"){
        // check Images
        let folderPath = downloadsPath+"/Images"
        return fs.existsSync(folderPath);
    }
    else if(ext == "mkv" || ext == "mp4"){
        // check Videos
        let folderPath = downloadsPath+"/Videos"
        return fs.existsSync(folderPath);
    }else if(ext=="mp3"){
        let folderPath=downloadsPath+"/Music"
        return fs.existsSync(folderPath);
    }
}

function createFolder(ext){
    // console.log("inside createFolder");
    if(ext == "doc" || ext == "pdf" || ext == "txt"){
        let folderPath = downloadsPath+"/Documents"
        console.log(folderPath);
        //fs.mkdirSync-->new Folder
        fs.mkdirSync(folderPath);
    }
    else if(ext == "jpeg" || ext == "jpg" || ext == "png"){
        let folderPath = downloadsPath+"/Images"
        fs.mkdirSync(folderPath);
    }
    else if(ext == "mkv" || ext == "mp4"){
        let folderPath = downloadsPath+"/Videos"
        fs.mkdirSync(folderPath);
    }else if(ext=="mp3"){
        let folderPath=downloadsPath+"/Music"
        fs.mkdirSync(folderPath)
    }
}

function moveFile(file , ext){
    if(ext == "doc" || ext == "pdf" || ext == "txt"||ext=="xls"||ext=="ppt"){
        let sourceFile = `${downloadsPath}/${file}`;
        let destinationFile = `${downloadsPath}/Documents/${file}`;
        fs.copyFileSync( sourceFile  , destinationFile );
        fs.unlinkSync(sourceFile);
    }
    else if(ext == "jpeg" || ext == "jpg" || ext == "png"){
        let sourceFile = `${downloadsPath}/${file}`;
        let destinationFile = `${downloadsPath}/Images/${file}`;
        fs.copyFileSync( sourceFile  , destinationFile );
        fs.unlinkSync(sourceFile);
    }
    else if(ext == "mkv" || ext == "mp4"){
        let sourceFile = `${downloadsPath}/${file}`;
        let destinationFile = `${downloadsPath}/Videos/${file}`;
        fs.copyFileSync( sourceFile  , destinationFile );
        fs.unlinkSync(sourceFile);
    }else if(ext == "mp3"){
        let sourceFile = `${downloadsPath}/${file}`;
        let destinationFile = `${downloadsPath}/Music/${file}`;
        fs.copyFileSync( sourceFile  , destinationFile );
        fs.unlinkSync(sourceFile);
    }
}

function sortFolder(file){
    // .jpg , .mp4 , .mkv , .vid
    //  getExtensionName => extension
    // extension => .doc
    let extension = path.extname(file).substring(1);

    let isFolderExist = checkFolder(extension);
    if(isFolderExist){ 
        moveFile(file , extension);
    }
    else{
        createFolder(extension);
        moveFile(file , extension);
    }
}