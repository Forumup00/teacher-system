<template>
  <nav
    class="navbar navbar-expand border-bottom position-sticky sticky-top bg-white-opacity"
  >
    <div class="container-fluid">
      <div class="d-flex justify-content-between align-items-center w-100">
        <div>
          <NuxtLink
            class="text-decoration-none fs-5 d-flex justify-content-center align-items-center gap-2 text-dark"
            to="/"
          >
            <img
              src="@/assets/imgs/profile.png"
              class="profile-img rounded-circle"
              alt="profile"
            />

            <span class="text-truncate profile-name">محمد السيد</span>
          </NuxtLink>
        </div>

        <div>
          <NuxtLink
            class="text-decoration-none text-dark d-flex justify-content-center align-items-center gap-3"
            to="/"
          >
            <span class="fw-bold fs-2">
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
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.logo-img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
.profile-img {
  width: 40px;
  height: 40px;
  object-fit: cover;
}
.profile-name {
  max-width: 150px;
}
.bg-white-opacity {
  background-color: #f5f7fb98;
}
</style>
