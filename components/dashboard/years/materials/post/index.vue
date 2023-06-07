<template>
  <div class="card w-100 bg-white p-2 mb-3">
    <div class="card-header d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center gap-2">
        <img
          src="@/assets/imgs/profile.png"
          class="profile-img"
          alt="profile"
        />

        <div>
          <p class="mb-0">محمد السيد</p>

          <p class="mb-0 text-muted">.two days ago</p>
        </div>
      </div>

      <div class="">
        <button class="btn rounded-0 border-0">
          <img src="@/assets/imgs/more.png" class="ellipse" alt="more" />
        </button>
      </div>
    </div>

    <div class="card-body p-1">
      <div class="caption mb-2">{{ post?.caption }}</div>

      <div class="files overflow-hidden rounded-3" v-if="post?.files">
        <div
          class="w-100 c-pointer"
          v-if="post.files.length == 1"
          @click="showPost = true"
        >
          <img :src="post.files[0]?.fileSrc" alt="post" class="one-img-post" />
        </div>

        <div
          class="w-100 c-pointer"
          v-if="post.files.length == 2"
          @click="showPost = true"
        >
          <img
            v-for="src in post.files"
            :key="src.id"
            :src="src.fileSrc"
            alt="post"
            class="two-img-post"
          />
        </div>

        <div
          class="w-100 c-pointer"
          v-if="post.files.length == 3"
          @click="showPost = true"
        >
          <img
            :src="post.files[0]?.fileSrc"
            alt="post"
            class="one-img-post half-img"
          />

          <div>
            <img
              :src="post.files[1]?.fileSrc"
              alt="post"
              class="two-img-post half-img"
            />

            <img
              :src="post.files[2]?.fileSrc"
              alt="post"
              class="two-img-post half-img"
            />
          </div>
        </div>

        <div
          class="w-100 c-pointer"
          v-if="post.files.length == 4"
          @click="showPost = true"
        >
          <div>
            <img
              :src="post.files[0]?.fileSrc"
              alt="post"
              class="two-img-post half-img"
            />

            <img
              :src="post.files[1]?.fileSrc"
              alt="post"
              class="two-img-post half-img"
            />
          </div>
          <div>
            <img
              :src="post.files[2]?.fileSrc"
              alt="post"
              class="two-img-post half-img"
            />

            <img
              :src="post.files[3]?.fileSrc"
              alt="post"
              class="two-img-post half-img"
            />
          </div>
        </div>

        <div
          class="w-100 c-pointer"
          v-if="post.files.length > 4"
          @click="showPost = true"
        >
          <div>
            <img
              :src="post.files[0]?.fileSrc"
              alt="post"
              class="two-img-post half-img"
            />

            <img
              :src="post.files[1]?.fileSrc"
              alt="post"
              class="two-img-post half-img"
            />
          </div>

          <div class="position-relative">
            <img
              :src="post.files[2]?.fileSrc"
              alt="post"
              class="two-img-post half-img"
            />

            <img
              :src="post.files[3]?.fileSrc"
              alt="post"
              class="two-img-post half-img"
            />

            <div
              class="position-absolute more-photos d-flex justify-content-center align-items-center"
            >
              <span class="fs-3 text-white">{{ post.files.length - 3 }}+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer"></div>
  </div>

  <DashboardYearsMaterialsPostSwiper
    v-if="showPost"
    @close="showPost = false"
    :post="props.post"
  />
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
    default: null,
  },
});
const showPost = ref(false);
</script>

<style scoped>
.card {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.profile-img {
  width: 40px;
  height: 40px;
  object-fit: cover;
}
.ellipse {
  width: 25px;
  height: 25px;
  object-fit: cover;
}
.one-img-post {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
.two-img-post {
  width: 50%;
  height: 400px;
  object-fit: cover;
}
.half-img {
  height: 200px !important;
}
.more-photos {
  width: 50%;
  height: 200px !important;
  background-color: #22222298;
  bottom: 0;
  left: 0;
}
</style>
