<template>
    <div class="navbar">
        <div class="box">
            <div class="company_text">同行TongXíng</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss" scoped>
.navbar {
    width: 100%;
    height: 40px;
    background-color: rgb(242, 246, 247);
}
.box{
    display: flex;
    flex-direction: row;
    width: 60%;
    height: 100%;
    margin: 0 20%;
}
.company_text{
    font-size: 20px;
    font-family: "Fira Sans";
    font-weight: bold;
    color: rgb(76,168,205);
    user-select: none;
    align-self: center;
}
</style>