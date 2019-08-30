<template>
  <div class="show">
    <div class="pic" :style="{transform:show?'translateX(0)':'translateX(-50%)'}">
      <img class="picone" src="../assets/home/u124.jpg" alt />
      <img class="pictwo" src="../assets/home/u127.jpg" alt />
    </div>
    <div @click="changeShow" class="click">
      <span></span>
    </div>
    <div class="container" :style="{transform:show?'translateX(0)':'translateX(-50%)'}">
      <div class="now">
        <ul>
          <!-- <router-link to="/inshow"> -->
          <li v-for="work in works" :key="work.id">
            <img :src="work.src" alt />
            <button>剩余{{work.day}}天</button>
            <div class="icon">
              <span class="iconfont icon-zhuanfa"></span>
              <span class="iconfont icon-xin" @click="changeIcon()">
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
          <!-- </router-link> -->
        </ul>
      </div>
      <div class="then">
        <ul>
          <li v-for="thenwork in thenworks" :key="thenwork.id">
            <img :src="thenwork.src" alt />
            <button>剩余{{thenwork.day}}天</button>
            <div class="icon">
              <span class="iconfont icon-zhuanfa"></span>
              <span class="iconfont icon-xin" @click="addCollect()">
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
export default {
  name: "show",
  data() {
    return {
      show: true,
      works: [
        {
          id: 1,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/img.png",
          collect: "159",
          look: "394",
          comment: "9",
          day: "3"
        },
        {
          id: 2,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/imgtwo.png",
          collect: "239",
          look: "526",
          comment: "52",
          day: "8"
        },
        {
          id: 3,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/imgthree.png",
          collect: "329",
          look: "227",
          comment: "29",
          day: "11"
        },
        {
          id: 4,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/imgfour.png",
          collect: "259",
          look: "394",
          comment: "49",
          day: "5"
        },
        {
          id: 5,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/imgfive.png",
          collect: "159",
          look: "394",
          comment: "9",
          day: "7"
        }
      ],
      thenworks: [
        {
          id: 1,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/banner1.png",
          collect: "159",
          look: "394",
          comment: "9",
          day: "13"
        },
        {
          id: 2,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/banner2.png",
          collect: "159",
          look: "394",
          comment: "9",
          day: "4"
        },
        {
          id: 3,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/banner3.png",
          collect: "159",
          look: "394",
          comment: "9",
          day: "9"
        },
        {
          id: 4,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/banner4.png",
          collect: "159",
          look: "394",
          comment: "9",
          day: "5"
        },
        {
          id: 5,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/banner5.png",
          collect: "159",
          look: "394",
          comment: "9",
          day: "3"
        }
        // {
        //   id: 6,
        //   src:
        //     "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/banner6.png",
        //   collect: "359",
        //   look: "294",
        //   comment: "19",
        //   day: "5"
        // }
      ]
    };
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    },
    addCollect() {
      console.log("11");
      this.collect++;
    }
  }
};
</script>
<style>
.show {
  position: relative;
  width: 100vw;
  overflow: hidden;
}
.show .pic {
  display: flex;
  width: 200vw;
  height: 32px;
  transition: transform 0.7s;
  /* margin-top: 61px; */
}
.show .pic img {
  width: 100vw;
}
.click {
  width: 100%;
  height: 32px;
  position: absolute;
  left: 0;
  top: 0;
}
.show .container {
  width: 200vw;
  display: flex;
  flex-grow: 1;
  transition: transform 0.7s;
  margin-bottom: 60px;
}
.show .container .now,
.show .container .then {
  width: 100vw;
}
.show .container ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.show .container ul a {
  text-decoration: none;
}
.show .container ul img {
  width: 100%;
}
.show .container ul li {
  position: relative;
}
.show .container ul li .icon {
  position: relative;
  bottom: 30px;
  color: #fff;
  text-align: right;
  padding-right: 20px;
}
.show .container ul li .icon .iconfont {
  padding-right: 5px;
  font-size: 14px;
}
.show .container ul li .icon .num {
  padding-left: 3px;
}
.show .container ul li .icon .iconfont.icon-zhuanfa {
  padding-right: 20px;
}
.show .container ul button {
  width: 70px;
  padding: 5px;
  border: none;
  background-color: rgb(211, 36, 36);
  border-radius: 1rem 0 0 1rem;
  position: absolute;
  top: 20px;
  right: 100vw;
  color: #fff;
}
</style>