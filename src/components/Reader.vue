<template>
  <!-- <div id="magazine" class="body animate__animated animate__zoomInRight hidden-sm-and-down">
    <div v-for="(item, index) in allPages" :key="`page_${index}`">

      <div class="">
        <div :class="`text${item.page}`">
          <footer v-if="item.page - 1 !== 0 || item.page - 1 !== allPages.length - 1" class="current-page">
            <div v-if="(item.page - 1) % 2 == 0" class="even-numbers ">
              {{ item.page - 1 }}
            </div>
            <div v-else class="odd-number oddshadow ">{{ item.page - 1 }}
            </div>
          </footer>
        </div>
      </div>
      <div v-if="item.page - 1 == 0 || item.page - 1 == allPages.length - 1" class="thickness"
        style="width: 12px; right: -3px;"></div>
      <div v-if="(item.page - 1) % 2 !== 0" class="thickness_left" style="width: 12px; left: -3px;"></div>
    </div>
  </div> -->


<div id="magazine" class="animate__animated animate__zoomInRight hidden-sm-and-down">
      <div v-for="(item, index) in allPages" :key="`test_${index}`">
        <div :class="`text${item.page}`">
          <footer v-if="item.page - 1 !== 0 && item.page - 1 !== allPages.length - 1" class="current-page">
            <div v-if="(item.page - 1) % 2 == 0" class="even-numbers ">
              {{ item.page - 1 }}
            </div>
            <div v-else class="odd-number oddshadow ">{{ item.page - 1 }}
            </div>
          </footer>
          
          <div class="evenshadow"></div>
          <div class="oddshadow"></div>
        </div>

      </div>
            <div  class="thickness"
            style="width: 12px; right: -3px;"></div>
          <div  class="thickness_left" style="width: 12px; left: -2px;"></div>
    </div>


  <div id="readerForMobile" class="animate__animated animate__zoomInRight hidden-sm-and-up" style="z-index: 1;">
    <div style="color:aliceblue">移动端</div>
  </div>

</template>
<script>
import $ from "jquery";
import turn from "../utils/turn";
import 'element-plus/theme-chalk/display.css';

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
        // 动画持续时间
        duration: 1000,
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
  z-index: 50;
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
  top: 120px;
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

::-webkit-scrollbar {
  width: 0 !important;
}

::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
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

.shadow {
  transition: box-shadow .5s, -webkit-box-shadow .5s;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  z-index: 2;
  width: 1015px;
  height: auto;
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

.thickness {
  -webkit-mask-box-image-source: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNy4zMjgiIGhlaWdodD0iMzE3LjQ2bW0iIHZpZXdCb3g9IjAgMCAzNS4zMSAxMTM0LjkyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiBiYXNlUHJvZmlsZT0iZnVsbCIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIGltYWdlLXJlbmRlcmluZz0ib3B0aW1pemVRdWFsaXR5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iI2ZjZmNmYyIgZD0iTTAgMGwzNS4zMSA2LjgxVjExMjguM0wwIDExMzQuOTJ6Ii8+PC9zdmc+);
  /* background: -o-repeating-linear-gradient(left, #FCFCFC, #C9C9C9 2px); */
  background: repeating-linear-gradient(to right, #FCFCFC, #C9C9C9 2px);
  height: 100%;
  position: absolute;
  background-size: 100% 100%;
  z-index: 50;
  /* -webkit-transition: width 500ms, right 500ms; */
  /* -o-transition: width 500ms, right 500ms; */
  transition: width 500ms, right 500ms;
}

.thickness_left {
  -webkit-mask-box-image-source: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNy4zMjgiIGhlaWdodD0iMzE3LjQ2bW0iIHZpZXdCb3g9IjAgMCAzOS44MiAxMjgwLjA3IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiBiYXNlUHJvZmlsZT0iZnVsbCIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIGltYWdlLXJlbmRlcmluZz0ib3B0aW1pemVRdWFsaXR5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iI2ZjZmNmYyIgZD0iTTM5LjgyIDBMMCA3LjY4djEyNjQuOTNsMzkuODIgNy40NnoiLz48L3N2Zz4=);
  background: -o-repeating-linear-gradient(left, #FCFCFC, #C9C9C9 2px);
  background: repeating-linear-gradient(to right, #FCFCFC, #C9C9C9 2px);
  height: 100%;
  position: absolute;
  background-size: 100% 100%;
  z-index: 50;
  -webkit-transition: width 500ms, left 500ms;
  -o-transition: width 500ms, left 500ms;
  transition: width 500ms, left 500ms;
}
</style>
