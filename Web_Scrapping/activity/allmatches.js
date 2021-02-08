const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");


function getAllMatches(link){
    request(link , cb);
}

function cb(error , response , html){
    if(error == null){
        // succesfully data aa chuka hai
        processHtml(html);
    }else if(response.statusCode == "404"){
        console.log("Page not found !!");
    }else{
        console.log(error);
    }
}

function processHtml(html){
    // console.log("inside allmatches file");
    // 
    fs.writeFileSync("./allmatches.html",html);
}


// Nodejs core module.exports

//module.exports = {}

// multiple functions // variables
// module.exports.getAllMatches = getAllMatches;

// single function
module.exports = getAllMatches;