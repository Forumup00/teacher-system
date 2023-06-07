<template>
  <div class="side-nav d-flex justify-content-between flex-column">
    <div class="links">
      <NuxtLink
        to="/students/profile"
        class="text-decoration-none d-flex align-items-center px-2 py-1 text-dark gap-2 border-bottom"
      >
        <img src="@/assets/imgs/user.png" class="photo-icon" alt="add-group" />

        <span class="fs-5">الصفحة الشخصية</span>
      </NuxtLink>

      <NuxtLink
        to="/students/materials"
        class="text-decoration-none d-flex align-items-center px-2 py-1 text-dark gap-2 border-bottom"
      >
        <img src="@/assets/imgs/ebook.png" class="photo-icon" alt="add-group" />

        <span class="fs-5">الملفات</span>
      </NuxtLink>

      <NuxtLink
        to="/students"
        class="text-decoration-none d-flex align-items-center px-2 py-1 text-dark gap-2 border-bottom"
      >
        <img
          src="@/assets/imgs/absentism.png"
          class="photo-icon"
          alt="add-group"
        />

        <span class="fs-5">غياب الطالب</span>
      </NuxtLink>

      <NuxtLink
        to="/students"
        class="text-decoration-none d-flex align-items-center px-2 py-1 text-dark gap-2 border-bottom"
      >
        <img src="@/assets/imgs/money.png" class="photo-icon" alt="add-group" />

        <span class="fs-5">المصاريف</span>
      </NuxtLink>

      <NuxtLink
        to="/students"
        class="text-decoration-none d-flex align-items-center px-2 py-1 text-dark gap-2 border-bottom"
      >
        <img src="@/assets/imgs/exam.png" class="photo-icon" alt="add-group" />

        <span class="fs-5">امتحانات</span>
      </NuxtLink>

      <NuxtLink
        to="/students"
        class="text-decoration-none d-flex align-items-center px-2 py-1 text-dark gap-2 border-bottom"
      >
        <img src="@/assets/imgs/chat.png" class="photo-icon" alt="add-group" />

        <span class="fs-5">شات معانا</span>
      </NuxtLink>

      <NuxtLink
        to="/students"
        class="text-decoration-none d-flex align-items-center px-2 py-1 text-dark gap-2 border-bottom"
      >
        <img src="@/assets/imgs/play.png" class="photo-icon" alt="add-group" />

        <span class="fs-5">لايف</span>
      </NuxtLink>
    </div>

    <div>
      <button
        class="btn border-0 btn-logout d-flex align-items-center px-2 py-1 text-dark gap-2 w-100 rounded-0"
      >
        <img src="@/assets/imgs/logout.png" class="photo-icon" alt="logout" />

        <span class="fs-5">تسجيل خروج</span>
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.side-nav {
  background-color: #f5f7fb;
  height: calc(100vh - 67px);
  position: fixed;
}
.links a,
.btn-logout {
  transition-duration: 0.2s;
}
.links a:hover,
.btn-logout:hover {
  background-color: #ffccd3;
}
.photo-icon {
  width: 30px;
  height: 30px;
  object-fit: cover;
}
</style>
