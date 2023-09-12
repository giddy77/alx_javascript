
const id = process.argv[2]; // Use process.argv[2] to get the ID from command line argument
const url = `https://swapi-api.alx-tools.com/api/films/${id}` 

const request = require('request');
let responseData = ''; // Initialize an empty string to accumulate response data

const response = request.get(url, { encoding: "utf-8" })
  .on('data', function(chunk) {
    responseData +=chunk; // Accumulate response data
  })
  .on('end', function() {
    const movie = JSON.parse(responseData); // Parse the accumulated data as JSON
    console.log(movie.title);
  });
