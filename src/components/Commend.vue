<template>
  <div class="commend">
    <Head />
    <div class="pic" :style="{transform:show?'translateX(0)':'translateX(-50%)'}">
      <img class="picone" src="../assets/commend/u300.jpg" alt />
      <img class="pictwo" src="../assets/commend/u302.jpg" alt />
    </div>
    <div @click="changeShow" class="click">
      <span></span>
    </div>
    <div class="container" :style="{transform:show?'translateX(0)':'translateX(-50%)'}">
      <div class="now">
        <ul>
          <li v-for="work in works" :key="work.id">
            <img :src="work.src" alt />
            <div class="icon">
              <span class="iconfont icon-zhuanfa"></span>
              <span class="iconfont icon-xin">
                <span class="num">{{work.collect}}</span>
              </span>
              <span class="iconfont icon-yanjing">
                <span class="num">{{work.look}}</span>
              </span>
              <span class="iconfont icon-xiaoxi">
                <span class="num">{{work.comment}}</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div class="then">
        <ul>
          <li v-for="thenwork in thenworks" :key="thenwork.id">
            <img :src="thenwork.src" alt />
            <div class="icon">
              <span class="iconfont icon-zhuanfa"></span>
              <span class="iconfont icon-xin">
                <span class="num">{{thenwork.collect}}</span>
              </span>
              <span class="iconfont icon-yanjing">
                <span class="num">{{thenwork.look}}</span>
              </span>
              <span class="iconfont icon-xiaoxi">
                <span class="num">{{thenwork.comment}}</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "../components/Head";
export default {
  name: "commend",
  components: {
    Head
  },
  data() {
    return {
      show: true,
      works: [
        {
          id: 1,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/banner2.png",
          collect: "159",
          look: "394",
          comment: "9"
        },
        {
          id: 2,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/banner3.png",
          collect: "239",
          look: "526",
          comment: "52"
        },
        {
          id: 3,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/banner4.png",
          collect: "329",
          look: "227",
          comment: "29"
        }
      ],
      thenworks: [
        {
          id: 1,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/banner1.png",
          collect: "159",
          look: "394",
          comment: "9"
        },
        {
          id: 2,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/banner2.png",
          collect: "159",
          look: "394",
          comment: "9"
        },
        {
          id: 3,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/banner3.png",
          collect: "159",
          look: "394",
          comment: "9"
        },
        {
          id: 4,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/banner4.png",
          collect: "159",
          look: "394",
          comment: "9"
        },
        {
          id: 5,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/banner5.png",
          collect: "159",
          look: "394",
          comment: "9"
        },
        {
          id: 6,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/banner6.png",
          collect: "159",
          look: "394",
          comment: "9"
        }
      ],
     
    };
  }, methods: {
        changeShow() {
          this.show = !this.show;
        }
      }
};
</script>

<style>
.commend {
  position: relative;
  width: 100vw;
  overflow: hidden;
}
.commend .pic {
  display: flex;
  width: 200vw;
  height: 32px;
  transition: transform 0.7s;
  padding-top: 61px;
}
.commend .pic img {
  width: 100vw;
}
.commend .click {
  width: 100%;
  height: 32px;
  position: absolute;
  left: 0;
  top: 60px;
}
.commend .container {
  width: 200vw;
  display: flex;
  flex-grow: 1;
  transition: transform 0.7s;
  margin-bottom: 60px;
}
.commend .container .now {
  width: 100vw;
}
.commend .container ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.commend .container ul img {
  width: 100vw;
}
.commend .container ul li .icon {
  position: relative;
  bottom: 30px;
  color: #fff;
  text-align: right;
  padding-right: 20px;
}
.commend .container ul li .icon .iconfont {
  padding-right: 5px;
  font-size: 14px;
}
.commend .container ul li .icon .num {
  padding-left: 3px;
}
.commend .container ul li .icon .iconfont.icon-zhuanfa {
  padding-right: 20px;
}
</style>