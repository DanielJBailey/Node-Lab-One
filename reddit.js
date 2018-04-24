// dependencies
const path = require("path");
const fs = require("fs");
const request = require("request");

// declare array variable
let redditArray = [];

//dclare variable for datapath
let dataPath = path.join(__dirname, 'popular-articles.json');

//request popular articles from Reddit
request('https://reddit.com/r/popular.json', (err, res, body) => {
//Declare reddit data array
let redditData = [];
//log errors
if(err) console.log(err);

//push articles into array after parsing data
redditData = JSON.parse(body).data.children.forEach(item => {
        redditArray.push({
            "title": item.data.title,
            "author": item.data.author,
            "url": item.data.url
        });
});

// console.log(redditArray);

//write redditArray to file
fs.writeFileSync(dataPath, JSON.stringify(redditArray), err => {
    if(err) console.log(err);
});

});