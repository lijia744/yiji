<template>
  <div class="head">
    <img src="../assets/home/home (4).jpg" alt />
    <router-link to="/search">
      <img class="search" src="../assets/home/home.jpg" alt />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "hea"
};
</script>

<style>
.head {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.head img {
  width: 100%;
}
.head .search {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 15px;
  z-index: 2;
}
</style>