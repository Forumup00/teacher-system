<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="w-100 btn-header">
          <button class="btn border-0 fw-bold rounded-0 py-2">
            الصفحة الشخصية
          </button>

          <button class="btn border-0 fw-bold rounded-0 py-2">
            غياب الطالب
          </button>

          <button class="btn border-0 fw-bold rounded-0 py-2">
            درجات امتحانات الطالب
          </button>
        </div>
      </div>

      <DashboardStudentProfile />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});
const route = useRoute();
</script>

<style scoped>
.btn-header button {
  transition-duration: 0.3s;
}
.btn-header button:hover {
  backdrop-filter: sepia(80%);
}

</style>
