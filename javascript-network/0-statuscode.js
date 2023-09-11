
const url = sys.argv[2];
let result = [];

const request = require('requests');
const response = request.get(url, {encoding:"utf-8"})
.on('response',function(response){
    console.log(response.statuscode)
});