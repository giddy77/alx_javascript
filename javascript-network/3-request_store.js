const request = require('request');
const fs = require('fs');
const url = process.argv[2];
let filePath = process.argv[3];
request.get(url, (error, response, body) => {
    fs.writeFile(filePath, body, 'utf-8')
            console.log(filePath);
        
    });

