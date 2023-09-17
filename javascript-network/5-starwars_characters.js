const request = require('request');
const episode = process.argv[2];

const filmsUrl = 'https://swapi-api.alx-tools.com/api/films';

// Make a request to fetch the films
// request.get(filmsUrl, (error, response, body) => {
//     if (error) {
//         console.error('Error:', error);
//     } else if (response && response.statusCode === 200) {
//         const filmsData = JSON.parse(body);

//         // Initialize an object to count occurrences based on episode_id
//         const episodeCounts = {};

//         // Iterate through filmsData.results
//         for (const film of filmsData.results) {
//             if (film.episode_id == episode && film.completedtasks === true) {
//                 // If episode_id matches and completedtasks is true
//                 // Increment the count for that episode_id
//                 if (episodeCounts[film.episode_id]) {
//                     episodeCounts[film.episode_id]++;
//                 } else {
//                     episodeCounts[film.episode_id] = 1;
//                 }
//             }
//         }

//         console.log(`Count of films with episode ID ${episode} and completedtasks set to true:`);
//         console.log(episodeCounts);
//     }
// });
