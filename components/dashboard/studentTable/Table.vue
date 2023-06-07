<template>
  <tr>
    <th class="text-center bg-white border-start container-number">1</th>

    <td
      class="border-start bg-white container-name c-pointer"
      @click="$router.push(`/dashboard/students/dodo`)"
    >
      <div class="d-flex align-items-center gap-2 w-100">
        <img
          src="@/assets/imgs/profile.png"
          class="profile-img rounded-circle ms-2"
          alt="profile"
        />

        <p class="text-truncate name mb-0 text-primary">
          محمد السيد محمد صبري حسن
        </p>
      </div>
    </td>

    <td class="border-start text-center">1 ع</td>

    <td class="border-start text-center">1.5 السبت</td>

    <td class="border-start text-center">1258</td>

    <td class="border-start text-center">01226074394</td>

    <td class="border-start text-center">01280022318</td>

    <td class="border-start w-email">dodo87344@gmail.com</td>

    <td class="border-start text-center">E58@kMn9174</td>

    <td class="border-start text-center text-success">Active</td>
  </tr>
</template>

<script setup></script>

<style scoped>
.container-name {
  position: sticky;
  right: 0;
}
.profile-img {
  width: 30px;
  height: 30px;
  object-fit: cover;
}
.w-email {
  direction: ltr;
}
.name {
  max-width: 15rem;
}
</style>
