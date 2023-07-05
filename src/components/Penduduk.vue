<template>
    <div class="population-widget">
      <h2 class="widget-title">Jumlah Penduduk Negara</h2>
      <form @submit.prevent="calculatePopulation">
        <div class="form-group">
          <label for="country">Negara:</label>
          <input type="text" id="country" v-model="country" required>
        </div>
        <div class="form-group">
          <label for="population">Populasi:</label>
          <input type="number" id="population" v-model="population" required>
        </div>
        <div class="form-group">
          <label for="growth-rate">Tingkat Pertumbuhan (%):</label>
          <input type="number" id="growth-rate" v-model="growthRate" required>
        </div>
        <button type="submit">Hitung</button>
      </form>
      <div v-if="totalPopulation !== null" class="result">
        <p>Jumlah Penduduk {{ country }} setelah 1 tahun: {{ totalPopulation }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        country: '',
        population: null,
        growthRate: null,
        totalPopulation: null
      };
    },
    methods: {
      calculatePopulation() {
        const growthFactor = 1 + (this.growthRate / 100);
        this.totalPopulation = Math.round(this.population * growthFactor);
      }
    }
  };
  </script>
  
  <style scoped>
  .population-widget {
    padding: 20px;
    background-color: #87CEFA; /* Ubah warna background menjadi biru (#007bff) */
    border-radius: 8px;
    text-align: center;
  }
  .widget-title {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff; /* Ubah warna teks menjadi putih (#ffffff) */
  }
  .form-group {
    margin-bottom: 20px;
  }
  label {
    display: block;
    font-weight: bold;
    color: #ffffff; /* Ubah warna teks label menjadi putih (#ffffff) */
  }
  input {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  button {
    padding: 8px 16px;
    background-color: #000000;
    color: #ffffff;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #f44336;
  }
  .result {
    margin-top: 20px;
  }
  </style>