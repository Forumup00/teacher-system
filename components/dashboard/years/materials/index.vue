<template>
  <div class="">
    <div
      class="p-2 bg-white w-100 d-flex justify-content-center align-items-center gap-2 rounded-3 header-idea mb-3"
    >
      <img src="@/assets/imgs/profile.png" class="profile-img" alt="profile" />

      <button
        @click="uploadPopup = true"
        class="btn btn-light flex-grow-1 py-3 d-flex justify-content-start align-items-center fs-5"
      >
        فى ماذا تفكر...؟
      </button>
    </div>
    <DashboardYearsMaterialsPostUploadPost
      v-if="uploadPopup"
      @close="uploadPopup = false"
    />

    <div
      class="d-flex align-items-center gap-2 p-2 bg-white rounded-3 w-100 option mb-3"
    >
      <button
        class="btn btn-light d-flex justify-content-center align-items-center gap-2 fs-5 rounded-0 flex-grow-1"
      >
        <img src="@/assets/imgs/paper.png" class="w-icon" alt="paper" />

        <span>ملفات</span>
      </button>

      <button
        class="btn btn-light d-flex justify-content-center align-items-center gap-2 fs-5 rounded-0 flex-grow-1"
      >
        <img src="@/assets/imgs/quiz.png" class="w-icon" alt="quiz" />

        <span>امتحانات</span>
      </button>
    </div>

    <div class="post-container">
      <DashboardYearsMaterialsPost
        v-for="post in store.postsArr"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";

const store = useStore();
const uploadPopup = ref(false);
</script>

<style scoped>
.header-idea,
.option {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.profile-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
.w-icon {
  width: 30px;
  height: 30px;
  object-fit: cover;
}
.option button {
  border-bottom: 1px solid #222;
}
</style>
