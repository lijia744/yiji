<template>
  <div class="person">
    <div class="top">
      <div class="icon">
        <span class="iconfont icon-shezhi"></span>
      </div>
      <div class="img">
        <img src="../assets/person/20161209001222_3SzVE.jpeg" alt />
        <p>阴雨天</p>
      </div>
      <div class="choose">
        <div class="box">
          <p>关注</p>
          <span>11</span>
        </div>
        <div class="box">
          <p>发布</p>
          <span>9</span>
        </div>
        <div class="box">
          <p>访客</p>
          <span>49</span>
        </div>
      </div>
    </div>
    <div class="title">
      <span>艺象云集</span>
      <button>ALL ></button>
    </div>
    <div class="pic">
      <div>
        <img src="../assets/person/pic (1).png" alt />
        <span>订阅/11</span>
      </div>
      <div>
        <img src="../assets/person/pic (2).png" alt />
        <span>订阅/9</span>
      </div>
      <div>
        <img src="../assets/person/pic (3).png" alt />
        <span>订阅/49</span>
      </div>
    </div>
    <div class="yuanchuang">
      <span>原创</span>
      <span>缓存</span>
    </div>
    <div class="tupian">
      <div>
        <img src="../assets/person/User_07.png" alt />
      </div>
      <div>
        <img src="../assets/person/User_09.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "person"
};
</script>

<style>
.person .top {
  background-image: url("../assets/person/User-bg_01.png");
  background-size: cover;
}
.person .top .icon {
  text-align: right;
  padding: 20px 20px 0 0;
}
.person .top .icon .iconfont {
  font-size: 22px;
  color: #fff;
}
.person .top .img {
  text-align: center;
  margin: 10px 0;
}
.person .top .img img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.person .top .img p {
  color: #fff;
  font-size: 20px;
  margin-top: 10px;
}
.person .top .choose {
  font-size: 12px;
  color: #fff;
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
  padding-bottom: 40px;
}
.person .top .choose p {
  padding-bottom: 5px;
}
.person .title {
  display: flex;
  justify-content: space-between;
  padding: 10px 0 10px 20px;
}
.person .title button {
  border: none;
  color: #fff;
  background-color: rgb(233, 35, 35);
  border-radius: 1rem 0 0rem 1rem;
  padding: 0px 10px 0px 20px;
}
.person .pic {
  display: flex;
  justify-content: space-between;
}
.person .pic img {
  width: 100%;
}
.person .pic span {
  font-size: 14px;
}
.person .yuanchuang {
  background-image: url("../assets/person/tabs-bg.png");
  justify-content: space-around;
  background-size: cover;
  display: flex;
  color: #fff;
  padding: 5px 0;
}
.person .yuanchuang span:nth-child(2) {
  color: #000;
}
.person .tupian {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
}
.person .tupian div {
  width: 50vw;
}
.person .tupian div img {
  width: 100%;
}
</style>