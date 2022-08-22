<template>

    <el-row class="navbar">
        <el-col :span="12" style="display:flex">
            <div class="company_text" @click="turn2Index">同行TongXíng</div>
        </el-col>
        <el-col :span="12" class="hidden-xs-only" style="display:flex;justify-content:flex-end">
            <div v-if="login" class="login_text">
                欢迎&nbsp;&nbsp;<span style="color:rgb(76, 168, 205) ;">{{ user_name }}</span>&nbsp;&nbsp;进来阅读分享。
                <el-button round  @click="login = false"><el-icon><SwitchButton /></el-icon><span style="font-weight: bold;color: black;">退出</span></el-button>
            </div>
            <div v-if="!login" class="login_text">
                请登录
                <el-button round  @click="login = true"><el-icon><SwitchButton /></el-icon><span style="font-weight: bold;color: black;">登录</span></el-button>
            </div>
        </el-col>
    </el-row>


</template>

<script>

export default {
    name: 'Navbar',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            login: true,
            user_name: 'Ekko',
        }
    },
    methods: {
        turn2Index() {
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
    height: 100%;
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
    font-size: 14px;
    font-family: "Fira Sans";
    // font-weight: bold;
    // color: black;
    margin-right: 40%;
    user-select: none;
    align-self: center;
    white-space: nowrap;
}
</style>