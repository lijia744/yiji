<template>
  <div class="land">
    <div class="top">
      <div>
        <input type="text" placeholder="点击输入手机号/email登陆" v-model="text" />
      </div>
      <div>
        <input type="password" placeholder="输入密码" v-model="password" />
      </div>
      <div class="btn">
        <button @click="clickBtn">登陆</button>

        <button>注册</button>
      </div>

      <div class="word">
        <span class="icon">√</span>
        <span>登陆或注册及同意艺集</span>
        <span class="text">用户服务协议</span>
      </div>
    </div>
    <div class="bot">
      <div class="box">
        <img src="../assets/guide/u15 (3).png" alt />
        <span>微博</span>
      </div>
      <div class="box weixin">
        <img src="../assets/guide/u15 (1).png" alt />
        <span>微信</span>
      </div>
      <div class="box">
        <img src="../assets/guide/u15 (2).png" alt />
        <span>QQ</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "land",
  data() {
    return {
      text: "",
      password: ""
    };
  },
  methods: {
    clickBtn() {
      if (this.text === "1234" && this.password === "123") {
        this.$router.push("/zhanxun");
      } else {
        alert("请输入正确的手机号码或密码");
      }
    }
  }
};
</script>

<style>
.land {
  height: 100vh;
  background-image: url("../assets/guide/u15 (1).jpg");
  background-size: cover;
}
.land .top {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 60% 0 20px 0;
}
.land .top input {
  width: 100%;
  border: none;
  background-color: #f1eada;
  border-bottom: 1px solid #514e49;
  text-align: center;
  padding: 30px 0 10px 0;
  font-size: 16px;
  outline: none;
}
.land .top .btn {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin: 30px 0 160px 0;
}
.land .top button {
  border: none;
  background-color: #f1eada;
  font-size: 18px;
  outline: none;
  color: #4e534c;
}
.land .top .word {
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #7f7164;
}
.land .top .word .icon {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  color: #f1eada;
  margin-right: 10px;
}
.land .top .word .text {
  color: #fff;
}
.land .bot {
  border-top: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
}
.land .bot .box {
  color: #4e534c;
  width: 33%;
  text-align: center;
}
.land .bot .box img {
  width: 30px;
  height: 26px;
  padding-right: 6px;
}
.land .bot .box.weixin {
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
}
</style>