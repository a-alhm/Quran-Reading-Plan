<template>
  <div id="app">
    <header>
      <span>{{ title }}</span>
    </header>
    <transition name="component-fade" mode="out-in" appear>
      <router-view :appTitle='title' id='pad'></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'ختمة'
    }
  }
}
</script>

<style>
#pad {
  padding-top: 10px
}

#app {
  direction: rtl;
}


body {
  margin: 0;
  font-family: 'Amiri', serif;
  background-color: floralwhite;
  color: goldenrod;
}

header {
  padding-right: 5px;
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

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity .3s ease;
}

.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
