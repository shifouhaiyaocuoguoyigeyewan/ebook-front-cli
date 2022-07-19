<template>

  <div id="readerForMobile" class="animate__animated animate__zoomInRight hidden-sm-and-up" style="z-index: 1;">
    <div style="color:aliceblue">sm移动端</div>
  </div>

  <!-- 放大缩小按钮 -->
  <div class="zoom-icon zoom-icon-in"></div>
  <!-- 阅读器整个视图 -->
  <div class="flipbook-viewport animate__animated animate__zoomInRight hidden-sm-and-down">
    <!-- 阅读器的页面渲染 -->
    <div id="magazine">
      <div v-for="(item, index) in allPages" :key="`test_${index}`">
        <div id="text" :class="`text${item.page}`">
          <footer v-if="item.page - 1 !== 0 && item.page - 1 !== allPages.length - 1" class="current-page ">
            <div v-if="(item.page - 1) % 2 == 0" class="even-numbers ">
              {{ item.page - 1 }}
            </div>
            <div v-else class="odd-number">{{ item.page - 1 }}
            </div>
          </footer>
          <div v-if="item.page == 1" class="firstShadow">
            <div class="pageFirstShadow"></div>
          </div>
          <div v-if="item.page % 2 == 0 && item.page != allPages.length" class="evenshadow"></div>
          <div v-if="item.page % 2 != 0 && item.page != 1" class="oddshadow"></div>
        </div>
      </div>
    </div>
    <!-- v-if="item.page == 1 || item.page % 2 != 0"  style="width: 12px; right: 570px;" -->
    <!-- 右边页面厚度效果视图 -->
    <div class="thickness"></div>

    <!-- 左边页面厚度效果视图 -->
    <!-- v-if="(item.page - 1) % 2 != 0 || item.page - 1 == allPages.length - 1" style="width: 12px; left: -2px;" -->
    <div class="thickness_left"></div>

    <!-- <div style="margin: 20px;z-index: 50;color: aliceblue;">测试</div> -->
  </div>

</template>
<script>
import $ from "jquery";
import turn from "../utils/turn";
import 'element-plus/theme-chalk/display.css';

export default {
  name: "Pages",
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
  watch: {

  },
  mounted() {
    let self = this;

    //jquery初始化函数，相当于js的onload函数
    $(function () {
      $(".thickness").css("width", self.allPages.length + "px");
      //禁止鼠标滚轴+ctrl
      document.addEventListener('keydown', function (event) {
        if ((event.ctrlKey === true || event.metaKey === true)
          && (event.which === 61 || event.which === 107
            || event.which === 173 || event.which === 109
            || event.which === 187 || event.which === 189)) {
          event.preventDefault();
        }
      }, false);
      // Chrome IE 360
      window.addEventListener('mousewheel', function (event) {
        if (event.ctrlKey === true || event.metaKey) {
          event.preventDefault();
        }
      }, { passive: false });

      //firefox
      window.addEventListener('DOMMouseScroll', function (event) {
        if (event.ctrlKey === true || event.metaKey) {
          event.preventDefault();
        }
      }, { passive: false });
    });

    // 设置阅读器位置
    $("#magazine").turn("center");
    // 设置开始页数
    $("#magazine").turn("page");

    // 缩小书籍
    $("#magazine").click(function (e) {
      console.log("缩小书籍");
      e.preventDefault();
      $("#magazine").turn("zoom",1.5);
    });

    // when: {
    //       zooming: function (event, newFactor, current) {
    //         console.log(newFactor, current);
    //       }
    //       $('.flipbook').bind('zooming', function (event, page, view) {
    //         console.log('zooming');
    //       })
    //     }

    // vue开启一个异步更新队列，视图需要等队列中所有数据变化完成之后，再统一进行更新
    this.$nextTick(() => {

      $("#magazine").bind("start", function (event, pages, corner) {
        // console.log("pages", pages.page)
        if (pages.page == self.allPages.length) {
          $(".thickness").css("visibility", "hidden");
        } else {
          $(".thickness").css("width", (self.allPages.length - pages.page) + "px");
        }
      });

      $("#magazine").turn({
        // 设置显示模式。使用单页 single 显示每个视图仅一页，或使用双页 double 显示两个页面。
        display: "double",
        // 设置过度期间页面的高程
        elevation: 0,
        // 动画持续时间
        duration: 200,
        // 在过渡期间显示渐变和阴影。
        gradients: true,
        // 设置居中
        autoCenter: true,
        // 加速
        acceleration: true,
        // 设置’初始化’页面数量
        page: self.page,
        // 页面宽度
        width: 1252,
        height: 952,
        // 何时事件
        when: {
          // turned: function () {
          //   //当前页
          //   console.log("Current view: ", $(this).turn("view"));
          //   //总页数
          //   console.log(
          //     "#magazine has " + $("#magazine").turn("pages") + " pages"
          //   );
          //   // $("#magazine").turn("hasPage", 10);
          //   // $("#magazine").turn("pages", 5);
          // }

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
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.flipbook-viewport {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.text1 {
  background: url("@/assets/images/f1.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 952px;
}

.text2 {
  background: url("@/assets/images/f2.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 952px;
}

.text3 {
  background: url("@/assets/images/f1.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 952px;
}

.text4 {
  background: url("@/assets/images/f2.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;

}

.text5 {
  background: url("@/assets/images/f1.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 952px;
}

.text6 {
  background: url("@/assets/images/f2.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 952px;
}

.current-page {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 14px;
}

#magazine {
  width: 1152px;
  height: 752px;
  /* margin: 500px; */
  /* left: 500px; */
  /* top: 120px; */
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


.firstShadow {
  left: 0;
  top: 0;
  width: 2%;
  height: 100%;
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(20, 20, 20, 0.5)), to(rgba(240, 240, 200, 0)));
}

.pageFirstShadow {
  background: url("@/assets/images/zsj_dsd.png") no-repeat left;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  left: -1px;
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
  background: repeating-linear-gradient(to right, #FCFCFC, #C9C9C9 2px);
  background-size: 100% 100%;
  transition: width 500ms, right 500ms;
  height: 952px;
  right: 516px;
  z-index: 50;
}

/* -webkit-transition: width 500ms, right 500ms; */
/* -o-transition: width 500ms, right 500ms; */
/* background: -o-repeating-linear-gradient(left, #FCFCFC, #C9C9C9 2px); */

.thickness_left {
  -webkit-mask-box-image-source: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNy4zMjgiIGhlaWdodD0iMzE3LjQ2bW0iIHZpZXdCb3g9IjAgMCAzOS44MiAxMjgwLjA3IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiBiYXNlUHJvZmlsZT0iZnVsbCIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIGltYWdlLXJlbmRlcmluZz0ib3B0aW1pemVRdWFsaXR5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iI2ZjZmNmYyIgZD0iTTM5LjgyIDBMMCA3LjY4djEyNjQuOTNsMzkuODIgNy40NnoiLz48L3N2Zz4=);
  background: repeating-linear-gradient(to right, #FCFCFC, #C9C9C9 2px);
  background-size: 100% 100%;
  z-index: 50;
  transition: width 500ms, left 500ms;
}

/* -webkit-transition: width 500ms, left 500ms; */
/* -o-transition: width 500ms, left 500ms; */
/* background: -o-repeating-linear-gradient(left, #FCFCFC, #C9C9C9 2px); */
</style>
