<template>
    <div class="widget">
      <h2 class="widget-title">{{ title }}</h2>
      <p class="widget-message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Widget Title',
        message: 'Hello, I am a widget!',
      };
    },
  };
  </script>
  
  <style scoped>
  .widget {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    text-align: center;
    box-shadow: 0 2px 4px rgba(145, 44, 44, 0.1);
    border-radius: 8px;
  }
  
  .widget-title {
    color: #0c9ea9;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .widget-message {
    color: #b11a1a;
    font-size: 18px;
  }
  </style>