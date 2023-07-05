<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Cuaca Negara Terkini</router-link></li>
          <li><router-link to="/daftarnamapresiden">Nama Presiden Negara</router-link></li>
          <li><router-link to="/todolist">Daftar Kegiatan Negara</router-link></li>
          <li><router-link to="/penduduk">Jumlah Penduduk Negara</router-link></li>
          <li><router-link to="/lambang">Lambang Negara</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style>
#app {
  text-align: center;
}
header {
  background: #FFF5EE;
  padding: 20px;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}
nav li {
  margin-right: 10px;
}
nav a {
  color: #fff;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #D2B48C;
  transition: background-color 0.3s ease;
}
nav a:hover {
  background-color: #ff0000;
}
.router-link-active a {
  background-color: #ff0000;
}
</style>