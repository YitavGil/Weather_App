const path = require('path');
const express = require('express');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 9000;

app.use(cors())

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');


// Setup static directory to serve
app.use(express.static(publicDirectoryPath));


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!',
        });
    }

    geocode(
        req.query.address,
        (error, { latitude, longitude, location } = {}) => {
            if (error) {
                return res.send({ error });
            }

            forecast(latitude, longitude, (errorForecast, forecastData) => {
                if (errorForecast) {
                    return res.send({ errorForecast });
                }

                res.send({
                    forecast: forecastData,
                    location,
                    address: req.query.address,
                });
            });
        }
    );
});

// app.post('/weather', (req, res) => {
//     let {adress} = req.body
//     console.log(adress);
// })


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Help article not found.',
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.',
    });
});

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});
