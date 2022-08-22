<template>
    <div class="tittle_background">
        <div class="box">
            <div class="left">
                <div class="tittle_text">{{tittle_text}}</div>
                <div class="description_text">{{description_text}}</div>
                <div class="button"><el-button style="background-color: rgb(0,179,220);color: aliceblue;width: 30%;height: 40px;" round><span>浏览电子杂志</span></el-button></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Tittle',
        data() {
            return {
                tittle_text: '同行标题',
                description_text: '近日，深圳华大生命科学研究院生物多样性基因组研究团队、中国科学院昆明动物研究所等多个中外课题组发布了对有袋类哺乳动物进化过程的研究结果，揭示了物种在快速分化过程中，一些随机事件有可能会导致远缘物种具有相似表型的现象，解释了形态和DNA相近的物种却非近亲背后的原理。',
            };
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
.tittle_background{
    width: 100%;
    height: 560px;
    background-color: rgb(217, 217, 217);
}
.box{
    margin: 0 20%;
}
.left{
    display: flex;
    flex-direction: column;
    width: 50%;
}
.tittle_text{
    margin-top: 30%;
    font-size: 60px;
    font-family: "Fira Sans";
    font-weight: bold;
    color: rgb(16, 17, 17);
}
.description_text{
    width: 70%;
    margin-top: 10%;
    font-size: 12px;
    font-family: "Fira Sans";
    font-weight: bold;
    color: rgb(16, 17, 17);
}
.button{
    margin-top: 10%;
}
</style>