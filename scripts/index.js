const submitBtn = document.getElementById('submitBtn');
const input = document.getElementById('input');
const loading = document.getElementById('loading');


submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  console.log("Display : now");
  loading.style.display = 'block';
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${input.value}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a27c91f184msh995da64e7bb4b59p1b331cjsnc56884878869',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log("Display : nonw");
    loading.style.display = 'none';
    buildUI(JSON.parse(result));
    console.log(result);
  } catch (error) {
    loading.style.display = 'none';
    console.error(error);
  } finally {
    loading.style.display = 'none';
  }
})


const buildUI = (data) => {
  const container = document.getElementById('container');
  container.innerHTML = `
    <h2 class="headers">${input.value}</h2>
    <p class="temperature">${data["temp"]}°C</p>
    <p class="weather">
    feels like : ${data["feels_like"]}°C 
    <br/> 
    humidity : ${data["humidity"]}
    <br/>
    min temp : ${data["min_temp"]}°C
    <br/>
    max temp : ${data["max_temp"]}°C
    <br/>
    wind speed : ${data["wind_speed"]}
    <br/>
    wind degrees : ${data["wind_degrees"]}
    <br/>
    sunrise : ${data["sunrise"]}
    <br/>
    sunset : ${data["sunset"]}
    </p>
  `;
}



// Reference :

/*
{
  "cloud_pct": 0, 
  "temp": 27, 
  "feels_like": 29, 
  "humidity": 74, 
  "min_temp": 27, 
  "max_temp": 27, 
  "wind_speed": 3.6, 
  "wind_degrees": 280, 
  "sunrise": 1710724459, 
  "sunset": 1710767939}

*/