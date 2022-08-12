const request = require('request');
const API_END_POINT = require('./constants');

const breed = process.argv[2];

const fetchBreed = (breed) => {
  request(API_END_POINT + `?q=${breed}`, (err, res, body) => {
    if (err) {
      console.log(err);
      return;
    }
    if (res.statusCode !== 200) {
      console.log(`Something goes wrong! statusCode: ${res.statusCode}, message: ${res.statusMessage}`);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed ${breed} is not found!`);
      return;
    }
    console.log(data[0].description);
  });
};

fetchBreed(breed);
