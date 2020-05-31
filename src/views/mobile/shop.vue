<template>
  <div class="container">
    <div class="header">
      <div class="left">
        <van-icon size="30" name="wap-nav" />
        <van-icon size="30" name="search" />
      </div>
      <div class="center">BELLERIS</div>
      <div class="right">
        <van-icon size="30" name="contact" style="paddingTop:2px" />
        <van-icon size="30" name="bag-o">
          <span class="num">2</span>
        </van-icon>
      </div>
    </div>
    <div class="roll">
      <div class="main">
        <p class="title">
          Men's Running Shoes
        </p>
        <div class="btns">
          <div class="left">
            <div :class="{btn:true,active:activeType===0}" @click.passive="handleType(0)">SCENES</div>
            <div :class="{btn:true,active:activeType===1}" @click.passive="handleType(1)">PRODUCT</div>
          </div>
          <div class="right">
            <div :class="{btn:true,btn1:true,active:activeColumn===1}" @click.passive="handleColumn(1)"></div>
            <div class="btn btn4">
              <div :class="{block:true,active:activeColumn===2}" @click.passive="handleColumn(2)" v-for="(item, index) in 4" :key="index"></div>
            </div>
          </div>
        </div>
        <div class="choice">
          <div class="left" @click.passive="handleSort()">
            <span> {{choice.selected}}</span>
            <van-icon style="marginLeft:6px;paddingTop:2px;" name="arrow-down" color="rgba(201, 201, 201, 1)" />
          </div>
          <div class="line"></div>
          <div class="right">{{`${choice.results}  results`}}</div>
          <!-- 弹出层 -->
          <van-popup v-model="choice.showSelects" position="bottom" safe-area-inset-bottom class="popup">
            <div class="poptitle">
              <div class="icon-close" @click.passive="closePopup()">
                <van-icon class="icon" color="rgba(0, 0, 0, 1)" name="cross" />
              </div>
              <div class="text">Sorts</div>
            </div>
            <div class="list">
              <div @click.passive="handleSelect(item)" v-for="(item, index) in choice.sort" :key="index" class="li">
                {{item}}
              </div>
            </div>
          </van-popup>
        </div>
        <div class="imgs">
          <div :class="{aBox2:activeColumn===2,aBox1:activeColumn===1}" v-for="(item,i) in imgArr" :key="i">
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

</template>

<script>
// @ is an alias to /src
import { judgePlatform } from '@/mixins/mixins';
export default {
  name: 'ShopMobile',
  mixins: [judgePlatform],
  components: {
    // eslint-disable-next-line vue/no-unused-components
  },
  created () {
    const vm = this;
    vm.onload();
  },
  updated () {
  },
  data () {
    return {
      activeType: 0,
      activeColumn: 2,
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
      ],
      choice: {
        results: 315,
        sort: ['Best Match', 'Newest', 'Price - Low To High', 'Price - High To Low'],
        selected: 'Best Match',
        showSelects: false
      }
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
      vm.imgArr = vm.scenes;
    },
    handleColumn (column) {
      const vm = this;
      switch (column) {
        case 1:
          vm.activeColumn = 1;
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
          [vm.activeType, vm.imgArr] = [0, vm.scenes];
          break;
        case 1:
          [vm.activeType, vm.imgArr] = [1, vm.products];
          break;
      }
    },
    handleSort () {
      this.choice.showSelects = !this.choice.showSelects;
    },
    closePopup () {
      this.choice.showSelects = false;
    },
    handleSelect (selected) {
      this.choice.selected = selected;
      this.closePopup();
    }
  }
};
</script>

<style scoped lang="less" >
@bgcolor: #f7f7f8;
@fontsize: 14px;
@color: #323233;
@pdleft: 15px;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  .header {
    box-sizing: border-box;
    height: 53.5px;
    padding: 0px 15px;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left,
    .right {
      width: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .num {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 12px;
      }
    }
    .center {
      font-size: 20px;
      font-family: Helvetica;
      color: rgba(0, 0, 0, 1);
      letter-spacing: 1px;
    }
  }
  .roll {
    flex: 1;
    overflow-y: auto;
    font-size: @fontsize+2px;
    // padding-bottom: 8px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    .main {
      height: 1000px;
      .title {
        padding: 35px 15px;
        font-size: 17px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(33, 33, 33, 1);
      }
      .btns {
        padding: 0 15px;
        height: 30px;
        display: flex;
        .left {
          flex: 1;
          display: flex;
          .btn {
            flex: 1;
            .centerBox();
            box-sizing: border-box;
            border: 1px solid rgba(225, 225, 225, 1);
            font-size: 11px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: rgba(34, 34, 34, 1);
          }
          .active {
            border: 1px solid rgba(0, 0, 0, 1);
          }
        }
        .right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .btn {
            height: 24px;
            width: 24px;
            box-sizing: border-box;
          }
          .btn1 {
            background-color: rgba(225, 225, 225, 1);
          }
          .active {
            background-color: rgba(0, 0, 0, 1);
          }
          .btn4 {
            margin-left: 24px;
            background-color: #fff;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: space-between;
            .block {
              width: 45%;
              height: 45%;
              background-color: rgba(225, 225, 225, 1);
            }
            .active {
              background-color: rgba(0, 0, 0, 1);
            }
          }
        }
      }
      .choice {
        margin-top: 30px;
        height: 40px;
        border-radius: 2px;
        border: 1px solid rgba(225, 225, 225, 1);
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(34, 34, 34, 1);
        .line {
          width: 1px;
          height: 100%;
          background: rgba(225, 225, 225, 1);
        }
        .left,
        .right {
          flex: 1;
          .centerBox();
        }
        .popup {
          height: 360px;
          font-size: 13px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: rgba(0, 0, 0, 1);
          .poptitle {
            padding: 0px 15px;
            height: 60px;
            position: relative;
            box-sizing: border-box;
            border-bottom: 1px solid rgba(0, 0, 0, 1);
            .icon-close {
              height: 100%;
              width: 15px;
              .centerBox();
              .icon {
                font-size: 15px !important;
              }
            }
            .text {
              letter-spacing: 1.5px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          .li {
            letter-spacing: 1px;
            height: 75px;
            box-sizing: border-box;
            padding: 0 15px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-bottom: 0.5px solid rgba(208, 208, 208, 1);
          }
        }
      }
      .imgs {
        box-sizing: border-box;
        margin: 0 auto;
        // width: 345px;
        padding: 15px 10px;
        display: flex;
        flex-wrap: wrap;
        // 一行两列
        .aBox2 {
          // width: 165px;
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 32px;
          font-family: Tahoma;
          .img {
            width: 165px;
            height: 247.5px;
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
                content: '——';
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
        // 一行一列
        .aBox1 {
          // width: 165px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 32px;
          font-family: Tahoma;
          .img {
            width: 345px;
            height: 345px;
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
                content: '——';
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
</style>
