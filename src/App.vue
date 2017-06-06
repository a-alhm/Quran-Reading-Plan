<template>
  <div id="app">
    <header>
      <span>{{ title }}</span>
    </header>
    <router-view :appTitle='title'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'ختمة'
    }
  }
}
</script>

<style>
#app {
  direction: rtl;
}

span {
  color: goldenrod;
}

body {
  margin: 0;
  font-family: 'Amiri', serif;
  background-color: floralwhite;
}

header {
  padding: 10px;
  box-shadow: 0 3px 0 gold, 0 8px 10px rgba(0, 0, 0, 0.15);
  background-color: #f3e8d6;
}

header span {
  letter-spacing: .02em;
  font-size: 30px;
}

.btn {
  margin: 20px auto;
  display: block;
  border: 1px solid gold;
  border-radius: 6px;
  padding: 10px 20px;
  background-color: goldenrod;
  color: white;
  font-size: 1.2em;
  font-family: 'Amiri', serif;
  outline: none;
  width: 48px;
  text-decoration: none;
}

.btn:hover {
  background-color: rgb(197, 149, 30);
}
</style>
