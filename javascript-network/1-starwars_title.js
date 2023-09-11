let  id = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/{id}'

const request = require('request')

const response = request.get(url,(error, body, code)=>{
    const body_json = JSON.parse(response.results);

    const body_title = body_json.forEach( function(title){
        console.log(body_title.title);
    })
})