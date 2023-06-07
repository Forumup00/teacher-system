<template>
  <div class="container-fluid py-3">
    <div class="row">
      <div class="col-lg-12 mb-2">
        <div class="w-100 d-flex align-items-center gap-2">
          <button
            class="btn btn-light fs-5 d-flex align-items-center gap-2 main-shadow"
          >
            <img src="@/assets/imgs/click.png" class="w-icon" alt="click" />

            <span>بدأ المجموعة</span>
          </button>

          <button
            class="btn btn-light fs-5 d-flex align-items-center gap-2 main-shadow"
          >
            <img src="@/assets/imgs/barcode.png" class="w-icon" alt="barcode" />

            <span>طباعة الباركود</span>
          </button>

          <button
            class="btn btn-light fs-5 d-flex align-items-center gap-2 main-shadow"
          >
            <img src="@/assets/imgs/quiz.png" class="w-icon" alt="quiz" />

            <span>اضافة Quiz</span>
          </button>
        </div>
      </div>

      <div class="col-lg-6 mb-2">
        <div class="w-100">
          <h5
            class="text-center bg-white p-3 rounded-3 text-danger main-shadow"
          >
            تسجيل حضور
          </h5>

          <form
            class="d-flex justify-content-between align-items-center gap-2 mb-2"
            @submit.prevent=""
          >
            <input
              type="number"
              class="form-control fs-5 main-shadow"
              placeholder="أدخل كود الطالب"
            />

            <button class="btn btn-danger fs-5 main-shadow">حضور</button>
          </form>

          <div
            class="bg-white rounded-3 overflow-auto table-container main-shadow"
          >
            <table class="table fs-5">
              <thead class="position-sticky sticky-top bg-white">
                <tr>
                  <th class="text-center">#</th>
                  <th class="student">الطالب</th>
                  <th class="text-center">الكود</th>
                  <th class="text-center">الحضور</th>
                </tr>
              </thead>

              <tbody>
                <DashboardYearsGroupsTableOne v-for="n in 50" :key="n" />
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="w-100">
          <div
            class="d-flex justify-content-center align-items-center gap-3 bg-white p-2 rounded-3 mb-2 main-shadow"
          >
            <div
              class="fs-5 text-center border py-1 px-4 rounded-2 text-success numbers"
            >
              <p class="fw-bold mb-1">عدد الحضور</p>

              <span>62</span>
            </div>

            <div
              class="fs-5 text-center border py-1 px-4 rounded-2 text-danger numbers"
            >
              <p class="fw-bold mb-1">عدد الغياب</p>

              <span>12</span>
            </div>

            <div
              class="fs-5 text-center border py-1 px-4 rounded-2 text-dark numbers"
            >
              <p class="fw-bold mb-1">الأجمالى</p>

              <span>74</span>
            </div>
          </div>

          <h5
            class="text-center bg-white p-3 rounded-3 text-danger main-shadow"
          >
            الطالب
          </h5>

          <DashboardYearsGroupsStudentHere class="main-shadow" />
        </div>
      </div>

      <hr class="my-2" />

      <div class="col-lg-6">
        <div class="w-100">
          <h5
            class="text-center bg-white p-3 rounded-3 text-danger main-shadow"
          >
            الغائبين فى اخر الحصص
          </h5>

          <div
            class="bg-white rounded-3 overflow-auto table-container main-shadow"
          >
            <table class="table fs-5">
              <thead class="position-sticky sticky-top bg-white">
                <tr>
                  <th class="text-center">#</th>
                  <th class="">الطالب</th>
                  <th class="text-center">الكود</th>
                  <th class="text-center">عدد الحصص</th>
                </tr>
              </thead>

              <tbody>
                <DashboardYearsGroupsTableThree v-for="n in 2" :key="n" />
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-2">
        <div class="w-100">
          <h5
            class="text-center bg-white p-3 rounded-3 text-danger main-shadow"
          >
            الحاضرين
          </h5>

          <div
            class="bg-white rounded-3 overflow-auto table-container main-shadow"
          >
            <table class="table fs-5">
              <thead class="position-sticky sticky-top bg-white">
                <tr>
                  <th class="text-center">#</th>

                  <th class="">الطالب</th>

                  <th class="text-center">الكود</th>

                  <th class="text-center date">الوقت</th>

                  <th class="text-center">الحضور</th>
                </tr>
              </thead>

              <tbody>
                <DashboardYearsGroupsTableTwo v-for="n in 50" :key="n" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
.table {
  vertical-align: middle;
}
.w-icon {
  width: 30px;
  height: 30px;
  object-fit: cover;
}
.student {
  width: 50%;
}

.table-container {
  height: calc(100vh - 266px);
}
.numbers {
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  /* box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px; */
}
</style>
