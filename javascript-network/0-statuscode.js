
const url = process.argv[2];
let result = [];

const request = require('request');
const response = request.get(url, {encoding:"utf-8"})
.on('response',function(response){
    console.log('code: ',response.statusCode)
});