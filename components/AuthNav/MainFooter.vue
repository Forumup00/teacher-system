<template>
  <footer class="footer rounded-special p-3 bg-dark">
    <div class="container">
      <div class="w-100 d-flex justify-content-between align-items-center">
        <div class="d-flex flex-column align-items-start">
          <div class="mb-3">
            <NuxtLink
              class="text-decoration-none text-dark d-flex justify-content-center align-items-center gap-3"
              to="/"
            >
              <span class="fw-bold fs-2 text-white">
                <span class="text-danger">Mr.</span>
                Math
              </span>

              <img
                src="@/assets/imgs/logo2.jpg"
                class="logo-img rounded-circle"
                alt="logo"
              />
            </NuxtLink>
          </div>

          <div class="mb-3">
            <p class="mb-3 text-white">العنوان / 7 شارع الشاذلى قسم يوسف بك</p>
            <p class="mb-2 text-white">رقم الهاتف / 01226074394</p>
            <p class="mb-2 text-white">رقم الهاتف / 01064206200</p>
            <p class="mb-2 text-white">
              البريد الألكتروني / dodo87344@gmail.com
            </p>
          </div>

          <div
            class="social d-flex justify-content-between align-items-center gap-3"
          >
            <a
              href="https://www.facebook.com/MohamedElsayedDodo"
              target="_blank"
              class="text-decoration-none"
            >
              <i class="fa-brands fa-facebook text-primary fs-3"></i>
            </a>

            <a
              href="https://wa.me/+201226074394"
              target="_blank"
              class="text-decoration-none"
            >
              <i class="fa-brands fa-whatsapp text-success fs-3"></i>
            </a>

            <a
              href="https://www.instagram.com/ce_dodo_/"
              target="_blank"
              class="text-decoration-none"
            >
              <i class="fa-brands fa-instagram text-danger fs-3"></i>
            </a>

            <a
              href="https://twitter.com/mo_elsayed7"
              target="_blank"
              class="text-decoration-none"
            >
              <i class="fa-brands fa-twitter text-info fs-3"></i>
            </a>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style scoped>
.logo-img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
.rounded-special {
  border-radius: 20px 20px 0 0;
}
</style>
