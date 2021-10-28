# Material UI / React Weather App

[Live Page](https://michaelhtran120.github.io/MUI-React-Weather-App/)

## How to use

Can enter any city in the world and it should respond. If you would like to designate a certain state in the US, you must enter "US-(two letter state abbreviation)"

e.g. San Jose, US-CA or Portland, US-OR

## Learning Goal

I wanted to create a weather app in order to practice my React skills and practice MUI.

## OpenWeatherMap API

Since I am using a free API key, I utilize the _Current Weather Data_ API call and the _One Call_ API.

The _One Call_ API call provides current weather and forecast data, but it does not provide a location name and requires longitude and latitude coordinates for the query. In order to get location name and coordinates, I utilize the _Current Weather_ call.

[Current Weather](https://openweathermap.org/current)

[One Call](https://openweathermap.org/api/one-call-api)

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Future Possible Changes

1. Add a toggle functionality from imperial to metric
2. Add graphics/illustration to display weather type. (e.g. Cloudy, Sunny, Rain etc...)
3. Include additional data such as wind speed and humidity.
4. Make create a new layout for better UX.
5. Implement an hourly forecast

## Review

Material UI isn't as intuitive in some aspects. Customizing (CSS)certain components require a bit more digging around in order to achieve desired results.

I had a tough time adjusting the <TextField> component, but was able to achieve the result I wanted.

Handling API calls and deciphering the response data has gotten much easier since I first began coding/learning. I opted to use the fetch api over axios simply

Utilized the fetch API as I am only getting data from OpenWeatherMap API.

Still trying to determine the best way to organize my application into sub components. Since I didn't have that many states to manage, I maintain state in parent App component and passed state via props. Since state was being set via fetch() to store weather data, I did not see a need to utilize Redux or useReducer to manage state.
