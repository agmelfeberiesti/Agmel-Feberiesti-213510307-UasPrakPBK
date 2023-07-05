<template>
    <div class="photo-widget">
      <h2>{{ title }}</h2>
      <div class="photo-container">
        <img :src="photoUrl" :alt="title" />
      </div>
      <button @click="getRandomPhoto">Load New Photo</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        photoUrl: '',
      };
    },
    mounted() {
      this.getRandomPhoto();
    },
    methods: {
      async getRandomPhoto() {
        try {
          const response = await fetch('https://restcountries.com/v3.1/all');
          const data = await response.json();
  
          const randomIndex = Math.floor(Math.random() * data.length);
          const randomCountry = data[randomIndex];
  
          this.title = randomCountry.name.common;
          this.photoUrl = randomCountry.flags.svg;
        } catch (error) {
          console.error('Error fetching random photo:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
.photo-widget {
  border: 1px solid #fbfbfb;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #87CEFA; /* Ubah warna background di sini */
}
.photo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin-top: 10px;
}
.photo-container img {
  max-width: 100%;
  max-height: 100%;
}
.photo-widget button {
  margin-top: 10px;
}
</style>