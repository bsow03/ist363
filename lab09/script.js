// Define the API endpoint for Syracuse, NY
const apiURL = 'https://api.open-meteo.com/v1/forecast?latitude=43.0481&longitude=-76.1474&current=precipitation,temperature_2m,cloud_cover&timezone=America%2FNew_York&temperature_unit=fahrenheit&precipitation_unit=inch';

fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    // Access the 'current' object
    const weather = data.current;
    
    // Extract the temperature, precipitation, and cloud cover
    const temperature = weather.temperature_2m;
    const precipitation = weather.precipitation;
    const cloudCover = weather.cloud_cover;

    // Update the HTML with the weather data
    document.getElementById('temperature').textContent = `${temperature} °F`;
    document.getElementById('precipitation').textContent = `${precipitation} inches`;

    // Display cloud cover with an emoji
    const cloudCoverEmoji = cloudCover > 50 ? '☁️' : '☀️';
    document.getElementById('cloudCover').textContent = cloudCoverEmoji;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });

