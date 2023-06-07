<template>
  <tr>
    <th class="text-center">1</th>

    <td class="">
      <div class="d-flex align-items-center gap-2">
        <img
          src="@/assets/imgs/profile.png"
          class="profile-img"
          alt="profile"
        />
        <p class="mb-0 text-truncate name">محمد السيد محمد صبري حسن مصطفى</p>
      </div>
    </td>

    <td class="text-center">1258</td>

    <td class="text-center text-danger">
      <button class="btn btn-primary">تحضير</button>
    </td>
  </tr>
</template>

<script setup></script>

<style scoped>
.profile-img {
  width: 30px;
  height: 30px;
  object-fit: cover;
}
.name {
  max-width: 230px;
}
</style>
