const request = require('request');
const { API_END_POINT } = require('./constants');

const fetchBreedDescription = (breed, callback) => {
  request(API_END_POINT + `?q=${breed}`, (err, res, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (res.statusCode !== 200) {
      callback(`Something goes wrong! statusCode: ${res.statusCode}, message: ${res.statusMessage}`, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`Breed ${breed} is not found!`, null);
      return;
    }
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
