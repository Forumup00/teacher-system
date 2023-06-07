<template>
  <div class="p-3 d-flex align-items-center justify-content-between gap-2">
    <div class="d-flex align-items-center gap-2 w-75 position-relative">
      <button class="btn btn-light border-0" @click="filterMenu = !filterMenu">
        <img src="@/assets/imgs/setting.png" class="btn-filter" alt="setting" />
      </button>

      <div
        class="position-absolute bg-white p-2 rounded-3 filter-menu bg-light"
        v-if="filterMenu"
      >
        <div
          class="d-flex justify-content-between align-items-center border-bottom"
        >
          <button class="btn border-0" @click="filterMenu = false">
            <i class="fa-solid fa-xmark fs-4"></i>
          </button>

          <h5 class="mb-0">Filter menu</h5>
        </div>

        <div
          class="d-flex align-items-center justify-content-between gap-2 flex-wrap"
        >
          <div class="d-flex align-items-center gap-2">
            <label for="code" class="form-check-label c-pointer">الكود</label>

            <input
              type="radio"
              id="code"
              class="form-check-input c-pointer"
              name="filter"
              checked
            />
          </div>

          <div class="d-flex align-items-center gap-2">
            <label for="name" class="form-check-label c-pointer">الأسم</label>

            <input
              type="radio"
              id="name"
              class="form-check-input c-pointer"
              name="filter"
            />
          </div>

          <div class="d-flex align-items-center gap-2">
            <label for="email" class="form-check-label c-pointer"
              >البريد الألكتروني</label
            >

            <input
              type="radio"
              id="email"
              class="form-check-input c-pointer"
              name="filter"
            />
          </div>

          <div class="d-flex align-items-center gap-2">
            <label for="status" class="form-check-label c-pointer"
              >الحالة</label
            >

            <input
              type="radio"
              id="status"
              class="form-check-input c-pointer"
              name="filter"
            />
          </div>

          <div class="d-flex align-items-center gap-2">
            <label for="tel" class="form-check-label c-pointer"
              >رقم الهاتف</label
            >

            <input
              type="radio"
              id="tel"
              class="form-check-input c-pointer"
              name="filter"
            />
          </div>

          <div class="d-flex align-items-center gap-2">
            <label for="tel-parent" class="form-check-label c-pointer"
              >رقم هاتف ولى الأمر</label
            >

            <input
              type="radio"
              id="tel-parent"
              class="form-check-input c-pointer"
              name="filter"
            />
          </div>
        </div>
      </div>

      <input
        type="search"
        class="form-control fs-5 w-50 py-2"
        placeholder="ابحث عن الطالب"
      />

      <button class="btn btn-danger fs-5 px-5">بحث</button>
    </div>

    <div>
      <button
        class="btn btn-success fs-5 d-flex justify-content-center align-items-center gap-2"
      >
        <span>تحميل ملف Excel</span>

        <img src="@/assets/imgs/file.png" class="btn-filter" alt="setting" />
      </button>
    </div>
  </div>

  <div class="bg-white-opacity overflow-auto table-container border">
    <table class="table table-striped table-hover fs-5">
      <thead>
        <tr class="position-sticky sticky-top bg-white">
          <th class="text-center border-start bg-white">رقم</th>

          <th class="border-start container-name text-center bg-white">
            الأسم
          </th>

          <th class="border-start text-center text-info">السنة</th>

          <th class="border-start text-center">المجموعة</th>

          <th class="border-start text-center text-danger">الكود</th>

          <th class="border-start text-center">الهاتف الطالب</th>

          <th class="border-start text-center text-warning">هاتف ولى الأمر</th>

          <th class="border-start text-center">البريد الألكتروني</th>

          <th class="border-start text-center">كلمة السر</th>

          <th class="border-start text-center">الحالة</th>
        </tr>
      </thead>

      <tbody>
        <DashboardStudentTable v-for="(a, i) in 15" :key="i" />
      </tbody>
    </table>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});

const filterMenu = ref(false);
</script>

<style scoped>
.table-container {
  height: calc(100vh - 147px);
}
.bg-white-opacity {
  background-color: #ffffff80;
}
.table {
  vertical-align: middle;
  width: 120%;
  z-index: 1;
}
.btn-filter {
  width: 30px;
  height: 30px;
  object-fit: cover;
}
.container-name {
  position: sticky;
  right: 0;
}
.filter-menu {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 2;
  top: 50px;
  width: 350px;
}
</style>
