<template>
  <div class="home">
    <router-view></router-view>
    <div class="fot">
      <ul>
        <li>
          <router-link to="/zhanxun" active-class="active">
            <span class="iconfont icon-zixun"></span>
            <span class="text">展讯</span>
          </router-link>
        </li>
        <li>
          <router-link to="/commend" active-class="active">
            <span class="iconfont icon-tuijian"></span>
            <span class="text">推荐</span>
          </router-link>
        </li>
        <li>
          <router-link active-class="active" to="/fabu">
            <span class="iconfont icon-feiji"></span>
            <span class="text">发布</span>
          </router-link>
        </li>
        <li>
          <router-link active-class="active" to="/person">
            <span class="iconfont icon-geren"></span>
            <span class="text">个人</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style>
.fot {
  width: 100%;
  background-color: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  padding-top: 10px;
}
.fot ul {
  display: flex;
  justify-content: space-around;
  padding: 0;
  text-align: center;
  margin: 0;
}
.fot ul li a {
  text-decoration: none;
}
.fot ul li .iconfont {
  color: #fff;
  text-align: center;
  font-size: 22px;
}
.fot ul li .text {
  display: block;
  color: #fff;
  text-align: center;
  padding-bottom: 5px;
  font-size: 14px;
}
.fot ul li .active {
  color: red;
}
.fot ul li .active .iconfont {
  color: red;
}
.fot ul li .active .text {
  color: red;
}
</style>