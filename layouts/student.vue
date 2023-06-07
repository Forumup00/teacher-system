<template>
  <StudentsNavsMainNav />

  <StudentsNavsSideNav class="right-side" />

  <div class="main-side">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.right-side {
  width: 210px;
}
.main-side {
  margin-right: 210px;
}
</style>
