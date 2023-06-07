<template>
  <div class="container-fluid py-3">
    <div class="row">
      <div class="col-lg-12 mb-2">
        <div
          class="w-100 d-flex justify-content-center align-items-center border-bottom"
        >
          <h3
            class="text-center bg-white py-2 px-5 text-danger rounded-3 year-name"
          >
            {{ route.params.year == "1 ع" && "الصف الأول الأعدادى" }}
          </h3>
        </div>
      </div>

      <div class="col-lg-12 mb-2">
        <div class="w-100 d-flex align-items-center gap-2 border-bottom pb-2">
          <div>
            <button
              class="btn btn-light rounded-0 border-0 d-flex justify-content-center align-items-center gap-2 add-group"
            >
              <img
                src="@/assets/imgs/add-group.png"
                class="w-icon-img rounded-circle"
                alt="add-group"
              />

              <span class="fs-5">اضافة مجموعة</span>
            </button>
          </div>

          <div class="d-flex align-items-center gap-2">
            <DashboardYearsGroupsCard />
            <DashboardYearsGroupsCard />
            <DashboardYearsGroupsCard />
            <DashboardYearsGroupsCard />
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <DashboardYearsMaterials />
      </div>

      <div class="col-lg-6"></div>
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
.year-name {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.add-group {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.w-icon-img {
  width: 30px;
  height: 30px;
  object-fit: cover;
}
</style>
