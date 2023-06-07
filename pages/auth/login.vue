<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-lg-5">
        <div class="w-100 bg-white rounded-3 overflow-hidden">
          <img src="@/assets/imgs/4672586_2485257.jpg" class="auth-img" alt="auth" />
        </div>
      </div>

      <div class="col-lg-7">
        <div
          class="w-100 bg-white rounded-3 px-4 py-5 overflow-hidden right-side d-flex flex-column justify-content-evenly"
        >
          <h3 class="d-flex align-items-center gap-3 fw-bold mb-0">
            <i class="fa-solid fa-bolt text-warning"></i>

            <span>
              <span> تسجيل </span>
              <span class="text-danger">دخول : </span>
            </span>
          </h3>

          <p class="text-black-50 fs-5 mb-0">
            ادخل علي حسابك بإدخال البريد الألكتروني و كلمة المرور المسجل بهم من
            قبل
          </p>

          <form @submit.prevent="">
            <div class="mb-3">
              <label for="email" class="form-label fs-5"
                >البريد الألكتروني</label
              >

              <input
                type="email"
                id="email"
                class="form-control fs-5 mt-2"
                placeholder="أدخل البرييد الألكتروني"
              />
            </div>

            <div class="mb-3">
              <label for="password" class="form-label fs-5">كلمة السر</label>

              <input
                type="password"
                id="password"
                class="form-control fs-5 mt-2"
                placeholder="أدخل كلمة السر"
              />
            </div>

            <div>
              <button class="btn btn-danger py-2 w-100 fs-5">دخول</button>
            </div>
          </form>

          <p class="mb-0 text-center">ان نسيت البريد الألكتروني او كلمة السر. الرجاء التواصل مع الأدارة</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.auth-img {
  width: 100%;
  height: 600px;
  object-fit: cover;
}
.right-side {
  height: 600px;
}
</style>
