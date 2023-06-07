<template>
  <div class="p-2 bg-white rounded-3">
    <div class="text-center">
      <img
        src="@/assets/imgs/profile.png"
        alt="profile"
        class="rounded-circle profile-img"
      />
    </div>

    <div class="d-flex align-items-center gap-3">
      <div class="flex-grow-1">
        <p class="mb-1">الأسم</p>

        <p class="p-2 rounded-2 border fs-5">محمد السيد محمد صبري حسن مصطفى</p>
      </div>

      <div>
        <p class="mb-1">الكود</p>

        <p class="p-2 rounded-2 border fs-5">1234</p>
      </div>
    </div>

    <div class="d-flex align-items-center gap-3">
      <div class="w-50">
        <p class="mb-1">الحالة</p>

        <p class="p-2 rounded-2 border fs-5">Active</p>
      </div>

      <div class="w-50">
        <p class="mb-1">المصاريف</p>

        <p class="p-2 rounded-2 border fs-5">لم يتم الدفع</p>
      </div>
    </div>

    <div class="d-flex align-items-center gap-3">
      <div class="flex-grow-1">
        <p class="mb-1">الصف</p>

        <p class="p-2 rounded-2 border fs-5">الأول الأعدادى</p>
      </div>

      <div class="flex-grow-1">
        <p class="mb-1">مطلوب</p>

        <p class="p-2 rounded-2 border fs-5">لا</p>
      </div>

      <div class="flex-grow-1">
        <p class="mb-1">عدد ايام الغياب</p>

        <p class="p-2 rounded-2 border fs-5">8</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.profile-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}
</style>
