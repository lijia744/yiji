<template>
  <div class="today">
    <p>- 2016 / 09 / 09 -</p>
    <span>今日推送 > ></span>
  </div>
</template>

<script>
export default {
  name: "today"
};
</script>

<style>
p {
  margin: 0;
}
.today {
  height: 100vh;
  background-image: url("../assets/guide/u11.jpg");
  background-size: cover;
  text-align: center;
  font-size: 16px;
}
.today p {
  padding-top: 130%;
  padding-bottom: 40px;
}
</style>