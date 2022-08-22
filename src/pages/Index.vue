<template>
    <div class="screen">
        <div style="position: sticky; top:0px;">
            <Navbar />
        </div>
        <Tittle/>
    </div>
</template>

<script>
import Navbar from '../component/Navbar.vue';
import Tittle from '../component/Tittle.vue';

export default {
    name: "Index",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    components: {
    Navbar,
    Tittle,
}
}
</script>

<style lang="scss" scoped>
.screen {
    min-height: 100vh;
    min-width: 100vw;
}

</style>