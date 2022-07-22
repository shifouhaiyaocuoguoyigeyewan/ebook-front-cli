<template>

  <div id="readerForMobile" class="animate__animated animate__zoomInRight hidden-sm-and-up" style="z-index: 1;">
    <div style="color:aliceblue">sm移动端</div>
  </div>

  <!-- 阅读器整个视图 -->
  <div class="flipbook-viewport animate__animated animate__zoomInRight hidden-sm-and-down">
    <!-- 左边页面厚度效果视图 -->
    <div class="thickness_left" :style="{ width: thickness_left_width + 'px', height: thickness_left_height + 'px' }">
    </div>
    <!-- 阅读器的页面渲染 -->
    <div id="magazine">
      <!-- 中间两个页数 -->
      <div v-for="(item, index) in allPages" :key="`test_${index}`">
        <div
          :style="{ background: 'url(' + item.url + ')', 'background-size': '100% 100%', width: '100%', height: '100%' }">
          <footer v-if="item.page - 1 !== 0 && item.page - 1 !== allPages.length - 1" class="currentpage ">
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
    <!-- 右边页面厚度效果视图 -->
    <div class="thickness" :style="{ width: thickness_width + 'px', height: thickness_height + 'px' }"></div>
  </div>

  <!-- 阅读器的底部功能视图 -->
  <div class="bottom_bar bottom_tools">底部</div>

  <!-- 阅读器的右边导航栏目录 -->
  <div v-if="isCatalogOpen == false" @click="onCatalog"
    class="catalogTrue_button catalogTrue_tools animate__animated animate__bounceInRight">
    <div>打开导航栏目录</div>
  </div>
  <div v-if="isCatalogOpen == true" @click="onCatalog"
    class="catalogFalse_button catalogFalse_tools animate__animated animate__bounceInRight" style=" display: flex;
align-items:center;">
    <div>隐藏导航栏目录</div>
  </div>

</template>

<script>
let that
import $ from "jquery";
import turn from "../utils/turn";
import 'element-plus/theme-chalk/display.css';

export default {
  name: "Pages",
  data() {
    let a = require("@/assets/images/f1.png"), b = require("@/assets/images/f2.png"),
      allPages = [];
    for (let i = 0; i < 50; i += 2) {
      allPages.push({
        url: a,
        page: i + 1
      });
      allPages.push({
        url: b,
        page: i + 2
      });
    }
    return {
      value: "",
      page: 1,
      //放大标志
      isZoom: false,
      allPages,
      // 导航栏目录打开标志
      isCatalogOpen: false,

      // 书本厚度 高
      thickness_height: 952,
      // 书本厚度 宽
      thickness_width: allPages.length / 2,

      // 书本厚度 左边 高
      thickness_left_height: 952,
      // 书本厚度 左边 宽
      thickness_left_width: 0,

      // 书本
      book_width: 1252,
      book_height: 952,
    };
  },
  created() {
    that = this
  },
  watch: {

  },
  mounted() {
    let self = this,that=this;
      
      //禁止鼠标滚轴+ctrl
      document.addEventListener('keydown', function (event) {
        //  if ((event.ctrlKey === true || event.metaKey === true)
        //   && (event.which === 61 || event.which === 107
        //     || event.which === 173 || event.which === 109
        //     || event.which === 187 || event.which === 189)) {
        if (event.ctrlKey === true || event.metaKey === true) {
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
    // 设置阅读器位置
    $("#magazine").turn("center");
    // 设置开始页数
    $("#magazine").turn("page");

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
        width: self.book_width,
        height: self.book_height,
        // 何时事件
        when: {
          turned: function (e, page, view) {
            let thisPage = self.allPages.length - page;
            that.thickness_width = thisPage / 2;
            page == 1 ? that.thickness_left_width = 0 : that.thickness_left_width = page / 2;
          },

          zooming: function(e,newzoom,oldzoom){
            self.dblclick_page();
          }

        }
      });
      
  },
  methods: {
    dblclick_page(){
        console.log("父元素双击")
        // 判断是否已经放大
        if (this.isZoom == false) {
          let fangda = 1.2;
          $("#magazine").turn("zoom", fangda);
          this.thickness_height = this.thickness_left_height = this.book_height * 1.2;
          this.isZoom = true;
        } else {
          $("#magazine").turn("zoom", 1);
          this.thickness_height = this.thickness_left_height = this.book_height;
          this.isZoom = false;
        }
    },


    dfg() {
      setTimeout(() => {
        $(".thickness")[0].style.height = parseInt($("#magazine")[0].style.height) + 'px';
      })
    },
    abc() {
      $("#magazine").turn("zoom", that.isZoom ? 1.2 : 1);
      that.isZoom = !that.isZoom;
      that.dfg();
    },
    onCatalog() {
      console.log("onCatalog", this.isCatalogOpen);
      this.isCatalogOpen = !this.isCatalogOpen;
      // that.dfg()
    }
  },
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

.bottom_bar {
  bottom: 0;
  text-align: center;
  transition: transform 500ms, -webkit-transform 500ms;
}

.bottom_tools {
  position: absolute;
  height: 54px;
  width: 100%;
  z-index: 999000;
  background: rgba(0, 0, 0, 0.6);
}

.catalogTrue_button {
  right: 0;
  background: url("@/assets/images/catalog_popup.png") no-repeat center center;
}

.catalogTrue_tools {
  width: 64px;
  height: 160px;
  position: absolute;
  top: 50%;
  margin-top: -80px;
  cursor: pointer;
  z-index: 888000;
}

.catalogFalse_button {
  right: 0;
  background: url("@/assets/images/catalog_false.png") no-repeat center center;
  backdrop-filter: blur(5px);
}

.catalogFalse_tools {
  width: 164px;
  position: absolute;
  top: 15%;
  bottom: 15%;
  cursor: pointer;
  z-index: 888000;
}

.flipbook-viewport {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.currentpage {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 14px;
}

#magazine {
  width: 1152px;
  height: 752px;
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
  z-index: 50;
  /* position: absolute; */
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
  /* position: absolute; */
}

/* -webkit-transition: width 500ms, left 500ms; */
/* -o-transition: width 500ms, left 500ms; */
/* background: -o-repeating-linear-gradient(left, #FCFCFC, #C9C9C9 2px); */
</style>
