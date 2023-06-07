<template>
  <div class="progress-container overflow-hidden">
    <div class="progress-bar" id="myBar"></div>
  </div>

  <nav class="navbar navbar-expand">
    <div class="container-fluid">
      <div class="d-flex justify-content-between align-items-center w-100">
        <div
          class="d-flex justify-content-between align-items-center gap-5 w-25"
        >
          <NuxtLink
            class="btn btn-login border-0 position-relative overflow-hidden"
            :to="localPath('/auth/login')"
          >
            <div class="tip d-none"></div>

            <img src="@/assets/imgs/enter.png" class="enter" alt="enter" />

            <span class="me-2 fs-5 login fw-bold">{{ $t("Login") }}</span>
          </NuxtLink>

          <swichLang />
        </div>

        <div class="d-flex align-items-center gap-3">
          <div>
            <ul
              class="list-unstyled d-flex justify-content-between align-items-center gap-3 p-0 m-0"
            >
              <li class="position-relative px-3 py-2 rounded-3 overflow-hidden">
                <NuxtLink
                  class="text-decoration-none text-dark fw-bold"
                  :to="localPath('/#home')"
                >
                  {{ $t("Home") }}
                </NuxtLink>

                <div class="tip d-none"></div>
              </li>

              <li class="position-relative px-3 py-2 rounded-3 overflow-hidden">
                <NuxtLink
                  class="text-decoration-none text-dark fw-bold"
                  :to="localPath('/#about')"
                >
                  {{ $t("About us") }}
                </NuxtLink>

                <div class="tip d-none"></div>
              </li>

              <li class="position-relative px-3 py-2 rounded-3 overflow-hidden">
                <NuxtLink
                  class="text-decoration-none text-dark fw-bold"
                  :to="localPath('/#contact')"
                >
                  {{ $t("Contact us") }}
                </NuxtLink>

                <div class="tip d-none"></div>
              </li>
            </ul>
          </div>

          <div>
            <NuxtLink
              class="text-decoration-none text-dark d-flex justify-content-center align-items-center gap-3"
              :to="localPath('/')"
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
    </div>
  </nav>
</template>

<script setup>
const localPath = useLocalePath();

onMounted(() => {
  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  window.onscroll = function () {
    myFunction();
  };
});
</script>

<style scoped>
.btn-login,
ul li {
  transition-duration: 0.3s !important;
}
.btn-login:hover .tip,
.btn-login:active .tip,
ul li:hover .tip,
ul li:active .tip {
  display: block !important;
}
.login {
  -webkit-text-fill-color: transparent;
  background: linear-gradient(45deg, #262a45, #262a45);
  -webkit-background-clip: text;
  background-clip: text;
}

.tip {
  background: linear-gradient(45deg, #9d316e, #262a45);
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 4px;
}
.logo-img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
.enter {
  width: 35px;
  height: 35px;
  object-fit: contain;
}
.progress-container {
  width: 100%;
  height: 5px;
  /* background: #ccc; */
  position: sticky;
  top: 0;
  z-index: 10;
}

.progress-bar {
  height: 4px;
  background: #8f222d;
  width: 0%;
}
</style>
