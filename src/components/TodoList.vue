<template>
    <div id="app" class="container">
      <h1 class="nama-pemilik">Daftar Kegiatan Negara <br>------------TO-DO LIST------------</h1>
      <form @submit.prevent="addItem">
        <input v-model="newItemText" placeholder="Tambahkan Kegiatan">
        <button type="submit">ADD</button>
      </form>
      <label>
        <input type="checkbox" v-model="hideCompleted">
        Archive the finished
      </label>
      <ul>
        <li v-for="item in filteredItems" :key="item.id">
          <span :class="{ completed: item.completed }">{{ item.text }}</span>
          <button @click="completeItem(item.id)">Done</button>
          <button @click="deleteItem(item.id)">Delete</button>
        </li>
      </ul>
      <button @click="clearCompleted" class="hapus">Delete the finished learning</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newItemText: '',
        hideCompleted: false,
        items: [],
        idCounter: 0
      };
    },
    methods: {
      addItem() {
        const newItemText = this.newItemText.trim();
  
        if (newItemText) {
          this.items.push({
            id: this.idCounter++,
            text: newItemText,
            completed: false
          });
  
          this.newItemText = '';
        }
      },
      completeItem(itemId) {
        const itemIndex = this.items.findIndex(item => item.id === itemId);
        this.items[itemIndex].completed = true;
      },
      deleteItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
      },
      clearCompleted() {
        this.items = this.items.filter(item => !item.completed);
      }
    },
    computed: {
      filteredItems() {
        if (this.hideCompleted) {
          return this.items.filter(item => !item.completed);
        }
        return this.items;
      }
    }
  };
  </script>
  
  <style>
  .container {
    background-color: #87CEFA;
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  
  .nama-pemilik {
    margin-top: 20px;
  }
  
  form {
    margin-top: 20px;
  }
  
  input {
    padding: 5px;
    margin-right: 10px;
  }
  
  button {
    padding: 5px 10px;
    background-color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  ul {
    margin-top: 20px;
    padding: 0;
    list-style-type: none;
  }
  
  li {
    margin-top: 10px;
  }
  
  .completed {
    text-decoration: line-through;
  }
  
  .hapus {
    margin-top: 20px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>