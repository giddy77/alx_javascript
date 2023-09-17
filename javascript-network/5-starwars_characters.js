const request = require('request');
const episode = process.argv[2];

const filmsUrl = 'https://swapi-api.alx-tools.com/api/films';

// Make a request to fetch the films
request.get(filmsUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    } else if (response && response.statusCode === 200) {
        const filmsData = JSON.parse(body);

        // Iterate through filmsData to count films with the specified episode ID
        let count = 0;
        for (const film of filmsData.results) {
            if (film.episode_id == episode) {
                count++;
            }
        }

        console.log(`Number of films with episode ID ${episode}: ${count}`);
    }
});
