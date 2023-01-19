# Provides api endpoints that utilizes the country-state-city NPM [package]( https://www.npmjs.com/package/country-state-city)

## Endpoints

### /countries
Returns a json response of all countries in the world

### /state/countryCode
countryCode: isoCode property of a country from the /countries endpoint
Returns a json response of all states by country

### /cities/stateCode/countryCode
countryCode: isoCode property of a country from the /countries endpoint
state: isoCode property of a country from the /countries endpoint
Returns a json response of all cities by state, given state and countrycode
