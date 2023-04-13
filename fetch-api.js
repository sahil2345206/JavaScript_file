


// const token = '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';
// const username = 'sahil2345206';
// const url = `https://api.github.com/users/${username}`;

// fetch(url, {
//   headers: {
//     'Authorization': `token ${token}`
//   }
// })
// .then(response => {
  
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// })
// .then(data => {
//   console.log(data);
// })
// .catch(error => {
//   console.error('There was a problem with the fetch operation:', error);
// });







// const fetch = require('node-fetch');
// const prompt = require('prompt-sync')();


// const city = prompt('Enter a city name: ');


// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ca5c9b46d261973a58409cfb3984a10`)
//   .then(res => res.json())
//   .then(data => {
//     console.log(`Temperature in ${data.name}: ${data.main.temp}°C`);
//   })
//   .catch(err => console.error(err));





// // make it simple
// // Import the 'node-fetch' package to make HTTP requests
// const fetch = require('node-fetch');

// // Define the name of the city for which we want to fetch the weather data
// const city = 'chari, himachal pradesh';

// // Define the URL of the OpenWeatherMap API endpoint we want to call, including the query parameters for the city and API key
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ca5c9b46d261973a58409cfb3984a10`;

// // Make a GET request to the API endpoint using the 'fetch' function, passing in the URL and an object with headers if needed
// fetch(url)
//   // If the request is successful (i.e. the server returns a 2xx status code), parse the response as JSON using the 'json' function
//   .then(function(response) {
//     if (!response.ok) {
//       // If the response is not OK (i.e. the server returns a 4xx or 5xx status code), throw an error
//       throw new Error('Network response was not ok');
//     }
//     // Parse the response as JSON using the 'json' function
//     return response.json();
//   })
//   // If the response was successfully parsed as JSON, log the temperature of the city to the console
//   .then(function(data) {
//     console.log(`Temperature in ${data.name}: ${data.main.temp}°C`);
//   })
//   // If there was an error with the fetch request, log the error to the console
//   .catch(function(error) {
//     console.error('There was a problem with the fetch operation:', error);
//   });


  
// const city = 'chari,himachal pradesh';


// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ca5c9b46d261973a58409cfb3984a10`)
//   .then(res => res.json())
//   .then(data => {
//     console.log(`Temperature in ${data.name}: ${data.main.temp}°c`);
//   })
//   .catch(err => console.error(err));



 