<template>
  <select class="form-select w-30" v-model="lang">
    <option selected disabled>اللغة</option>

    <option value="ar-EG">
      <span>العربية</span>
    </option>

    <option value="en-US">
      <span>الانجليزية</span>
    </option>
  </select>
</template>

<script setup>
const { locales, locale, setLocale } = useI18n();
const lang = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>

<style scoped>
.w-30 {
  width: 48%;
}
</style>
