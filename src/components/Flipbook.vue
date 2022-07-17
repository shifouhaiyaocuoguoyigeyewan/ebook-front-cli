<template>
    <!-- 阅读器整个视图 -->
    <div class="flipbook-viewport">
        <!-- 目录 -->
        <div class="catalog"></div>
        <div class="enlargeBtn"></div>
        <div class="shrinkBtn"></div>
        <!-- 书本视图 -->
        <div class="container ">
            <div class="flipbook">
                <div v-for="(item, index) in allPage" :key="`test_${index}`">
                    <!-- <div :class="`text${item.page}`">

                    </div> -->
                </div>
            </div>
            <!-- 页码 -->
            <div class="pagenumber">
            </div>
        </div>
        <div class="previousPage"></div>
        <div class="nextPage"></div>
    </div>
</template>

<script>
import $ from "jquery";
import turn from "../utils/turn";
import 'element-plus/theme-chalk/display.css';

function Lo() {
    if ($(window).width() > 1024 && $(window).height() > 700) {
        console.log("双面");
    } else {
        console.log("单面");
    }
}

export default {
    data() {
        return {
            page: 1,
            allPage: [
                { page: 1, title: "第一页", imgUrl: require("@/assets/images/f1.png") },
                { page: 2, title: "第二页", imgUrl: require("@/assets/images/f2.png") },
            ]
        };
    },

    methods: {
        loadTurnjs() {
            if ($(window).width() > 1024 && $(window).height() > 700) {
                console.log("双面");
            } else {
                console.log("单面");
            }
        }
    },

    watch() {
        this.loadTurnjs();
    },

    mounted() {

        // let self = this;
        // 设置开始页数
        // $(".flipbook").turn("page");
        // $(".flipbook").turn("center");
        // 大屏幕双页
        if ($(window).width() > 1024 && $(window).height() > 700) {
            console.log("大屏幕双页");
            var w = $('.flipbook-viewport').parent().width();
            console.log("w",w);
            var h = $(window).height();
            if (w == 0) { w = ((2482 * 2) / 3368) * h; }
            var w1 = ((2482 * 2) / 3368) * h;
            var h1 = (3368 / (2482 * 2)) * w;
            if (w1 > w) {
                h = h1;
            } else {
                w = w1;
            }
            $('.flipbook-viewport').width(w).height(h);
            $('.flipboox').width(w).height(h);
            $(window).resize(function () {
                var w = $('.flipbook-viewport').parent().width();
                var h = $(window).height();
                if (w == 0) { w = ((2482 * 2) / 3368) * h; }
                var w1 = ((2482 * 2) / 3368) * h;
                var h1 = (3368 / (2482 * 2)) * w;
                if (w1 > w) {
                    h = h1;
                } else {
                    w = w1;
                }
                $('.flipbook-viewport').width(w).height(h);
                $('.flipboox').width(w).height(h);
            });

            $('.flipbook').turn({
                // Width
                width: w,
                // Height
                height: h,
                // Elevation
                elevation: 50,
                display: 'double',
                // Enable gradients
                gradients: true,
                // Auto center this flipbook
                autoCenter: true,
            });
        }
    }
}
</script>

<style>

html,body{
	overflow:hidden-y;
	background-color: #ffffff;
	width:100%;
	height:100%;
	margin:0;
	padding:0;
}

.flipbook-viewport{
	overflow:hidden;
	width:100%;
	margin: 0 auto;
	height:100%;
	position: relative;

}

.flipbook-viewport .container{
}

.flipbook-viewport .flipbook{
	
}
</style>