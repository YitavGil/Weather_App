const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url =
        'http://api.weatherstack.com/current?access_key=57544947ac948939da9e83f838c8dfd6&query=' +
        latitude +
        ',' +
        longitude +
        '&units=m';

    console.log(url);

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (response.body.error) {
            callback('Unable to find location', undefined);
        } else {
            const {
                weather_descriptions,
                temperature,
                precip,
                feelslike,
                humidity,
            } = response.body.current;

            callback(
                undefined,
                `${
                    weather_descriptions[0]
                }. It is currently ${temperature}${String.fromCharCode(
                    176
                )} degrees out. It feels like ${feelslike}${String.fromCharCode(
                    176
                )} degrees out. There is a ${precip}% chance of rain. The humidity is ${humidity}%.`
            );
        }
    });
};

module.exports = forecast;
// const url =
//     'http://api.weatherstack.com/current?access_key=57544947ac948939da9e83f838c8dfd6&query=Jerusalem';

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!');
//     } else if (response.body.error) {
//         console.log('Unable to find location');
//         console.error(response.body.error.info);
//     } else {
//         const data = JSON.parse(response.body);
//         // console.log(data.current);
//         console.log(
//             `It is currently ${data.current.temperature}${String.fromCharCode(
//                 176
//             )} degrees out. There is a ${data.current.precip}% chance of rain.`
//         );
//     }
// });
