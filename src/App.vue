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
  data () {
    return {
      title: 'ختمة'
    }
  }
}
</script>

<style>
#app{
    direction: rtl;
}
span{
    color: goldenrod;
}
body{
  margin: 0;
  font-family: 'Amiri', serif;
  background-color: floralwhite;
}
header {
  padding: 10px;
  box-shadow: 0 3px 0 gold, 0 8px 10px rgba(0, 0, 0, 0.15);
  background-color: #f3e8d6;
}
header span{    
  letter-spacing: .02em;
  font-size: 30px;
}
</style>
