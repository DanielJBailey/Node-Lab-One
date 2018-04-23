const path = require("path");
const fs = require("fs");
const request = require("request");

let chirpArray = [
    {
        "name": "Daniel Bailey",
        "key": 0,
        "time": "March 8",
        "text": "This has been one of the funnest labs to date"
    },
    {
        "name": "Daniel Bailey",
        "key": 1,
        "time": "March 7",
        "text": "Just went to @Covalence to watch their HTML/CSS Workshop. Had an awesome time helping other people starting out"
    },
    {
        "name": "Daniel Bailey",
        "key": 2,
        "time": "March 8",
        "text": "This is my third example chirp for the #1 App Chirper"
    },
    {
        "name": "Daniel Bailey",
        "key": 3,
        "time": "April 20",
        "text": "This is an example tweet for the lab"
    },
    {
        "name": "Daniel Bailey",
        "key": 3,
        "time": "April 20",
        "text": "This is another example tweet for the lab"
    },

];


let chirpPath = path.join(__dirname, "../chirps.json");

fs.writeFileSync(chirpPath, JSON.stringify(chirpArray), err => {
    console.log(err);
}); 

fs.readFile(chirpPath, {
    encoding: "UTF-8"
}, (err, chirps) => {

    console.log(chirps);

});

