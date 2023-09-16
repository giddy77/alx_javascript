const request = require('request');
const fs = require('fs');
const url = process.argv[2];
let filePath = process.argv[3];
request.get(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    }
    fs.writeFile(filePath, body, 'utf-8', (writeError) => {
        if (writeError) {
            console.error('Error writing to file:', writeError);
        } else {
            console.log(`Webpage content successfully saved to ${filePath}`);
        }
    });
});
