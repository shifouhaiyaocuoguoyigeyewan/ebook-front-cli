<template>
  <div class="background">
    <Reader></Reader>
    
  </div>
</template>

<script>
import Reader from "../components/Reader.vue";
// import Flipbook from "../components/Flipbook.vue";
import 'element-plus/theme-chalk/display.css';

export default {
  name: 'Ebook',
  components: {
    Reader,
    // Flipbook
  }
}
</script>

<style >
.background {
  background: url("../assets/images/background.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
}

.reader {
  min-height: 100vh;
}
</style>