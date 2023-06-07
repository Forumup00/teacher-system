<template>
  <div class="side-nav d-flex justify-content-between flex-column">
    <div class="links">
      <NuxtLink
        to="/dashboard/students"
        class="text-decoration-none d-flex align-items-center px-2 py-1 text-dark gap-2 border-bottom"
      >
        <img
          src="@/assets/imgs/teamwork.png"
          class="photo-icon"
          alt="teamwork"
        />

        <span class="fs-5">الطلاب</span>
      </NuxtLink>

      <NuxtLink
        to="/dashboard/years"
        class="text-decoration-none d-flex align-items-center px-2 py-1 text-dark gap-2 border-bottom"
      >
        <img
          src="@/assets/imgs/calendar.png"
          class="photo-icon"
          alt="calendar"
        />

        <span class="fs-5">السنوات</span>
      </NuxtLink>

      <NuxtLink
        to="/dashboard/fees"
        class="text-decoration-none d-flex align-items-center px-2 py-1 text-dark gap-2 border-bottom"
      >
        <img src="@/assets/imgs/money.png" class="photo-icon" alt="money" />

        <span class="fs-5">المصروفات</span>
      </NuxtLink>

      <NuxtLink
        to="/dashboard/addstudent"
        class="text-decoration-none d-flex align-items-center px-2 py-1 text-dark gap-2 border-bottom"
      >
        <img
          src="@/assets/imgs/add-group.png"
          class="photo-icon"
          alt="add-group"
        />

        <span class="fs-5">اضافة طالب</span>
      </NuxtLink>

      <NuxtLink
        to="/dashboard/degrees"
        class="text-decoration-none d-flex align-items-center px-2 py-1 text-dark gap-2 border-bottom"
      >
        <img src="@/assets/imgs/check.png" class="photo-icon" alt="check" />

        <span class="fs-5">تسجيل درجات</span>
      </NuxtLink>

      <NuxtLink
        to="/"
        class="text-decoration-none d-flex align-items-center px-2 py-1 text-dark gap-2 border-bottom"
      >
        <img src="@/assets/imgs/edit-info.png" class="photo-icon" alt="edit" />

        <span class="fs-5">تعديل بيانات طالب</span>
      </NuxtLink>

      <NuxtLink
        to="/"
        class="text-decoration-none d-flex align-items-center px-2 py-1 text-dark gap-2 border-bottom"
      >
        <img
          src="@/assets/imgs/delete-user.png"
          class="photo-icon"
          alt="delete user"
        />

        <span class="fs-5">حذف طالب</span>
      </NuxtLink>

      <NuxtLink
        to="/"
        class="text-decoration-none d-flex align-items-center px-2 py-1 text-dark gap-2 border-bottom"
      >
        <img src="@/assets/imgs/report.png" class="photo-icon" alt="report" />

        <span class="fs-5">تقارير</span>
      </NuxtLink>

      <NuxtLink
        to="/"
        class="text-decoration-none d-flex align-items-center px-2 py-1 text-dark gap-2 border-bottom"
      >
        <img src="@/assets/imgs/gear.png" class="photo-icon" alt="gear" />

        <span class="fs-5">أعدادات</span>
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
