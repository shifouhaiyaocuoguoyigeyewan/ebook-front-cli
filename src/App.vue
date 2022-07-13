<template>
 <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Ebook>
  </Ebook>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Ebook from './pages/Ebook.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    Ebook
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
html,
body,
#app{
  padding: 0;
  margin: 0;
  min-height: 100vh;
}
</style>
