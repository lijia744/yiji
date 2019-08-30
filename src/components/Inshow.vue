<template>
  <div class="inshow">
    <router-link to="/zhanxun">
      <div class="return"><</div>
    </router-link>
    <div class="main">
      <img src="../assets/home/img.png" alt />
      <button>展览内容</button>
      <p>旅游，尝试着走出去，你才会发现，世界远不是你在出生的城市一呆几十年所看的那样，你会结识不同的人听到各种曲折的故事交到一辈子的朋友。</p>
      <img src="../assets/inshow/u194_02.png" alt />
      <p>人生就是一次充满未知的旅行，在乎的是沿途的风景，在乎的是看风景的心情，旅行不会因为美丽的风景终止。</p>
      <img src="../assets/inshow/u194_04.png" alt />
      <img src="../assets/inshow/u194_06.png" alt />
      <img src="../assets/inshow/u194_08.png" alt />
      <button>展览评论</button>
      <div class="commend">
        <ul>
          <li v-for="commend in commends" :key="commend.id">
            <div class="box">
              <img :src="commend.src" alt />
              <div class="name">
                <h4>{{commend.name}}</h4>
                <span>{{commend.date}}</span>
                <p>{{commend.text}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bot">
      <div class="inner">
        <div>
          <span
            :class="{red: !isChange,white: isChange}"
            @click="isChange=!isChange"
            class="iconfont icon-xin"
          ></span>
          <span class="text">关注</span>
        </div>
        <div>
          <span class="iconfont icon-luxian"></span>
          <span class="text">到这</span>
        </div>
        <div>
          <span class="iconfont icon-zhuanfa"></span>
          <span class="text">分享</span>
        </div>
        <div>
          <span class="iconfont icon-xiaoxi"></span>
          <span class="text">评论</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inshow",
  data() {
    return {
      commends: [
        {
          id: 1,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/20161209001222_3SzVE.jpeg",
          name: "哈哈",
          date: "2016.08.19",
          text: "很好，稀罕"
        },
        {
          id: 2,
          src:
            "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/20161209001222_3SzVE.jpeg",
          name: "哈哈",
          date: "2016.08.19",
          text: "非常好，稀罕"
        }
      ],
      isChange: true
    };
  }
  // methods: {
  //   changeColor() {
  //     if ((this.style.color = "white")) {
  //       this.style.color = "red";
  //     } else {
  //       this.style.color = "red";
  //     }
  //   }
  // }
};
</script>

<style>
.inshow .red {
  color: red;
}
.inshow .white {
  color: white;
}
.inshow .return {
  position: fixed;
  color: #fff;
  font-size: 30px;
  padding: 10px 0 0 20px;
}
.inshow .main {
  padding-bottom: 46px;
}
.inshow img {
  width: 100%;
  display: block;
}
.inshow button {
  border: none;
  background-color: rgb(230, 56, 56);
  border-radius: 0 1rem 1rem 0;
  color: #fff;
  padding: 5px 10px;
}
.inshow p {
  width: 90%;
  margin: 0 auto;
  font-size: 14px;
  padding: 5px 0;
}
.inshow .bot {
  width: 100vw;
  background-color: #000;
  color: #fff;
  position: fixed;
  bottom: 0;
}
.inshow .bot .inner {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
}
.inshow .bot .inner span {
  font-size: 12px;
}
.inshow .bot .inner .text {
  padding-left: 3px;
}
.inshow .commend ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.inshow .commend ul li {
  padding: 15px 0 5px 20px;
  background-color: rgb(235, 228, 228);
  margin-bottom: 2px;
}
.inshow .commend ul li .box {
  display: flex;
  font-size: 12px;
}
.inshow .commend ul li .box img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding-right: 15px;
}
.inshow .commend ul li .box h4,
.inshow .commend ul li .box p {
  margin: 0;
}
.inshow .commend ul li .box .name {
  flex-grow: 1;
}
</style>