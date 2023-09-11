const { on } = require('events');
const { url } = require('inspector');
const request = require('request');

const url = sys.argv[1];
let result = [];
response = request.get(url,{ encoding : "utf-8"})
.on('data',data => {result.push(data)})
.on('complete',()=>{console.log('data')});
