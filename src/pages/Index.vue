<template>
    <div class="screen">
        <div style="position: sticky; top:0px">
            <Navbar/>
        </div>

    </div>
</template>

<script>
import Navbar from '../component/Navbar.vue';
    export default {
    name: "Index",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    components: { Navbar }
}
</script>

<style lang="scss" scoped>
.screen {
    min-height: 100vh;
}
</style>