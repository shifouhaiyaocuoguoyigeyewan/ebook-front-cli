<template>
    <div class="navbar">
        <!-- <div class="box">
            <div class="company_text">同行TongXíng</div>
        </div> -->

        <el-row>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                <div class="box">
                    <div class="company_text">同行TongXíng</div>
                </div>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                <div class="box">
                    <div class="company_text">同行TongXíng</div>
                </div>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                <div class="box">
                    <div class="company_text">同行TongXíng</div>
                </div>
            </el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                <div class="box">
                    <div class="company_text">同行TongXíng</div>
                </div>
            </el-col>
        </el-row>


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

.box {
    display: flex;
    flex-direction: row;

    height: 100%;

}

.company_text {
    font-size: 20px;
    font-family: "Fira Sans";
    font-weight: bold;
    color: rgb(76, 168, 205);
    user-select: none;
    align-self: center;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.ep-bg-purple {
    background: purple;
}

.ep-bg-purple-light {
    background: lighten(purple, 10%);
}
</style>