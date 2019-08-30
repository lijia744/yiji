<template>
  <div class="lunbo">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="../assets/guide/引导页1.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/guide/引导页2.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/guide/引导页3.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/guide/引导页4.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <Today />
      </swiper-slide>
      <swiper-slide>
        <Land />
      </swiper-slide>
      <!-- Optional controls -->
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Today from "../components/Today";
import Land from "../components/Land";

export default {
  name: "lunbo",
  components: {
    swiper,
    swiperSlide,
    Today,
    Land
  },
  data() {
    return {
      swiperOption: {
        loop: false
        // slidesPerView: 1,
        // slidesPerGroup: 1
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    };
  }
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.swiper;
  //   }
  // },
  // mounted() {
  //   // current swiper instance
  //   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
  //   console.log("this is current swiper instance object", this.swiper);
  //   this.swiper.slideTo(3, 1000, false);
  // }
};
</script>

<style>
body {
  margin: 0;
}
.lunbo img {
  width: 100vw;
  height: 100vh;
}
</style>