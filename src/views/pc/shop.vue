<template>
  <div class="container">
    <div class="roll">
      <div class="main">
        <div class="swiper">
          <img src="../../assets/skirt.png" class="img">
        </div>
        <div class="text">
          <p class="title">{{text.title}}</p>
          <p class="content">{{text.content}}</p>
        </div>
        <div class="detail">
          <div class="left">
            <p class="title">Filter</p>
            <p class="name p">category</p>
            <p class="category p">Men’s running shoes</p>
            <div class="choice">
              <el-collapse v-model="activePrice" :accordion="true">
                <el-collapse-item title="Price" name="1">
                  <div class="box">
                    <div class="num">
                      <span class="min">${{`${slider.min}`}}</span>
                      <span class="max">${{`${slider.max}`}}</span>
                    </div>
                    <div class="slider">
                      <el-slider v-model="slider.value" :min="slider.min" :max="slider.max" range></el-slider>
                    </div>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="Product Type" name="2">
                  <div class="navLi" role="li">
                    1
                  </div>
                </el-collapse-item>
                <el-collapse-item title="Colour" name="3">
                  <div class="navLi" role="li">
                    1
                  </div>
                </el-collapse-item>
                <el-collapse-item title="Size" name="4">
                  <div class="navLi" role="li">
                    1
                  </div>
                </el-collapse-item>
                <el-collapse-item title="Fit" name="5">
                  <div class="navLi" role="li">
                    1
                  </div>
                </el-collapse-item>
                <el-collapse-item title="Brands" name="6">
                  <div class="navLi" role="li">
                    1
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
          <div class="right">
            <div class="head">
              <!-- <div class="div div1">Filter</div> -->
              <div class="div div2">
                <span :class="{span:true,span1:true,active:activeType===0}" @click="handleType(0)"> Product</span>
                <span class="span span2"></span>
                <span :class="{span:true,span3:true,active:activeType===1}" @click="handleType(1)"> Scences</span>
              </div>
              <div class="div div3">
                <div class="box" @click="handleColumn(4)">
                  <div :class="{rectangle:true,rectangle1:true,active:activeColumn===4}" v-for="(item, index) in 4" :key="index"></div>
                </div>
                <div class="box" @click="handleColumn(3)">
                  <div :class="{rectangle:true,rectangle2:true,active:activeColumn===3}" v-for="(item, index) in 3" :key="index"></div>
                </div>
                <div class="box" @click="handleColumn(2)">
                  <div :class="{rectangle:true,rectangle3:true,active:activeColumn===2}" v-for="(item, index) in 2" :key="index"></div>
                </div>
              </div>
              <div class="div div4">
                <el-select v-model="value" placeholder="Best Match">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="div div5">315 results</div>
            </div>
            <div class="imgList">
              <div :class="{aBox3:activeColumn===3,aBox4:activeColumn===4,aBox2:activeColumn===2}" v-for="(item,i) in imgArr" :key="i">
                <div class="img">
                  <el-image style="width: 100%; height: 100%" :src="item.url" fit="fit"></el-image>
                </div>
                <p class="p1 name">{{item.name}}</p>
                <div class="p2">
                  <div class="price newPrice">${{item.price_new}}</div>
                  <div class="price oldPrice">${{item.price_old}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { judgePlatform } from '@/mixins/mixins';
export default {
  name: 'ShopPc',
  mixins: [judgePlatform],
  components: {
    // eslint-disable-next-line vue/no-unused-components
  },
  created () {
    const vm = this;
    vm.onload();
  },
  mounted () {
  },
  beforeDestroy () {
  },
  data () {
    return {
      text: {
        title: 'Men\'s Running Shoes',
        content: ' Attack the pavement, trails or any route with men\'s running shoes equipped with the latest Nike footwear technologies. Featuring signature styles like the Nike Epic React, Zoom Fly and Pegasus, men\'s running shoes offer options for all runners and running styles.'
      },
      options: [{
        value: '选项1',
        label: 'Best Match'
      }, {
        value: '选项2',
        label: 'Newest'
      }, {
        value: '选项3',
        label: 'Price - Low To High'
      }, {
        value: '选项4',
        label: 'Price - High To Low'
      }],
      value: '',
      activeColumn: 3,
      activeType: 0,
      activePrice: '1',
      slider: {
        min: 8.00,
        max: 198.00,
        // eslint-disable-next-line
        value: [8.00, 198.00],
        // 显示当前滑到的范围
        // marks: {
        //   0: '0°C',
        //   50: {
        //     style: {
        //       color: '#1989FA'
        //     },
        //     label: this.$createElement('strong', '50%')
        //   }
        // }
      },
      imgArr: [],
      products: [
        { url: require('@/assets/product.jpg'), name: 'Bow Tie Front Stripe', price_new: '225', price_old: '667' },
        { url: require('@/assets/product.jpg'), name: 'Bow Tie Front Stripe', price_new: '225', price_old: '667' },
        { url: require('@/assets/product.jpg'), name: 'Bow Tie Front Stripe', price_new: '225', price_old: '667' },
        { url: require('@/assets/product.jpg'), name: 'Bow Tie Front Stripe', price_new: '225', price_old: '667' },
        { url: require('@/assets/product.jpg'), name: 'Bow Tie Front Stripe', price_new: '225', price_old: '667' },
        { url: require('@/assets/product.jpg'), name: 'Bow Tie Front Stripe', price_new: '225', price_old: '667' },
        { url: require('@/assets/product.jpg'), name: 'Bow Tie Front Stripe', price_new: '225', price_old: '667' }
      ],
      scenes: [
        { url: require('@/assets/scenes.png'), name: 'Bow Tie Front Stripe', price_new: '225', price_old: '667' },
        { url: require('@/assets/scenes.png'), name: 'Bow Tie Front Stripe', price_new: '225', price_old: '667' },
        { url: require('@/assets/scenes.png'), name: 'Bow Tie Front Stripe', price_new: '225', price_old: '667' },
        { url: require('@/assets/scenes.png'), name: 'Bow Tie Front Stripe', price_new: '225', price_old: '667' },
        { url: require('@/assets/scenes.png'), name: 'Bow Tie Front Stripe', price_new: '225', price_old: '667' },
        { url: require('@/assets/scenes.png'), name: 'Bow Tie Front Stripe', price_new: '225', price_old: '667' },
        { url: require('@/assets/scenes.png'), name: 'Bow Tie Front Stripe', price_new: '225', price_old: '667' }
      ]
    };
  },
  computed: {
    // id () {
    //   return sessionStorage.getItem('taskId');
    // }
  },
  methods: {
    onload () {
      const vm = this;
      vm.imgArr = vm.products;
    },
    handleColumn (column) {
      const vm = this;
      switch (column) {
        case 4:
          vm.activeColumn = 4;
          break;
        case 3:
          vm.activeColumn = 3;
          break;
        case 2:
          vm.activeColumn = 2;
          break;
      }
    },
    handleType (type) {
      const vm = this;
      switch (type) {
        case 0:
          [vm.activeType, vm.imgArr] = [0, vm.products];
          break;
        case 1:
          [vm.activeType, vm.imgArr] = [1, vm.scenes];
          break;
      }
    }
  }
};
</script>

<style scoped lang="less" >
@bgcolor: #f7f7f8;
@fontsize: 12px;
@color: #323233;
@pdleft: 12px;
@fwMedium: 550;
// mixin
.centerBox() {
  display: flex;
  justify-content: center;
  align-items: center;
}
/*
@height：盒子的高度
@width:盒子的宽度
@count：一行显示多少个盒子
调用：
.taskBox {
        .flexWrapBox(180px,180px,2);
        .contentBox{
          background-color: #0c0c0c;
        }
      }
*/
.flexWrapBox(@height,@width,@count) {
  min-height: @height;
  max-width: (@count* @width);
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  // background-color: #0373f8;
  .contentBox {
    height: @height;
    width: @width;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.container {
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  .roll {
    flex: 1;
    padding: 56px 0px;
    .main {
      width: 1080px;
      margin: 0 auto;
      .swiper {
        cursor: pointer;
        height: 280px;
        background-color: rgba(247, 247, 247, 1);
        .centerBox();
        .img {
          width: 322px;
          height: 173px;
        }
      }
      .text {
        margin-top: 24px;
        .title {
          font-size: 34px;
          font-weight: bold;
          padding: 16px 0px;
        }
        .content {
          font-size: 16px;
          font-weight: 400;
          color: rgba(119, 119, 119, 1);
          line-height: 24px;
        }
      }
      .detail {
        margin-top: 80px;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        .left {
          // background-color: gray;
          margin-right: 20px;
          width: 196px;
          position: sticky;
          top: 0;
          padding: 6px 16px 6px 0;
          .title {
            font-size: 16px;
            font-weight: bold;
            color: rgba(34, 34, 34, 1);
            padding-top: 8px;
          }
          .p {
            margin-top: 12px;
            height: 17px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            line-height: 17px;
          }
          .choice {
            margin-top: 24px;
            .box {
              padding: 0px 26px 0 10px;
              .num {
                height: 15px;
                line-height: 15px;
                font-size: 13px;
                font-weight: 400;
                color: rgba(34, 34, 34, 1);
                display: flex;
                justify-content: space-between;
              }
              .slider {
                padding: 0px 12px 0px 10px;
                /deep/ .el-slider__bar {
                  background-color: rgba(0, 0, 0, 1);
                  height: 2px;
                }
                /deep/ .el-slider__runway {
                  height: 2px;
                }
                /deep/ .el-slider__button {
                  box-sizing: border-box;
                  height: 12px;
                  width: 12px;
                  background-color: rgba(0, 0, 0, 1);
                  border: 0px solid rgba(0, 0, 0, 1);
                }
              }
            }
            // 折叠面板
            /deep/ .el-collapse-item__header {
              font-size: 14px;
              font-family: Roboto-Regular, Roboto;
              font-weight: 400;
              color: rgba(34, 34, 34, 1);
            }
            /deep/ .el-collapse-item__arrow {
              font-weight: 900;
            }
          }
        }
        .right {
          flex: 1;
          padding: 6px 0px;
          // position: sticky;
          // top: 0;
          .head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 10px;
            .div {
              .centerBox();
            }
            .div1 {
              font-size: 16px;
              font-weight: bold;
              color: rgba(34, 34, 34, 1);
            }
            .div2 {
              font-size: 14px;
              font-weight: 500;
              .span {
                display: inline-block;
                cursor: pointer;
              }
              .span1 {
                margin-right: 8px;
                color: rgba(204, 204, 204, 1);
              }
              .span2 {
                width: 1px;
                height: 32px;
                background-color: rgba(216, 216, 216, 1);
              }
              .span3 {
                margin-left: 8px;
                color: rgba(204, 204, 204, 1);
              }
              .active {
                color: rgba(34, 34, 34, 1);
              }
            }
            .div3 {
              width: 90px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .box {
                cursor: pointer;
                width: 22px;
                height: 22px;
                background-color: #fff;
                display: flex;
                justify-content: space-between;
                box-sizing: border-box;
                // border: 1px dashed gray;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .rectangle {
                  background-color: rgba(232, 232, 232, 1);
                  height: 100%;
                }
                .rectangle1 {
                  width: 18%;
                }
                .rectangle2 {
                  width: 28%;
                }
                .rectangle3 {
                  width: 45%;
                }
                .active {
                  background-color: rgba(34, 34, 34, 1);
                }
              }
            }
            .div5 {
              font-size: 14px;
              font-weight: 400;
              color: rgba(34, 34, 34, 1);
            }
          }
          .imgList {
            box-sizing: border-box;
            margin: 0 auto;
            width: 857px;
            padding: 24px 0px;
            display: flex;
            flex-wrap: wrap;
            // 一行三列
            .aBox3 {
              width: 33.33%;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding-bottom: 32px;
              font-family: Tahoma;
              .img {
                height: 260px;
                width: 260px;
              }
              .p1 {
                height: 16px;
                font-size: 13px;
                color: rgba(119, 119, 119, 1);
                line-height: 16px;
                padding: 12px 0px;
              }
              .p2 {
                display: flex;
                .price {
                  font-size: 15px;
                  margin: 0 6px;
                }
                .oldPrice {
                  position: relative;
                  color: rgba(119, 119, 119, 1);
                  &:after {
                    content: '———';
                    width: 100%;
                    overflow: hidden;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                  }
                }
                .newPrice {
                  color: rgba(33, 33, 33, 1);
                }
              }
            }
            // 一行四列
            .aBox4 {
              width: 25%;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding-bottom: 32px;
              font-family: Tahoma;
              .img {
                height: 180px;
                width: 180px;
              }
              .p1 {
                height: 16px;
                font-size: 13px;
                color: rgba(119, 119, 119, 1);
                line-height: 16px;
                padding: 12px 0px;
              }
              .p2 {
                display: flex;
                .price {
                  font-size: 15px;
                  margin: 0 6px;
                }
                .oldPrice {
                  position: relative;
                  color: rgba(119, 119, 119, 1);
                  &:after {
                    content: '———';
                    width: 100%;
                    overflow: hidden;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                  }
                }
                .newPrice {
                  color: rgba(33, 33, 33, 1);
                }
              }
            }
            // 一行两列
            .aBox2 {
              width: 50%;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding-bottom: 32px;
              font-family: Tahoma;
              .img {
                height: 440px;
                width: 320px;
              }
              .p1 {
                height: 16px;
                font-size: 13px;
                color: rgba(119, 119, 119, 1);
                line-height: 16px;
                padding: 12px 0px;
              }
              .p2 {
                display: flex;
                .price {
                  font-size: 15px;
                  margin: 0 6px;
                }
                .oldPrice {
                  position: relative;
                  color: rgba(119, 119, 119, 1);
                  &:after {
                    content: '———';
                    width: 100%;
                    overflow: hidden;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                  }
                }
                .newPrice {
                  color: rgba(33, 33, 33, 1);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
