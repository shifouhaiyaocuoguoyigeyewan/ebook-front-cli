<!-- <template>
    <div class="home">
        <div class="turnClass">
            <div id="flipbook">
                <div v-for="(item) in imgUrl" :key="item.index" :style="`
                background:url(${item.imgurl}) no-repeat 100% 100%
                
                `">
                </div>
            </div>
        </div>
    </div>
</template>

<script >
// import jquery from "jquery";
//turn.js
import turn from '../utils/turn.js';
// import '@/assets/images/2.jpg'

export default {
    name: 'Home',
    data() {
        return {
            imgUrl: [
                { imgurl: require("@/assets/images/2.jpg"), index: 1 },
                { imgurl:  require("@/assets/images/3.jpg"), index: 2 },
            ]
        }
    },
    // created:()=>{
    //     Document['$'] = jquery;
    // },  
    methods: {
        onTurn() {
            this.$nextTick(() => {
                $("#flipbook").turn({
                    autoCenter: true,
                    height: 646,
                    width: 996,
                });
            })

        }
    },
    mounted() {
        this.onTurn();
    }
} 
</script>

<style lang="less">
* {
    margin: 0;
    padding: 0;
}

.home {
    width: 100vw;
    height: 100vh;

    .turnClass {
        display: flex;
        margin: 0px auto;
        width: 996px;
        height: 646px;
        padding: calc((100vh - 646px)/2) 0;
        overflow: hidden;
    }
}
</style> --> -->

<!-- <template>
  <div class="body-content">
    <div id="magazine">
      <div v-for="(item, index) in allPages" :key="`test_${index}`">
        <div :class="`text${item.page}`">
          <footer
            v-if="item.page - 1 !== 0 && item.page - 1 !== allPages.length - 1"
            class="current-page"
          >
            <div v-if="(item.page - 1) % 2 == 0" class="even-numbers">
              {{ item.page - 1 }}
            </div>
            <div v-else class="odd-number">{{ item.page - 1 }}</div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import turn from "../utils/turn";

export default {
  name: "FenMian2",
  data() {
    return {
      value: "",
      page: 1,
      allPages: [
        {
          page: 1,
          name: "aa"
        },
        {
          page: 2,
          name: "aa"
        },
        {
          page: 3,
          name: "aa"
        },
        {
          page: 4,
          name: "aa"
        },
        {
          page: 5,
          name: "aa"
        },
        {
          page: 6,
          name: "aa"
        }
      ]
    };
  },
  mounted() {
    let self = this;
    $("#magazine").turn("center");
    $("#magazine").turn("page");
    this.$nextTick(() => {
      $("#magazine").turn({
        display: "double",
        elevation: 50,
        duration: 100,
        gradients: true,
        autoCenter: true,
        acceleration: true,
        gradients: !$.isTouch,
        page: self.page,
        width: 1152,
        when: {
          turned: function(e, page, pages) {
            //当前页
            console.log("Current view: ", $(this).turn("view"));
            //总页数
            console.log(
              "#magazine has " + $("#magazine").turn("pages") + " pages"
            );
            // $("#magazine").turn("hasPage", 10);
            // $("#magazine").turn("pages", 5);
          }
        }
      });
    });
  },
  methods: {},
  components: {}
};
</script>
<style lang="scss" scoped>
body {
  background: #ccc;
}

#magazine {
  width: 1152px;
  height: 752px;
  .text1 {
    background: url("@/assets/images/2.jpg") no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 752px;
  }
  .text2 {
    background: url("@/assets/images/3.jpg") no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 752px;
  }
  .text3 {
    background: url("@/assets/images/2.jpg") no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 752px;
  }
  .text4 {
    background: url("@/assets/images/3.jpg") no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 752px;
  }
  .text5 {
    background: url("@/assets/images/2.jpg") no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 752px;
  }
  .text6 {
    background: url("@/assets/images/3.jpg") no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 752px;
  }
  .current-page {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 14px;
    .even-numbers {
      width: 30px;
      height: 30px;
      background: #ffcc66;
      color: #fff;
      right: 0;
      position: absolute;
      bottom: 0px;
      line-height: 30px;
      text-align: center;
    }
    .odd-number {
      position: absolute;
      bottom: 0px;
      width: 30px;
      height: 30px;
      background: #cc00ff;
      color: #fff;
      line-height: 30px;
      text-align: center;
    }
  }
}

#magazine .shadow,
#magazine.shadow {
  -webkit-box-shadow: 0 4px 10px #666;
  -moz-box-shadow: 0 4px 10px #666;
  -ms-box-shadow: 0 4px 10px #666;
  -o-box-shadow: 0 4px 10px #666;
  box-shadow: 0 4px 10px #666;
}

#magazine .turn-page {
  background-color: #ccc;
  background-size: 100% 100%;
}
.bookmark {
  margin-left: 633px;
  font-size: 20px;
  writing-mode: tb-rl;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 47px;
  .item:nth-child(2n) {
    background: #ccc;
    width: 45px;
    height: 150px;
  }
  .item {
    width: 45px;
    height: 160px;
    background: red;
  }
  .item:nth-child(1) {
    z-index: 4;
    text-shadow: 6px 6px 6px #999;
  }
  .item:nth-child(2) {
    z-index: 3;
    text-shadow: 6px 6px 6px #333;
  }
  .item:nth-child(3) {
    z-index: 2;
    text-shadow: 6px 6px 6px #333;
  }
  .item:nth-child(4) {
    z-index: 1;
    text-shadow: 6px 6px 6px #333;
  }
}
</style> -->

<template>
  <div class="body-content animate__animated animate__zoomInRight">
    <div id="magazine" >
      <div v-for="(item, index) in allPages" :key="`test_${index}`">
        <!-- <div :class="`text${item.page}`"> -->
        <div :class="`text${item.page}`">
          <footer v-if="item.page - 1 !== 0 && item.page - 1 !== allPages.length - 1" class="current-page">
            <div v-if="(item.page - 1) % 2 == 0" class="even-numbers">
              {{ item.page - 1 }}
            </div>
            <div v-else class="odd-number oddshadow">{{ item.page - 1 }}</div>
          </footer>
          <div class="evenshadow"></div>
          <div class="oddshadow"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import turn from "../utils/turn";
export default {
  name: "FenMian2",
  data() {
    return {
      value: "",
      page: 1,
      allPages: [
        {
          page: 1,
          name: "aa"
        },
        {
          page: 2,
          name: "aa"
        },
        {
          page: 3,
          name: "aa"
        },
        {
          page: 4,
          name: "aa"
        },
        {
          page: 5,
          name: "aa"
        },
        {
          page: 6,
          name: "aa"
        }
      ]
    };
  },
  mounted() {
    let self = this;
    $("#magazine").turn("center");
    $("#magazine").turn("page");
    this.$nextTick(() => {
      $("#magazine").turn({
        display: "double",
        elevation: 50,
        duration: 100,
        gradients: true,
        autoCenter: true,
        acceleration: true,
        page: self.page,
        width: 1152,
        when: {
          turned: function () {
            //当前页
            console.log("Current view: ", $(this).turn("view"));
            //总页数
            console.log(
              "#magazine has " + $("#magazine").turn("pages") + " pages"
            );
            // $("#magazine").turn("hasPage", 10);
            // $("#magazine").turn("pages", 5);
          }
        }
      });
    });
  },
  methods: {},
  components: {}
};
</script>
<style>
body {
  background: white;
  z-index: 1;
}

.text1 {
  background: url("@/assets/images/2.jpg") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 752px;
}

.text2 {
  background: url("@/assets/images/3.jpg") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 752px;
}

.text3 {
  background: url("@/assets/images/2.jpg") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 752px;
}

.text4 {
  background: url("@/assets/images/3.jpg") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 752px;
}

.text5 {
  background: url("@/assets/images/2.jpg") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 752px;
}

.text6 {
  background: url("@/assets/images/3.jpg") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 752px;
}

.current-page {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 14px;
}

#magazine {
  /* width: 1152px; */
  width: 1352px;
  height: 752px;
  left: 500px;
  top:120px;
}

.even-numbers {
  width: 30px;
  height: 30px;
  background: #ffcc66;
  color: #fff;
  right: 0;
  position: absolute;
  bottom: 0px;
  line-height: 30px;
  text-align: center;
}

.odd-number {
  position: absolute;
  bottom: 0px;
  width: 30px;
  height: 30px;
  background: #cc00ff;
  color: #fff;
  line-height: 30px;
  text-align: center;
}

#magazine.shadow {
  -webkit-box-shadow: 0 4px 10px #666;
  -moz-box-shadow: 0 4px 10px #666;
  -ms-box-shadow: 0 4px 10px #666;
  -o-box-shadow: 0 4px 10px #666;
  box-shadow: 0 4px 10px #666;
}

#magazine .turn-page {
  background-color: #ccc;
  background-size: 100% 100%;
}

.bookmark {
  margin-left: 633px;
  font-size: 20px;
  writing-mode: tb-rl;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 47px;
}

.item:nth-child(2n) {
  background: #ccc;
  width: 45px;
  height: 150px;
}

.item {
  width: 45px;
  height: 160px;
  background: red;
}

.item:nth-child(1) {
  z-index: 4;
  text-shadow: 6px 6px 6px #999;
}

.item:nth-child(2) {
  z-index: 3;
  text-shadow: 6px 6px 6px #333;
}

.item:nth-child(3) {
  z-index: 2;
  text-shadow: 6px 6px 6px #333;
}

.item:nth-child(4) {
  z-index: 1;
  text-shadow: 6px 6px 6px #333;
}

.evenshadow {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 20%;
  pointer-events: none;
  filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=1, EndColorStr='#553f3f3f', StartColorStr='#007b7b7b');
  background-image: -webkit-gradient(linear, right top, left top, from(rgba(60, 60, 60, 0.3)), color-stop(23%, rgba(250, 250, 250, 0.05)), color-stop(28%, rgba(255, 255, 255, 0)), color-stop(34%, rgba(250, 250, 250, 0.05)), color-stop(54%, rgba(50, 50, 50, 0.1)), to(rgba(200, 200, 200, 0)));
  background-image: linear-gradient(right, rgba(60, 60, 60, 0.3) 0, rgba(250, 250, 250, 0.05) 23%, rgba(255, 255, 255, 0) 28%, rgba(250, 250, 250, 0.05) 34%, rgba(50, 50, 50, 0.1) 54%, rgba(200, 200, 200, 0) 100%);
  background-image: -o-linear-gradient(right, rgba(60, 60, 60, 0.3) 0, rgba(250, 250, 250, 0.05) 23%, rgba(255, 255, 255, 0) 28%, rgba(250, 250, 250, 0.05) 34%, rgba(50, 50, 50, 0.1) 54%, rgba(200, 200, 200, 0) 100%);
  background-image: -ms-linear-gradient(right, rgba(60, 60, 60, 0.3) 0, rgba(250, 250, 250, 0.05) 23%, rgba(255, 255, 255, 0) 28%, rgba(250, 250, 250, 0.05) 34%, rgba(50, 50, 50, 0.1) 54%, rgba(200, 200, 200, 0) 100%);
  background-image: -webkit-gradient(linear, right top, left top, color-stop(0, rgba(60, 60, 60, 0.3)), color-stop(0.23, rgba(250, 250, 250, 0.05)), color-stop(0.28, rgba(255, 255, 255, 0.05)), color-stop(0.34, rgba(250, 250, 250, 0.05)), color-stop(0.54, rgba(50, 50, 50, 0.1)), color-stop(1, rgba(200, 200, 200, 0)))
}

.oddshadow {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 12%;
  pointer-events: none;
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(60, 60, 60, 0.4)), color-stop(40%, rgba(60, 60, 60, 0.2)), color-stop(60%, rgba(60, 60, 60, 0.1)), to(rgba(200, 200, 200, 0)));
  background-image: linear-gradient(left, rgba(60, 60, 60, 0.4) 0, rgba(60, 60, 60, 0.2) 40%, rgba(60, 60, 60, 0.1) 60%, rgba(200, 200, 200, 0) 100%);
  background-image: -o-linear-gradient(left, rgba(60, 60, 60, 0.4) 0, rgba(60, 60, 60, 0.2) 40%, rgba(60, 60, 60, 0.1) 60%, rgba(200, 200, 200, 0) 100%);
  background-image: -ms-linear-gradient(left, rgba(60, 60, 60, 0.4) 0, rgba(60, 60, 60, 0.2) 40%, rgba(60, 60, 60, 0.1) 60%, rgba(200, 200, 200, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=1, EndColorStr='#00C8C8C8', StartColorStr='#CC5D5D5D')
}
</style>
