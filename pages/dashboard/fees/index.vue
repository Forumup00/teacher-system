<template>
  <div class="container-fluid py-3">
    <div class="row">
      <div class="col-lg-12 mb-2">
        <h5
          class="bg-white w-50 rounded-3 p-3 text-center mx-auto text-danger mb-0 main-shadow"
        >
          المصروفات
        </h5>
      </div>

      <div class="col-lg-12">
        <form @submit.prevent="" class="w-100 d-flex align-items-center gap-3">
          <input
            type="number"
            class="form-control fs-5"
            placeholder="أدخل كود الطالب"
          />

          <button class="btn btn-danger fs-5 w-25">بحث</button>
        </form>
      </div>

      <hr class="my-2" />

      <div class="col-lg-3 mb-3">
        <div
          class="w-100 h-100 d-flex justify-content-center align-items-center"
        >
          <img
            src="@/assets/imgs/profile.png"
            alt="profile"
            class="profile-img rounded-circle"
          />
        </div>
      </div>

      <div class="col-lg-9 mb-3">
        <form @submit.prevent="" class="w-100">
          <div class="d-flex align-items-center gap-3 mb-2">
            <div class="flex-grow-1">
              <label for="name" class="form-label">الأسم</label>

              <input type="text" id="name" class="form-control fs-5" disabled />
            </div>

            <div class="w-25">
              <label for="code" class="form-label">الكود</label>

              <input
                type="number"
                id="code"
                class="form-control fs-5"
                disabled
              />
            </div>
          </div>

          <div class="d-flex align-items-center gap-3 mb-2">
            <div class="w-50">
              <label for="year" class="form-label">الصف</label>

              <input type="text" id="year" class="form-control fs-5" disabled />
            </div>

            <div class="w-50">
              <label for="phone" class="form-label">رقم الهاتف</label>

              <input type="tel" id="phone" class="form-control fs-5" disabled />
            </div>
          </div>

          <div class="d-flex align-items-center gap-3 mb-2">
            <div class="w-50">
              <label for="group" class="form-label">المجموعة</label>

              <input
                type="text"
                id="group"
                class="form-control fs-5"
                disabled
              />
            </div>

            <div class="w-50">
              <label for="note" class="form-label">ملاحظات</label>

              <input type="text" id="note" class="form-control fs-5" disabled />
            </div>
          </div>

          <div class="d-flex align-items-center gap-3 mb-2">
            <div class="w-50">
              <label for="mail" class="form-label">البريد الألكتروني</label>

              <input
                type="email"
                id="mail"
                class="form-control fs-5"
                disabled
              />
            </div>

            <div class="w-50">
              <label for="phoneParent" class="form-label"
                >رقم هاتف ولى الامر</label
              >

              <input
                type="tel"
                id="phoneParent"
                class="form-control fs-5"
                disabled
              />
            </div>
          </div>

          <div class="d-flex align-items-center gap-3 mb-2">
            <div class="w-25">
              <label for="status" class="form-label">الحالة</label>

              <input
                type="text"
                id="status"
                class="form-control fs-5"
                disabled
              />
            </div>

            <div class="flex-grow-1">
              <label for="pay" class="form-label">الدفع</label>

              <input
                type="number"
                id="pay"
                class="form-control fs-5"
                placeholder="مثال: 250"
              />
            </div>
          </div>

          <div class="d-flex align-items-center justify-content-center">
            <button class="btn btn-danger fs-5 w-25">حفظ</button>
          </div>
        </form>
      </div>

      <div class="col-lg-12">
        <div
          class="w-100 d-flex align-items-center justify-content-center gap-3 fs-5"
        >
          <div class="py-3 px-5 rounded-3 bg-white text-center main-shadow">
            <p class="mb-0 border-bottom">اجمالى المصاريف</p>

            <span class="fs-3">15987</span>
          </div>

          <div class="py-3 px-5 rounded-3 bg-white text-center main-shadow">
            <p class="mb-0 border-bottom">السحب</p>

            <span class="fs-3">15987</span>
          </div>

          <div class="py-3 px-5 rounded-3 bg-white text-center main-shadow">
            <p class="mb-0 border-bottom">مصاريف اليوم</p>

            <span class="fs-3">15987</span>
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
</script>

<style scoped>
.profile-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>
