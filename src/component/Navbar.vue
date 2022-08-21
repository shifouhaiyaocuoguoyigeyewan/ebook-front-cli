<template>

    <el-row class="navbar">
        <el-col :span="12" style="display:flex">
            <div class="company_text" @click="turn2Index">同行TongXíng</div>
        </el-col>
        <el-col :span="12" style="display:flex">
            <div class="login_text">
                欢迎登录
            </div>
        </el-col>
    </el-row>

</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        turn2Index() {
            console.log("turn2Index");
            this.$router.push('/');
        },
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    width: 100%;
    min-height: 6vh;
    background-color: rgb(242, 246, 247);
}

.box {
    display: flex;
    flex-direction: row;
    width: 60%;
    height: 100%;
    margin: 0 20%;
}

.company_text {
    font-size: 1vw;
    font-family: "Fira Sans";
    font-weight: bold;
    color: rgb(76, 168, 205);
    user-select: none;
    align-self: center;
    margin-left: 40%;
    white-space: nowrap;
    cursor: pointer;
}

.login_text {
    font-size: 1vw;
    font-family: "Fira Sans";
    font-weight: bold;
    color: rgb(76, 168, 205);
    user-select: none;
    align-self: center;
    margin-left: 40%;
    white-space: nowrap;
}
</style>