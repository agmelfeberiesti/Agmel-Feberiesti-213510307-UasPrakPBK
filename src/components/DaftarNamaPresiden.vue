<template>
    <div class="president-list">
      <h2 class="widget-title">Daftar Presiden</h2>
      <ul>
        <li v-for="president in presidents" :key="president.id">
          <span class="country">{{ president.country }}</span>: <span class="name">{{ president.name }}</span>
        </li>
      </ul>
      <form @submit.prevent="addPresident">
        <div>
          <label for="country">Negara:</label>
          <input type="text" id="country" v-model="newPresident.country" required>
        </div>
        <div>
          <label for="name">Nama Presiden:</label>
          <input type="text" id="name" v-model="newPresident.name" required>
        </div>
        <button type="submit">Tambah Presiden</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        presidents: [
          { id: 1, country: 'Indonesia', name: 'Joko Widodo' },
          { id: 2, country: 'Amerika Serikat', name: 'Joe Biden' },
          { id: 3, country: 'Prancis', name: 'Emmanuel Macron' }
        ],
        newPresident: {
          country: '',
          name: ''
        }
      };
    },
    methods: {
      addPresident() {
        if (this.newPresident.country && this.newPresident.name) {
          const newId = this.presidents.length + 1;
          this.presidents.push({
            id: newId,
            country: this.newPresident.country,
            name: this.newPresident.name
          });
          this.newPresident.country = '';
          this.newPresident.name = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .president-list {
    padding: 20px;
    background-color: #87CEFA;
    border-radius: 8px;
    color: #ffffff;
  }
  
  .widget-title {
    font-size: 24px;
    font-weight: bold;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  .country {
    color: #c2e1ff;
  }
  
  .name {
    color: #ffffff;
  }
  
  form div {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    font-weight: bold;
    color: #ffffff;
  }
  
  input {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 8px 16px;
    background-color: #D2B48C;
    color: #ffffff;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #D2B48C;
  }
  </style>