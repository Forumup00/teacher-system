<template>
  <div
    class="popup w-100 h-100 position-fixed top-0 start-0 d-flex justify-content-center align-items-center"
  >
    <div class="form bg-white p-3 w-50 rounded-3">
      <div
        class="d-flex justify-content-between align-items-center border-bottom mb-2"
      >
        <p class="mb-0 fs-5">اضافة بوست</p>

        <button class="btn border-0" @click="$emit('close')">
          <i class="fa-solid fa-xmark fs-5"></i>
        </button>
      </div>

      <div>
        <div class="mb-2">
          <label for="post" class="form-label mb-0">بوست</label>
          <textarea
            type="text"
            id="post"
            class="form-control"
            placeholder="أدخل البوست"
            v-model="textCaption"
          ></textarea>
        </div>

        <div class="mb-2">
          <label class="btn btn-danger w-100" for="uploadFile">اضافة ملف</label>

          <input
            type="file"
            class="d-none"
            id="uploadFile"
            @change="readFiles"
            multiple
          />
        </div>

        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex justify-content-between align-items-center gap-3">
            <button
              class="btn btn-danger px-3"
              :disabled="!postsArr.length && !textCaption.trim().length"
              @click="addPost"
            >
              اضافة
            </button>

            <button class="btn btn-dark px-3" @click="$emit('close')">
              اغلاق
            </button>
          </div>

          <div class="d-flex align-items-center">
            <span v-for="src in postsArr[0]?.files" :key="src.id">
              <img :src="src.fileSrc" class="img-post" alt="post" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";

const store = useStore();

const textCaption = ref("");

const postsArr = ref([
  {
    id: crypto.randomUUID(),
    caption: computed(() => {
      return textCaption.value;
    }),
    files: [],
  },
]);

const readFiles = (e) => {
  for (let i = 0; i < e.target.files.length; i++) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[i]);
    reader.onload = () => {
      postsArr.value[0].files.push({
        id: crypto.randomUUID(),
        file: e.target.files[i],
        fileSrc: reader.result,
      });
    };
  }
};

const addPost = () => {
  store.getPost(postsArr.value[0]);
  emits("close");
};

const emits = defineEmits(["close"]);
</script>

<style scoped>
.popup {
  height: 100vh;
  z-index: 100;
  background-color: #2222228f;
}
.img-post {
  width: 30px;
  height: 30px;
  object-fit: cover;
}
</style>
