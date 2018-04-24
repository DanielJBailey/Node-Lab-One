// dependencies
const path = require("path");
const fs = require("fs");
const download = require('download-file');
const request = require("request");


// declare array variable
let redditArray = [];

//dclare variable for datapath
let dataPath = path.join(__dirname, 'popular-articles.json');
let mediaPath = path.join(__dirname, '/downloads/');

//request popular articles from Reddit
request('https://reddit.com/r/popular.json', (err, res, body) => {

    //Declare reddit data array
    let redditData = [];

    //log errors
    if (err) console.log(err);

    //push articles into array after parsing data
    let id = 1;
    redditData = JSON.parse(body).data.children.forEach(item => {
        redditArray.push({
            "id": id,
            "title": item.data.title,
            "author": item.data.author,
            "url": item.data.url,
            "type": item.data.post_hint
        });

        //declare options for downloading media
        let options = {
            directory: mediaPath,
            filename: id + path.extname(item.data.url)
        }
        //test for media
        if (item.data.post_hint == 'image') {
            download(item.data.url, options, function (err) {
                if (err) console.log(err);
            });
        }

        id++;
    });

    //write redditArray to file
    fs.writeFileSync(dataPath, JSON.stringify(redditArray), err => {
        if (err) console.log(err);
    });

});