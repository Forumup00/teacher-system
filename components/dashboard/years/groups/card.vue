<template>
  <div class="btn-group">
    <button
      class="btn btn-dark rounded-0 border-0 d-flex justify-content-center align-items-center gap-2 box-shadow"
      @click="$router.push(`/dashboard/years/1pred/1s`)"
    >
      <img src="@/assets/imgs/team.png" class="w-icon-img rounded-circle" alt="team" />

      <span class="fs-5">1.5 سبت</span>
    </button>

    <button
      class="btn btn-light rounded-0 px-1 border-0 d-flex justify-content-center align-items-center box-shadow"
    >
      <img src="@/assets/imgs/more2.png" class="w-icon2-img rounded-circle" alt="more2" />
    </button>
  </div>
</template>

<script setup></script>

<style scoped>
.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.w-icon-img {
  width: 30px;
  height: 30px;
  object-fit: cover;
}
.w-icon2-img {
  width: 20px;
  height: 20px;
  object-fit: cover;
}
</style>
