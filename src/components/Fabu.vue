<template>
  <div class="fabu">
    <div class="top">
      <span>上传照片</span>
      <span class="iconfont icon-feiji"></span>
    </div>
    <div class="center">
      <textarea placeholder="说点什么..." id cols="30" rows="10"></textarea>
      <div class="camera">
        <span class="iconfont icon-tupian"></span>
        <p>点击添加图片</p>
      </div>
      <span class="iconfont icon-xiangji"></span>
    </div>
    <div class="bot">
      <span class="iconfont icon-danseshixintubiao-">
        <span class="text">点击获取位置</span>
      </span>
      <span class="iconfont icon-tag-fill">
        <span class="text">添加标签</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "fabu"
};
</script>

<style>
.fabu {
  width: 90%;
  margin: 0 auto;
}
.fabu .top {
  color: red;
  font-size: 18px;
  padding-bottom: 10px;
  margin-top: 30px;
  border-bottom: 1px solid rgba(59, 56, 56, 0.788);
  text-align: center;
}
.fabu .top .icon-feiji:before {
  font-size: 28px;
  float: right;
}
.fabu .center {
  background-image: url("../assets/fabu/publish_03.png");
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(59, 56, 56, 0.788);
  background-size: 100%;
  background-repeat: no-repeat;
}
.fabu .center textarea {
  width: 100%;
  border: none;
  padding-top: 20px;
  background-color: transparent;
}
.fabu .center .camera {
  margin-top: 130px;
  height: 150px;
  background-color: rgba(231, 218, 218, 0.863);
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.fabu .center .iconfont,
.fabu .bot .iconfont {
  font-size: 26px;
  color: red;
}
.fabu .bot {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fabu .bot .iconfont .text {
  font-size: 14px;
  color: rgb(83, 81, 81);
}
</style>