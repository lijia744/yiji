<template>
  <div class="lunbotwo">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="../assets/home/home (2).jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/home/home (7).jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/home/home (5).jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/home/home (6).jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/home/home (1).jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/home/home (3).jpg" alt />
      </swiper-slide>
      <!-- Optional controls -->
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "homelunbo",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 2.5
      }
    };
  }
};
</script>

<style>
.lunbotwo img {
  width: 100%;
}
</style>