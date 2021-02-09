const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");

function getMatch(link){
    request(link,cb);
}

// let link="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
// request(link,cb);
function cb(error,response,data){
     getdata(data);
}

function getdata(data){
    let ch=cheerio.load(data);
    let bothinnings=ch('.card.content-block.match-scorecard-table .Collapsible');
    for(let i=0;i<bothinnings.length;i++){
        let teamname=ch(bothinnings[i]).find("h5").text();
        teamname=teamname.split("INNINGS")[0].trim();
        console.log(teamname);
        let alltrs=ch(bothinnings[i]).find(".table.batsman tbody tr");
        for(let i=0;i<alltrs.length-1;i++){
            let alltds=ch(alltrs[i]).find("td");
            // console.log(alltds);

            if(alltds.length>1){
                let batsmanname=ch(alltds[0]).text().trim();
                let dismissal=ch(alltds[1]).text().trim();
                let runs=ch(alltds[2]).text().trim();
                let balls=ch(alltds[3]).text().trim();
                let fours=ch(alltds[5]).text().trim();
                let sixes=ch(alltds[6]).text().trim();
                let sr=ch(alltds[7]).text().trim();
                console.log(`Batsman = ${batsmanname} Dismissal = ${dismissal} Runs = ${runs} Balls= ${balls} Fours = ${fours} Sixes= ${sixes} Strike Rate= ${sr}` );
            }
        }
        console.log("###########################################################################################");
    }
    console.log(" ");
    console.log("New Match");
    console.log(" ");


}

module.exports = getMatch;