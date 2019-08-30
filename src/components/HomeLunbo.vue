<template>
  <div class="homelunbo">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="../assets/home/u62.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/home/u65.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/home/u68.jpg" alt />
      </swiper-slide>

      <!-- Optional controls -->
    </swiper>
    <div class="swiper-pagination"></div>
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
        // slidesPerView: 1,
        // slidesPerGroup: 1,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>

<style>
.homelunbo {
  display: flex;
}
.homelunbo img {
  width: 100%;
  padding-top: 61px;
}
.homelunbo .swiper-pagination {
  left: 47%;
  transform: translateX(-50%);
  top: 34%;
}
.homelunbo .swiper-pagination-bullet {
  opacity: 1;
  background: #fff;
  width: 6px;
  height: 6px;
}
.homelunbo .swiper-pagination-bullet-active {
  background: red;
}
.homelunbo .swiper-pagination-bullet:nth-child(2) {
  margin: 0 5px;
}
</style>