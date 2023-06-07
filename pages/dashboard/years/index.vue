<template>
  <div class="container-fluid py-3">
    <div class="row mb-5">
      <div class="col-12">
        <div class="w-100">
          <button
            class="btn btn-light fs-5 d-flex justify-content-center align-items-center gap-2"
          >
            <img src="@/assets/imgs/add-button.png" class="add-btn" alt="add-button" />

            <span>إضافة سنة</span>
          </button>
        </div>
      </div>
    </div>

    <div class="row g-4">
      <DashboardYearsCard year="1 ع" />
      <DashboardYearsCard year="2 ع" />
      <DashboardYearsCard year="3 ع" />

      <DashboardYearsCard year="1 ث" />
      <DashboardYearsCard year="2 ث" />
      <DashboardYearsCard year="3 ث" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>

<style scoped>
.container-fluid {
  height: calc(100vh - 67px);
}
.add-btn {
  width: 30px;
  height: 30px;
  object-fit: cover;
}
.btn {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;
}
</style>
