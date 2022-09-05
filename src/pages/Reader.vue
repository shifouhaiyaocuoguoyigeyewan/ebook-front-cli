<template>

  <div class="background hidden-sm-and-up"
    :style="{ background: 'url(' + host + '/static/images/background.jpg)', 'background-size': '100% 100%' }">
    <div class="animate__animated animate__zoomInRight" style="z-index: 100;min-height: 100vh; width: 100%;">
      <!-- 阅读器整个视图 -->
      <div class="magazineMobileView">
        <div id="magazineMobile">
          <div v-for="(item, index) in allPages" :key="`test_${index}`">
            <div v-if="index != 1"
              :style="{ background: 'url(' + host + item.content + ')', 'background-size': '100% 100%', width: '100%', height: '100%' }">
              <div>
                <footer v-if="item.page - 1 !== 0 && item.page !== allPages.length" class="currentpage">
                  <div class="even-numbers">
                    {{ item.page }}
                  </div>
                </footer>
              </div>
              <div v-if="item.page == 1" class="firstShadow">
                <div class="pageFirstShadow"
                  :style="{ background: 'url(' + host + '/static/images/zsj_dsd.png) no-repeat left' }"></div>
              </div>
              <div v-if="item.page == allPages.length" class="normal_right_border_mobile">
                <div class="ysj_dsd"></div>
              </div>
            </div>
            <!-- 目录页 -->
            <div v-if="index == 1"
              style="background-color: #fff;background-size:100% 100% ; width: 100%;height: 100%;overflow: hidden;">
              <div class="topCatalog" :style="{ background: 'url(' + host + '/static/images/catalog.jpg) 100% 100%' }">
              </div>
              <div class="catalogTextMobile">目录</div>
              <div class="catalogEnMobile">Contents</div>
              <div class="catalogSeclect" v-for="(item, index) in allCatalog" :key="`test_${index}`">
                <div class="catalogDetail">
                  <div class="singleCatalogMobile" @click="turnPageMobile(item.page)">
                    {{ item.title }}: {{ item.describe }}
                  </div>
                </div>

                <div class="catalogPageNumMobile">
                  P{{ item.page }}
                </div>
              </div>

              <footer class="currentpage">
                <div class="even-numbers">2</div>
              </footer>
            </div>

          </div>
        </div>
      </div>

      <!-- 阅读器的底部功能视图 -->
      <div class="bottom_bar_mobile bottom_tools_mobile">
        <!-- 设置外边距 -->
        <div class="center_btn_mobile">
          <!-- 放置所有元素的盒子 -->
          <div class="center_btnn_mobile">
            <!-- 目录 -->
            <div class="btnbox_mobile" @click="turnCatalogPageMobile">
              <div class="btn">
                <el-tooltip content="目录" placement="top" effect="light">
                  <el-icon :size="30" style="height:100%;color:aliceblue;">
                    <Reading />
                  </el-icon>
                </el-tooltip>
              </div>
            </div>

            <!-- 跳到第一页 -->
            <div class="btnbox_mobile" @click="turnFirstPageMobile">
              <div class="btn">
                <el-tooltip content="第一页" placement="top" effect="light">
                  <el-icon :size="30" style="height:100%;color:aliceblue;">
                    <DArrowLeft />
                  </el-icon>
                </el-tooltip>
              </div>
            </div>

            <div class="btnbox_mobile" @click="turnPreviousPageMobile">
              <div class="btn">
                <el-tooltip content="上一页" placement="top" effect="light">
                  <el-icon :size="30" style="height:100%;color:aliceblue;">
                    <ArrowLeftBold />
                  </el-icon>
                </el-tooltip>
              </div>
            </div>

            <div class="bottomNumPageBtnMobile">
              <div class="btn">
                <el-input-number style="margin: 10px 0px;width: 100px;" v-model="bottomNum" :min="1"
                  :max="allPagesLength" :step="1" step-strictly @change="turnPageMobile" />
              </div>
            </div>

            <div class="btnbox_mobile" @click="turnNextPageMobile">
              <div class="btn">
                <el-tooltip content="下一页" placement="top" effect="light">
                  <el-icon :size="30" style="height:100%;color:aliceblue;">
                    <ArrowRightBold />
                  </el-icon>
                </el-tooltip>
              </div>
            </div>

            <div class="btnbox_mobile" @click="turnLastPageMobile">
              <div class="btn">
                <el-tooltip content="最后一页" placement="top" effect="light">
                  <el-icon :size="30" style="height:100%;color:aliceblue;">
                    <DArrowRight />
                  </el-icon>
                </el-tooltip>
              </div>
            </div>

            <div class="btnbox_mobile" @click="dblclick_pageMobile">
              <div class="btn">
                <el-tooltip v-if="!isZoom" content="放大" placement="top" effect="light">
                  <el-icon :size="30" style="height:100%;color:aliceblue;">
                    <ZoomIn />
                  </el-icon>
                </el-tooltip>

                <el-tooltip v-if="isZoom" content="缩小" placement="top" effect="light">
                  <el-icon :size="30" style="height:100%;color:aliceblue;">
                    <ZoomOut />
                  </el-icon>
                </el-tooltip>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="background hidden-sm-and-down"
    :style="{ background: 'url(' + host + '/static/images/background.jpg)', 'background-size': '100% 100%' }">
    <!-- 阅读器整个视图 -->
    <div class="flipbook-viewport animate__animated animate__zoomInRight">
      <!-- 左边页面厚度效果视图 -->
      <div class="thickness_left" :style="{ width: thickness_left_width + 'px', height: thickness_left_height + 'px' }">
      </div>
      <!-- 阅读器的页面渲染 -->
      <div id="magazine">
        <!-- 中间两个页数 -->
        <div v-for="(item, index) in allPages" :key="`test_${index}`">

          <div v-if="index != 1"
            :style="{ background: 'url(' + host + item.content + ')', 'background-size': '100% 100%', width: '100%', height: '100%' }">
            <footer v-if="item.page - 1 !== 0 && item.page !== allPages.length" class="currentpage ">
              <div v-if="(item.page - 1) % 2 == 0" class="even-numbers ">
                {{ item.page }}
              </div>
              <div v-else class="odd-number">{{ item.page }}
              </div>
            </footer>
            <div v-if="item.page == 1" class="firstShadow">
              <div class="pageFirstShadow"
                :style="{ background: 'url(' + host + '/static/images/zsj_dsd.png) no-repeat left' }"></div>
            </div>
            <div v-if="item.page == allPages.length && allPages.length % 2 == 0" class="normal_right_border">
              <div class="ysj_dsd"></div>
            </div>
            <div v-if="item.page % 2 == 0 && item.page != allPages.length" class="evenshadow"></div>
            <div v-if="item.page % 2 != 0 && item.page != 1" class="oddshadow"></div>

          </div>

          <!-- 第二页目录页 -->
          <div v-if="index == 1"
            style="background-color: #fff;background-size:100% 100% ; width: 100%;height: 100%;overflow: hidden;">
            <div class="topCatalog" :style="{ background: 'url(' + host + '/static/images/catalog.jpg) 100% 100%' }">
            </div>
            <div class="catalogText">目录</div>
            <div class="catalogEn">Contents</div>
            <div class="catalogSeclect" v-for="(item, index) in allCatalog" :key="`test_${index}`">
              <div class="catalogDetail" @click="turnPage(item.page)">
                <div class="singleCatalog">
                  {{ item.title }} : {{ item.describe }}
                </div>
              </div>

              <div class="catalogPageNum">
                P{{ item.page }}
              </div>
            </div>

            <footer class="currentpage">
              <div class="odd-number">2</div>
            </footer>
            <div class="evenshadow"></div>
          </div>

        </div>
      </div>
      <!-- 右边页面厚度效果视图 -->
      <div class="thickness" :style="{ width: thickness_width + 'px', height: thickness_height + 'px' }"></div>
    </div>

    <!-- 阅读器的底部功能视图 -->
    <div class="bottom_bar bottom_tools">
      <!-- 设置外边距 -->
      <div class="center_btn">
        <!-- 放置所有元素的盒子 -->
        <div class="center_btnn">

          <div class="btnbox" @click="turnCatalogPage">
            <div class="btn">
              <el-tooltip content="目录" placement="top" effect="light">
                <el-icon :size="30" style="height:100%;color:aliceblue;">
                  <Reading />
                </el-icon>
              </el-tooltip>
            </div>
          </div>

          <div class="btnbox" @click="turnFirstPage">
            <div class="btn">
              <el-tooltip content="第一页" placement="top" effect="light">
                <el-icon :size="30" style="height:100%;color:aliceblue;">
                  <DArrowLeft />
                </el-icon>
              </el-tooltip>
            </div>
          </div>

          <div class="btnbox" @click="turnPreviousPage">
            <div class="btn">
              <el-tooltip content="上一页" placement="top" effect="light">
                <el-icon :size="30" style="height:100%;color:aliceblue;">
                  <ArrowLeftBold />
                </el-icon>
              </el-tooltip>
            </div>
          </div>

          <div class="bottomNumPageBtn">
            <div class="btn">
              <el-input-number size="large" style="margin: 7px 0px;" v-model="bottomNum" :min="1" :max="allPagesLength"
                :step="1" step-strictly @change="turnPage" />
            </div>
          </div>

          <div class="btnbox" @click="turnNextPage">
            <div class="btn">
              <el-tooltip content="下一页" placement="top" effect="light">
                <el-icon :size="30" style="height:100%;color:aliceblue;">
                  <ArrowRightBold />
                </el-icon>
              </el-tooltip>
            </div>
          </div>

          <div class="btnbox" @click="turnLastPage">
            <div class="btn">
              <el-tooltip content="最后一页" placement="top" effect="light">
                <el-icon :size="30" style="height:100%;color:aliceblue;">
                  <DArrowRight />
                </el-icon>
              </el-tooltip>
            </div>
          </div>

          <div class="btnbox" @click="dblclick_page">
            <div class="btn">
              <el-tooltip v-if="!isZoom" content="放大" placement="top" effect="light">
                <el-icon :size="30" style="height:100%;color:aliceblue;">
                  <ZoomIn />
                </el-icon>
              </el-tooltip>

              <el-tooltip v-if="isZoom" content="缩小" placement="top" effect="light">
                <el-icon :size="30" style="height:100%;color:aliceblue;">
                  <ZoomOut />
                </el-icon>
              </el-tooltip>
            </div>
          </div>

        </div>
      </div>
    </div>


    <!-- 阅读器的右边导航栏目录 -->
    <div v-if="isCatalogOpen == false" @click="onCatalog"
      class="csdn-plugin-note-btn animate__animated animate__bounceInRight">
      <div style="color:black; user-select:none">打开导航栏目录</div>
    </div>
    <div v-if="isCatalogOpen == true" class="cololect-box animate__animated animate__bounceInRight">
      <div class="l_tit">
        <el-icon :size="40" style="margin:30px 0px;">
          <Tickets />
        </el-icon>
        <div style="font-size: 35px;margin: 25px 10px;user-select:none">目录</div>
        <el-icon :size="40" @click="onCatalog" style="margin:30px 0px; cursor: pointer; margin-left: 200px;">
          <CloseBold />
        </el-icon>
      </div>

      <div class="catalog_list">
        <div class="singleBoxIndex" v-for="(item, index) in allCatalog" :key="`test_${index}`">
          <div class="singleBox">
            <div class="catalog_li" @click="turnPage(item.page)">{{ item.title }}: {{ item.describe }} </div>
            <div style="position: absolute;right: 10px;margin-top: 15px;">-->{{ item.page }}</div>
          </div>
          <el-divider />
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import $ from "jquery";
import turn from "../utils/turn";
import 'element-plus/theme-chalk/display.css';
// import { ElMessage } from 'element-plus';
import host from "../utils/host";
import axios from 'axios';

export default {
  name: "Pages",

  data() {
    return {
      // 服务器host
      host,
      page: 1,
      cover: "",
      //放大标志
      isZoom: false,
      //放大倍数
      zoom: 1,
      allPages: [],
      allPagesLength: 10,
      // 该书的所有章节
      allCatalog: [],
      // 导航栏目录打开标志
      isCatalogOpen: false,
      // 书本厚度 高
      thickness_height: 822,
      // 书本厚度 宽
      thickness_width: 0,
      // 书本厚度 左边 高
      thickness_left_height: 822,
      // 书本厚度 左边 宽
      thickness_left_width: 0,
      // 书本
      book_width: 1122,
      book_height: 822,
      //底部按钮页数
      bottomNum: 1,
    };
  },

  created() {
    this.stopMove();
    this.requestBookAllPages(this.$route.params.id);
  },

  mounted() {

  },

  watch: {
    allPages() {
      this.$nextTick(() => {
        this.loodBook();
      })
    }
  },

  methods: {
    loodBook() {
      let self = this, that = this;
      // 加载书籍
      if ($(window).width() > 1024 && $(window).height() > 700) {
        // console.log("大屏幕开始渲染", self.allPages);
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
          // 设置’初始化’页面
          page: self.page,
          // 页面宽度
          width: self.book_width,
          height: self.book_height,
          // 何时事件
          when: {
            // 翻页完成时触发
            turned: function (e, page, view) {
              let thisPage = self.allPages.length - page;
              that.thickness_width = thisPage / 2;
              page == 1 ? that.thickness_left_width = 0 : that.thickness_left_width = page / 2;
              self.bottomNum = page;
            },

            missing: function (e, pages) {
              // console.log(pages);
              if (page == 1) {
                for (let i = 1; i < self.allPages.length; i++) {
                  self.allPages[i]++;
                }
              }
            },

            // 开始翻页时触发
            turning: function (e, page, view) {
              if (page == self.allPages.length && self.isZoom) {
                $(".thickness_left").css("margin-right", "-337px");
              } else if (page == self.allPages.length && self.allPages.length % 2 == 0) {
                $(".thickness_left").css("margin-right", "-281px");
              } else {
                $(".thickness_left").css("margin-right", "0px");
              }

              if (page != 1) {
                $(".thickness_left").css("visibility", "visible");
              }
              if (page != self.allPages.length) {
                $(".thickness").css("visibility", "visible");
              }
            },
            // 点击拖动页脚触发
            start: function (event, pageobject, corner) {
              if (pageobject.page == 1 || pageobject.page == 2) {
                $(".thickness_left").css("visibility", "hidden");
              } else if (pageobject.page == self.allPages.length - 1) {
                $(".thickness").css("visibility", "hidden");
              }
            },

          }
        });

      } else {
        // console.log("小屏幕");
        // 设置阅读器位置
        $("#magazineMobile").turn("center");
        // 设置开始页数
        $("#magazineMobile").turn("page");
        $("#magazineMobile").turn({
          display: "single",
          // 设置过度期间页面的高程
          elevation: 50,
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
          width: 364,
          height: 556,
          when: {
            // 翻页完成时触发
            turned: function (e, page, view) {
              self.bottomNum = page;
            },
          }
        });
        $("#magazineMobile").css("overflow", "visible");
      }
    },

    requestBookAllPages(bookId) {
      var _this = this;
      axios({
        method: "get",
        url: '/book/book',
        params: {
          id: bookId
        }
      }).then((res) => {
        // console.log("res", res);
        if (res.data.code == 200) {
          this.cover = res.data.cover;
          _this.allPages = res.data.page;
          _this.allPages.unshift({
            content: _this.cover,
            page: 1
          },
            {
              content: '',
              page: 2
            })
          for (let i = 2; i < _this.allPages.length; i++) {
            _this.allPages[i].page += 2;
          }
          _this.allPagesLength = _this.allPages.length;
          this.allCatalog = res.data.chapter;
          for (let i = 0; i < this.allCatalog.length; i++) {
            this.allCatalog[i].page += 2;
          }
          this.thickness_width = this.allPages.length / 2;
        }
      })
    },

    dblclick_page() {
      this.changeFilpbookView();
      this.doublechangeBookView();
    },

    //放大后改变厚度位置
    changeFilpbookView() {
      var currentPage = $("#magazine").turn("page");
      switch (this.zoom) {
        case 1:
          this.zoom = 1.1;
          if (this.isLastPage(currentPage)) {
            $(".thickness_left").css("margin-right", "-311px");
            $(".normal_right_border").css("margin-left", "605px");
          }
          this.Move();
          break;
        case 1.1:
          this.zoom = 1.2;
          if (this.isLastPage(currentPage)) {
            $(".thickness_left").css("margin-right", "-337px");
            $(".normal_right_border").css("margin-left", "664px");
          }
          break;
        case 1.2:
          this.zoom = 1.3;
          if (this.isLastPage(currentPage)) {
            $(".thickness_left").css("margin-right", "-367px");
            $(".normal_right_border").css("margin-left", "714px");
          }
          break;
        case 1.3:
          this.zoom = 1.4;
          if (this.isLastPage(currentPage)) {
            $(".thickness_left").css("margin-right", "-397px");
            $(".normal_right_border").css("margin-left", "774px");
          }
          break;
        case 1.4:
          this.zoom = 1.5;
          if (this.isLastPage(currentPage)) {
            $(".thickness_left").css("margin-right", "-427px");
            $(".normal_right_border").css("margin-left", "834px");
          }
          break;
        case 1.5:
          this.zoom = 1;
          if (this.isLastPage(currentPage)) {
            $(".normal_right_border").css("margin-left", "555px");
            $(".thickness_left").css("margin-right", "-281px");
          }
          break;
        default:
          break;
      }
    },

    //判断是否最后一页
    isLastPage(singlePage) {
      if (singlePage == this.allPages.length && this.allPages.length % 2 == 0) {
        return true;
      } else {
        return false;
      }
    },

    //放大后改变书本
    doublechangeBookView() {
      $("#magazine").turn("zoom", this.zoom);
      this.thickness_height = this.thickness_left_height = this.book_height * this.zoom;
      if (this.zoom == 1 || this.zoom == 1.5) {
        this.isZoom = !this.isZoom;
      }
    },

    //跳转最后一页判断放大倍数来改变厚度位置
    isLastPageAndChangeThickness() {
      var currentPage = $("#magazine").turn("page");
      console.log("this.zoom", this.zoom);
      switch (this.zoom) {
        case 1:
          if (this.isLastPage(currentPage)) {
            $(".thickness_left").css("margin-right", "-281px");
            $(".normal_right_border").css("margin-left", "555px");
          }
          break;
        case 1.1:
          if (this.isLastPage(currentPage)) {
            $(".thickness_left").css("margin-right", "-311px");
            $(".normal_right_border").css("margin-left", "605px");
          }
          break;
        case 1.2:
          if (this.isLastPage(currentPage)) {
            $(".thickness_left").css("margin-right", "-337px");
            $(".normal_right_border").css("margin-left", "664px");


          }
          break;
        case 1.3:
          if (this.isLastPage(currentPage)) {
            $(".thickness_left").css("margin-right", "-367px");
            $(".normal_right_border").css("margin-left", "714px");


          }
          break;
        case 1.4:
          if (this.isLastPage(currentPage)) {
            $(".thickness_left").css("margin-right", "-397px");
            $(".normal_right_border").css("margin-left", "774px");


          }
          break;
        case 1.5:
          if (this.isLastPage(currentPage)) {
            $(".thickness_left").css("margin-right", "-427px");
            $(".normal_right_border").css("margin-left", "834px");
          }
          break;
        default:
          break;
      }
    },

    dblclick_pageMobile() {
      var currentPage;
      // 判断是否已经放大
      if (this.isZoom == false) {
        let fangda = 1.1;
        currentPage = $("#magazineMobile").turn("page");
        if (currentPage == this.allPages.length) {
          $(".normal_right_border_mobile").css("visibility", "hidden");
        }
        $("#magazineMobile").turn("zoom", fangda);
        this.isZoom = true;
      } else {
        currentPage = $("#magazineMobile").turn("page");
        if (currentPage == this.allPages.length) {
          $(".normal_right_border_mobile").css("visibility", "visible");
        }
        $("#magazineMobile").turn("zoom", 1);
        this.isZoom = false;
      }
    },

    turnFirstPage() {
      $("#magazine").turn("page", 1);
      $(".thickness_left").css("visibility", "hidden");
    },

    turnFirstPageMobile() {
      $("#magazineMobile").turn("page", 1);
    },

    turnLastPage() {
      $("#magazine").turn("page", this.allPages.length);
      $(".thickness").css("visibility", "hidden");
      $(".thickness_left").css("visibility", "visible");
      this.isLastPageAndChangeThickness();

    },

    turnLastPageMobile() {
      $("#magazineMobile").turn("page", this.allPages.length);
    },

    turnPreviousPage() {
      $("#magazine").turn("previous");
    },

    turnPreviousPageMobile() {
      $("#magazineMobile").turn("previous");
    },

    turnNextPage() {
      $("#magazine").turn("next");
      this.isLastPageAndChangeThickness();
    },

    turnNextPageMobile() {
      $("#magazineMobile").turn("next");
    },

    turnPage(page) {
      if (page == 1) {
        $(".thickness_left").css("visibility", "hidden");
      } else if (page == this.allPages.length) {
        $(".thickness").css("visibility", "hidden");
        $(".thickness_left").css("visibility", "visible");
      } else {
        $(".thickness_left").css("visibility", "visible");
        $(".thickness").css("visibility", "visible");
      }
      if (page > this.allPages.length) {
        this.turnLastPage();
      } else {
        $("#magazine").turn("page", page);
      }

    },

    turnPageMobile(page) {
      if (page > this.allPages.length) {
        this.turnLastPageMobile();
      } else {
        $("#magazineMobile").turn("page", page);
      }
    },

    turnCatalogPage() {
      $("#magazine").turn("page", 2);
    },

    turnCatalogPageMobile() {
      $("#magazineMobile").turn("page", 2);
    },

    onCatalog() {
      this.isCatalogOpen = !this.isCatalogOpen;
    },

    //停止页面滚动
    stopMove() {
      let m = function (e) { e.preventDefault(); };
      document.body.style.overflow = 'hidden';
      //禁止页面滑动
      // document.addEventListener("touchmove", m, { passive: false });

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
    },

    //页面元素拖动
    Move() {
      let dragBox = document.getElementsByClassName("flipbook-viewport")[0]; //获取当前元素
      dragBox.onmousedown = e => {
        //算出鼠标相对元素的位置
        let disX = e.clientX - dragBox.offsetLeft;
        let disY = e.clientY - dragBox.offsetTop;
        document.onmousemove = e => {
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX;
          let top = e.clientY - disY;
          //移动当前元素
          dragBox.style.left = left + "px";
          dragBox.style.top = top + "px";
        };
        document.onmouseup = e => {
          //鼠标弹起来的时候不再移动
          document.onmousemove = null;
          //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）  
          document.onmouseup = null;
        };
      };

    }

  },

};
</script>
<style scoped>
body {
  z-index: 50;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.magazineMobileView {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

/deep/.magazineMobileView .page {
  background-color: white !important;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.bottom_bar_mobile {
  bottom: 0;
  text-align: center;
}

.bottom_tools_mobile {
  position: fixed;
  height: 54px;
  width: 100%;
  z-index: 777000;
  background: rgba(0, 0, 0, 0.6);
}

.topCatalog {
  margin: 0;
  padding: 0;
  /* background: url("http://huadajiyin_book.wdsjxiaochen.xin/book/images/catalog.jpg") 100% 100%; */
  height: 20%;
  width: 100%;
}

.catalogText {
  position: absolute;
  user-select: none;
  width: 210px;
  left: 43px;
  top: 93px;
  font-size: 69px;
}

.catalogTextMobile {
  position: absolute;
  user-select: none;
  width: 210px;
  left: 43px;
  top: 43px;
  font-size: 49px;
}

.catalogEn {
  position: absolute;
  user-select: none;
  width: 230px;
  left: 196px;
  top: 138px;
  font-size: 28px;
  word-wrap: break-word;
  color: rgba(47, 108, 115, 0.64);
}

.catalogEnMobile {
  position: absolute;
  user-select: none;
  width: 230px;
  left: 150px;
  top: 76px;
  font-size: 20px;
  word-wrap: break-word;
  color: rgba(47, 108, 115, 0.64);
}

.catalogSeclect {
  display: flex;
  flex-direction: row;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.catalogSeclect:hover,
.catalogSeclect:active {
  background-color: #ccc;
}

.catalogDetail {
  margin: 0px 0px 0px 40px;
  height: 100%;
  width: 80%;
}

.singleCatalog {
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 10px;
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  cursor: pointer;
}

.singleCatalogMobile {
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  cursor: pointer;
}

.catalogPageNum {
  position: absolute;
  font-size: 22px;
  margin-top: 20px;
  user-select: none;
  right: 30px;
}

.catalogPageNumMobile {
  position: absolute;
  font-size: 16px;
  margin-top: 10px;
  user-select: none;
  right: 15px;
}

.bottom_bar {
  bottom: 0;
  text-align: center;
  transition: transform 500ms, -webkit-transform 500ms;
}

.bottom_tools {
  position: fixed;
  height: 54px;
  width: 100%;
  z-index: 777000;
  background: rgba(0, 0, 0, 0.6);
}

.center_btn {
  height: 100%;
  width: 804px;
  margin: 0 auto;
  text-align: center;
}

.center_btn_mobile {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.center_btnn {
  display: block;
  height: 100%;
  margin: 0 0 0 80px;
}

.center_btnn_mobile {
  display: block;
  height: 100%;
  margin: 0 0 0 30px;
}

.btnbox {
  width: 42px;
  height: 100%;
  float: left;
  display: block;
  padding: 0;
  margin-right: 30px;
}

.btnbox_mobile {
  width: 32px;
  height: 100%;
  float: left;
  display: inline-block;
  padding: 0;
  margin-right: 10px;
}

.bottomNumPageBtn {
  width: 200px;
  height: 100%;
  float: left;
  display: inline-block;
  padding: 0;
  margin-right: 30px;
}

.bottomNumPageBtnMobile {
  width: 110px;
  height: 100%;
  float: left;
  display: inline-block;
  padding: 0;
  margin-right: 10px;
}

.btn {
  width: 100%;
  height: 100%;
  -webkit-box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  position: relative;
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

.l_tit {
  color: #fff;
  line-height: 42px;
  margin-left: 30px;
  font-size: 1em;
  display: flex;
  flex-direction: row;
}

.catalog_list {
  color: #fff;
  padding: 10px 10px 10px 0;
  font-size: 20px;
  margin-left: -10px;
  height: calc(100% - 62px);
}

.singleBoxIndex {
  margin: 0 0 0 20px;
  user-select: none;
}

.singleBox {
  display: flex;
  flex-direction: row;
}

.singleBox:hover,
.singleBox:active {
  background-color: #ccc;
}


.catalog_li {
  padding: 0 5px 0 5px;
  margin: 20px 20px;
  width: 80%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.csdn-plugin-note-btn {
  position: fixed;
  z-index: 100;
  width: 25px;
  box-sizing: content-box;
  right: 0px;
  top: 20%;
  color: rgb(255, 255, 255);
  background: #fff;
  cursor: pointer;
  border-bottom-left-radius: 6px;
  padding: 10px 5px;
  border-top-left-radius: 6px;
  font-size: 16px;
  letter-spacing: 4px;
  box-shadow: 0px 2px 12px 0px rgb(123 123 123 / 26%);
}

.cololect-box {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
  position: absolute;
  overflow-y: scroll;
  overflow-x: hidden;
  background: rgba(0, 0, 0, 0.773);
  width: 450px;
  top: 0px;
  bottom: 54px;
  right: 0px;
  /* cursor: pointer; */
  z-index: 888000;
  display: flex;
  flex-direction: column;
  border-radius: 8px 0 0 8px;
}

.catalogFalse_button {
  right: 0;
  background: #fff;
  height: 100%;
  backdrop-filter: blur(5px);
}

.catalogFalse_tools {
  width: 164px;
  height: 20px;
  position: absolute;
  top: 15%;
  bottom: 15%;
  cursor: pointer;
  z-index: 888000;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
}

.background {
  /* background: url("http://huadajiyin_book.wdsjxiaochen.xin/book/images/background.jpg") no-repeat; */
  background-size: cover;
  width: 100%;
  min-height: 100vh;
}

.flipbook-viewport {
  min-height: 100vh;
  position: relative;
  top: 0px;
  left: 0px;
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

.firstShadow {
  left: 0;
  top: 0;
  width: 2%;
  height: 100%;
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(20, 20, 20, 0.5)), to(rgba(240, 240, 200, 0)));
}

.pageFirstShadow {
  /* background: url("http://huadajiyin_book.wdsjxiaochen.xin/book/images/zsj_dsd.png") no-repeat left; */
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  left: -1px;
}

.normal_right_border {
  right: 0;
  top: 0;
  width: 2%;
  height: 100%;
  background-image: -webkit-gradient(linear, right top, left top, from(rgba(20, 20, 20, 0.5)), to(rgba(240, 240, 200, 0)));
  margin-left: 555px;
}

.normal_right_border_mobile {
  right: 0;
  top: 0;
  width: 2%;
  height: 100%;
  background-image: -webkit-gradient(linear, right top, left top, from(rgba(20, 20, 20, 0.5)), to(rgba(240, 240, 200, 0)));
  margin-left: 358px;
}

.ysj_dsd {
  background: url("http://huadajiyin_book.wdsjxiaochen.xin/book/images/zsj_dsd.png") no-repeat right;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  right: -1px;
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
  top: 0;
  left: 0;
  height: 100%;
  width: 15%;
  pointer-events: none;
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(60, 60, 60, 0.4)), color-stop(40%, rgba(60, 60, 60, 0.2)), color-stop(60%, rgba(60, 60, 60, 0.1)), to(rgba(200, 200, 200, 0)));
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
}
</style>