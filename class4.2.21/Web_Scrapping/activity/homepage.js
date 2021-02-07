const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");
const getAllMatches = require("./allmatches");
// hof
let path = "https://www.espncricinfo.com/series/ipl-2020-21-1210595?ex_cid=ipl:google_cpc:search:dsa_feed:msn&gclid=Cj0KCQiA0-6ABhDMARIsAFVdQv9h4zxTheJZQYHUB_eAbDSDC8QYHZfrx8YTAlPGcO-lV9_2PRQnh2caAlrCEALw_wcB";



request(path , cb )  



function cb(error , response , html){
    // fs.writeFileSync("./error.txt",error+"")
    // fs.writeFileSync("./response.txt",JSON.stringify(response)+"")
    // fs.writeFileSync("./data.html",html+"")
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
    let ch = cheerio.load(html);
    let aTag = ch(".widget-items.cta-link a");
    let link = aTag.attr("href");
    let completeLink = "https://www.espncricinfo.com"+link;
    console.log(completeLink);
    getAllMatches(completeLink);
}