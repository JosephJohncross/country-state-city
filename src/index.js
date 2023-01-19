// / ./src/index.js
// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

let Country = require('country-state-city').Country;
let State = require('country-state-city').State;
let City = require('country-state-city').City;

// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.send(ads);
});

app.get('/countries/', (req, res) => {
    var countries = Country.getAllCountries()
    res.end(JSON.stringify(countries, null, 3));
})


//Defines an endpoint to return all states by country
app.get('/state/:countrycode', (req, res) => {
    var countryCode = req.params['countrycode']
    console.log(countryCode)
    var state = State.getStatesOfCountry(countryCode)
    res.end(JSON.stringify(state, null, 3));
})

//Defines an endpoint to return all states by country
app.get('/cities/:stateCode/:countryCode', (req, res) => {
    var countryCode = req.params['countryCode']
    var stateCode = req.params['stateCode']
    console.log(countryCode, stateCode)
    var state = City.getCitiesOfState(countryCode, stateCode)
    res.end(JSON.stringify(state, null, 3));
})

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});