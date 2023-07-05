<template>
    <div class="weather-widget">
      <h2 class="widget-title">Cuaca Lokasi Terkini Dan Seluruh Negara</h2>
      <div class="location-input">
        <label for="location">Masukkan Lokasi atau Negara:</label>
        <input type="text" id="location" v-model="location" />
        <button @click="fetchWeatherData">Dapatkan Cuaca</button>
      </div>
      <div v-if="weatherData" class="weather-data">
        <p class="location">Lokasi: {{ weatherData.name }}</p>
        <p v-if="weatherData.main" class="temperature">
          Suhu: {{ weatherData.main.temp }}°C
        </p>
        <p v-if="weatherData.weather" class="description">
          Deskripsi: {{ weatherData.weather[0].description }}
        </p>
      </div>
      <p v-else>Sedang memuat data cuaca...</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        location: '',
        weatherData: null
      };
    },
    methods: {
      async fetchWeatherData() {
        try {
          const apiKey = 'b7bfca7b27a3485144fea086c50d09dc';
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;
  
          const response = await fetch(apiUrl);
          const data = await response.json();
  
          this.weatherData = data;
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .weather-widget {
    padding: 20px;
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;
    background-image: linear-gradient(to bottom, #FFF5EE, #87CEFA);
    color: #fff;
    font-family: Arial, sans-serif;
    text-align: center;
  }
  
  .widget-title {
    margin-top: 0;
    font-size: 28px;
    font-weight: bold;
  }
  
  .location-input {
    margin-bottom: 20px;
  }
  
  .location-input label {
    display: block;
    margin-bottom: 10px;
    font-size: 20px;
    color: #fff;
  }
  
  .location-input input[type="text"] {
    padding: 8px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .location-input button {
    padding: 8px 16px;
    background-color: #000000;
    color: #ffffff;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .location-input button:hover {
    background-color: #f44336;
  }
  
  .weather-data {
    margin-top: 20px;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 8px;
  }
  
  .location {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }
  
  .temperature {
    font-size: 36px;
    margin: 10px 0;
  }
  
  .description {
    font-size: 20px;
    margin: 0;
  }
  </style>