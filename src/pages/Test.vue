<template>

  <div class="background hidden-sm-and-up">
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
                <div class="pageFirstShadow"></div>
              </div>
              <div v-if="allPages.length / 2 == 0" class="normal_right_border_mobile">
                <div class="ysj_dsd"></div>
              </div>
            </div>
            <!-- 目录页 -->
            <div v-if="index == 1"
              style="background-color: #fff;background-size:100% 100% ; width: 100%;height: 100%;overflow: hidden;">
              <div class="topCatalog"></div>
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
                  :max="allPages.length" :step="1" @change="turnPageMobile" />
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


  <div class="background hidden-sm-and-down">
    <!-- 阅读器整个视图 -->
    <div class="flipbook-viewport animate__animated animate__zoomInRight ">
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
              <div class="pageFirstShadow"></div>
            </div>
            <div v-if="item.page == allPages.length && allPages.length / 2 == 0" class="normal_right_border">
              <div class="ysj_dsd"></div>
            </div>
            <div v-if="item.page % 2 == 0 && item.page != allPages.length" class="evenshadow"></div>
            <div v-if="item.page % 2 != 0 && item.page != 1" class="oddshadow"></div>

          </div>

          <!-- 第二页目录页 -->
          <div v-if="index == 1"
            style="background-color: #fff;background-size:100% 100% ; width: 100%;height: 100%;overflow: hidden;">
            <div class="topCatalog"></div>
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
              <el-input-number size="large" style="margin: 7px 0px;" v-model="bottomNum" :min="1" :max="allPages.length"
                :step="1" @change="turnPage" />
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
export default {

}
</script>

<style lang="scss" scoped>
</style>