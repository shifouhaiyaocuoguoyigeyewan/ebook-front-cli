<template>

 <router-view></router-view>

</template>

<script>
import Reader from './pages/Reader.vue'

export default {
  name: 'App',
  components: {
    Reader
}
}
</script>

<style>

html,
body,
#app{
  padding: 0;
  margin: 0;
  min-height: 100vh;
}

</style>
