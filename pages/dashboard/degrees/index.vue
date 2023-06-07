<template>
  <div class="container-fluid py-3 body">
    <div class="row">
      <div class="col-lg-12 mb-3">
        <div class="w-100 d-flex justify-content-center align-items-center">
          <h5
            class="p-3 bg-white rounded-3 text-danger w-50 text-center main-shadow mb-0"
          >
            تسجيل درجات
          </h5>
        </div>
      </div>

      <div class="col-lg-12 mb-3">
        <form
          @submit.prevent=""
          class="w-100 d-flex justify-content-center align-items-center gap-3"
        >
          <input
            type="number"
            class="form-control fs-5"
            placeholder="أدخل كود الطالب"
          />

          <button class="btn btn-outline-danger w-25 fs-5">بحث</button>
        </form>
      </div>

      <hr />

      <div class="col-lg-12">
        <div class="w-100">
          <form @submit.prevent="">
            <div class="d-flex align-items-center gap-3 mb-3">
              <div class="w-75">
                <label for="name" class="form-label">الأسم</label>

                <input
                  type="text"
                  id="name"
                  class="form-control fs-5"
                  disabled
                  required
                />
              </div>

              <div class="w-25">
                <label for="code" class="form-label">الكود</label>

                <input
                  type="number"
                  id="code"
                  class="form-control fs-5"
                  disabled
                  required
                />
              </div>
            </div>

            <div class="d-flex align-items-center gap-3 mb-3">
              <div class="w-75">
                <label for="title" class="form-label">عنوان الامتحان</label>

                <input
                  type="text"
                  id="title"
                  class="form-control fs-5"
                  placeholder="أدخل عنوان الامتحان"
                  required
                />
              </div>

              <div class="w-25">
                <label for="date" class="form-label">التاريخ</label>

                <input
                  type="datetime-local"
                  id="date"
                  class="form-control fs-5"
                />
              </div>
            </div>

            <div
              class="d-flex justify-content-center align-items-center gap-3 mb-3"
            >
              <div class="w-25">
                <div>
                  <label for="degree" class="form-label">الدرجة</label>
                </div>

                <div class="d-flex justify-content-center align-items-center">
                  <input
                    type="text"
                    class="form-control fs-5"
                    placeholder="أدخل درجة الطالب"
                    id="degree"
                    required
                  />

                  <p class="mb-0 fs-5">/50</p>
                </div>
              </div>

              <div class="w-25">
                <label for="grade" class="form-label">المستوى</label>

                <input
                  type="text"
                  name="grade"
                  id="grade"
                  class="form-control"
                  disabled
                />
              </div>
            </div>

            <div class="text-center">
              <button class="btn btn-outline-danger w-50 fs-5">
                حفظ الدرجة
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>

<style scoped>
.body {
  height: calc(100vh - 67px);
}
</style>
