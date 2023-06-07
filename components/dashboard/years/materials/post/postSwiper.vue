<template>
  <div
    class="popup w-100 h-100 position-fixed top-0 start-0 d-flex justify-content-center align-items-center"
  >
    <div class="form p-3 w-75 rounded-3">
      <div
        class="d-flex justify-content-between align-items-center border-bottom mb-2"
      >
        <p class="mb-0 fs-5"></p>

        <button class="btn border-0" @click="$emit('close')">
          <i class="fa-solid fa-xmark fs-5 text-white"></i>
        </button>
      </div>

      <div class="">
        <div class="mb-2 overflow-hidden" v-if="post.caption.length">
          <p class="mb-0 text-white" style="word-wrap: break-word">
            {{ post.caption }}
          </p>
        </div>

        <div>
          <swiper
            :navigation="true"
            :modules="modules"
            class="mySwiper"
            :pagination="{
              clickable: true,
            }"
            :zoom="true"
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }"
          >
            <swiper-slide v-for="src in post.files" :key="src.id">
              <div class="swiper-zoom-container">
                <img :src="src.fileSrc" alt="post" class="img-post" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Zoom, Navigation, Pagination } from "swiper";

const modules = ref([Zoom, Navigation, Pagination]);

const props = defineProps({
  post: {
    type: Object,
    required: true,
    default: null,
  },
});

const emits = defineEmits(["close"]);
</script>

<style scoped>
.popup {
  height: 100vh;
  z-index: 100;
  background-color: #2222228f;
}
.form {
  height: 700px;
  background-color: #222222ca;
}
.img-post {
  width: 100%;
  height: 600px;
  object-fit: contain;
}
</style>
