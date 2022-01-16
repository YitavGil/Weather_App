const request = require('postman-request');

const geocode = (address, callback) => {
    const url =
        'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
        encodeURIComponent(address) +
        '.json?access_token=pk.eyJ1IjoiY2ZzZHZzZCIsImEiOiJja3k4cjhlczUxaHlkMnhvajRtMTFxcTQ5In0.cPp1Fl6CEptNTTgLjIhbjw&limit=1';

    //by setting the json: true, we are telling the request module to parse the
    //response body as JSON and pass it to the callback function.
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            //this sets the error property of the callback function to the error
            //and the data to undefined.
            callback('Unable to connect to location services!', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name,
            });
        }
    });
};

module.exports = geocode;

// const geocodeURL =
//     'https://api.mapbox.com/geocoding/v5/mapbox.places/Beer%20Sheba.json?access_token=pk.eyJ1IjoiY2ZzZHZzZCIsImEiOiJja3k4cjhlczUxaHlkMnhvajRtMTFxcTQ5In0.cPp1Fl6CEptNTTgLjIhbjw&limit=1';

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!');
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.');
//     } else {
//         const latitude = response.body.features[0].center[0];
//         const longitude = response.body.features[0].center[1];
//         console.log(latitude, longitude);
//     }
// });
