const request = require('request');
const episode = process.argv[2];

const filmsUrl = 'https://swapi-api.alx-tools.com/api/films';

// Make a request to fetch the films
request.get(filmsUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    } else if (response && response.statusCode === 200) {
        const filmsData = JSON.parse(body);

        // Find the film with the specified episode number
         filmsData.forEach(movie => {
            const results = filmsData.movie
        });
        const selectedFilm = results.find((film) => film.episode_id == episode);

        if (selectedFilm) {
            // Fetch and print characters from the selected film
            selectedFilm.characters.forEach((characterUrl) => {
                request.get(characterUrl, (charError, charResponse, charBody) => {
                    if (charError) {
                        console.error('Error:', charError);
                    } else if (charResponse && charResponse.statusCode === 200) {
                        const characterData = JSON.parse(charBody);
                        console.log(characterData.name);
                    }
                });
            });
        } else {
            console.log('Film not found for episode:', episode);
        }
    } else {
        console.error('HTTP request failed with status code:', response ? response.statusCode : 'unknown');
    }
});
