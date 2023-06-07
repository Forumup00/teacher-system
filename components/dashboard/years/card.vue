<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div
      class="card-year bg-white d-flex justify-content-center align-items-center fs-2 c-pointer position-relative"
      @click="$router.push(`/dashboard/years/${year}`)"
    >
      <button
        class="btn px-3 border-0 position-absolute top-0 start-0 d-flex justify-content-center align-items-center"
        @click="
          $event.stopPropagation();
          doMore = !doMore;
        "
      >
        <img src="@/assets/imgs/more.png" class="btn-more" alt="more" />
      </button>

      <div
        class="position-absolute drop"
        v-if="doMore"
        @click="$event.stopPropagation()"
      >
        <button
          class="btn btn-light w-100 rounded-0 d-flex align-items-center gap-2 px-4"
        >
          <img src="@/assets/imgs/edit.png" class="btn-edit" alt="edit" />

          <span>تعديل</span>
        </button>

        <button
          class="btn btn-light w-100 rounded-0 d-flex align-items-center gap-2 px-4"
        >
          <img src="@/assets/imgs/trash-bin.png" class="btn-edit" alt="trash" />

          <span>مسح</span>
        </button>
      </div>

      <img src="@/assets/imgs/4672586_2485257.jpg" alt="year" />

      <p class="mb-0 position-absolute year w-100 text-center text-white">
        {{ year }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  year: {
    type: String,
    require: true,
    default: null,
  },
});

const doMore = ref(false);

onMounted(() => {
  window.addEventListener("click", () => {
    doMore.value = false;
  });
});
</script>

<style scoped>
.card-year {
  border-radius: 5px 30px;
  transition: 0.5s ease;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.card-year:hover {
  transform: translateY(-8px);
}
.card-year img {
  height: 200px;
  width: 250px;
  object-fit: cover;
}
.year {
  backdrop-filter: blur(30px);
}
.btn-more {
  width: 30px !important;
  height: 30px !important;
  object-fit: contain !important;
}
.btn-more:active {
  transform: scale(0.95);
}
.drop {
  left: 10px;
  top: 40px;
  z-index: 1;
}
.btn-edit {
  width: 20px !important;
  height: 20px !important;
  object-fit: contain !important;
}
</style>
