<template>
  <div class="search">
    <div class="top">
      <span class="iconfont icon-sousuo"></span>
      <router-link to="/zhanxun">
        <span>x</span>
      </router-link>
    </div>
    <div class="text">
      <h4>-热门搜索词-</h4>
      <div class="word">
        <span class="iconfont icon-danseshixintubiao-"></span>
        <span>北京</span>
        <span>沈阳</span>
        <span>上海</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search"
};
</script>

<style>
.search {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.search a {
  text-decoration: none;
  color: black;
}
.search .top {
  display: flex;
  justify-content: space-between;
  padding: 30px 0 10px 0;
  border-bottom: 1px solid rgb(65, 64, 64);
}
.search .top span {
  font-size: 26px;
}
.search .text .iconfont {
  font-size: 20px;
  color: red;
}
.search .text .word span {
  margin-right: 5px;
}
</style>