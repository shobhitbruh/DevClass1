const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");
const getMatch = require("./match");


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
    let ch =cheerio.load(html);
    let alltags=ch('a[data-hover="Scorecard"]');
    for(let i=0;i<alltags.length;i++){
        let link=alltags[i].attribs.href;
        let completeLink = "https://www.espncricinfo.com"+link;
        // console.log(completeLink);
        getMatch(completeLink);
        
    }
}


// Nodejs core module.exports

//module.exports = {}

// multiple functions // variables
// module.exports.getAllMatches = getAllMatches;

// single function
module.exports = getAllMatches;