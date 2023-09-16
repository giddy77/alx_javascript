const url = process.argv[2];
const request = require('request');

request.get(url, { encoding: 'utf-8' }).on('response', function (response) {
  let responseData = '';
  const id = url +'/18/';

  let count = 0;

  response.on('data', function (data) {
    responseData += data;
  });

  response.on('end', function () {
    const moviesData = JSON.parse(responseData);
    const movies = moviesData.results;

    // Iterate through the movies array and log the characters property of each movie
    movies.forEach(function (movie) {
        if (movie.characters.includes(id)) {
            count ++;
            
          }
        
    });
    console.log(count);
  });
});
