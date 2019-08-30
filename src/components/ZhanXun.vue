<template>
  <div class="zhanxun">
    <Head />
    <HomeLunbo />
    <LunboTwo />
    <Show />
  </div>
</template>

<script>
import Head from "../components/Head";
import HomeLunbo from "../components/HomeLunbo";
import LunboTwo from "../components/LunboTwo";
import Show from "../components/Show";
export default {
  name: "zhanxun",
  components: {
    Head,
    HomeLunbo,
    LunboTwo,
    Show
  }
};
</script>

<style>
</style>