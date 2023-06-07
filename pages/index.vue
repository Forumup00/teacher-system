<template>
  <div class="container my-4">
    <div class="row mb-5" id="home">
      <div class="col-lg-6">
        <div
          class="bg-container bg-white w-100 overflow-hidden rounded-3 d-flex justify-content-center align-items-center flex-column"
        >
          <div class="d-flex align-items-center mb-3">
            <span class="fs-2">فى مجتمعنا تعلم كيف</span>

            <h2 class="mb-0 text-danger bg-white rounded-5 px-1">
              <Typewriter
                :words="data"
                :loop="0"
                :delay-speed="1500"
                :delete-speed="80"
                :type-speed="80"
                :cursor="true"
                :cursor-blinking="true"
                :cursor-style="'|'"
                :cursor-color="'#000000'"
                class="text"
              />
            </h2>
          </div>

          <div class="bg-light p-3 rounded-5 word-container">
            <h2 class="mb-0 word">من السهل أن تبدأ من جديد</h2>
          </div>
        </div>
      </div>

      <div class="col-lg-6 p-0">
        <div
          class="bg-container bg-white w-100 overflow-hidden rounded-3 d-flex justify-content-center align-items-center"
        >
          <swiper
            dir="ltr"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :pagination="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide>
              <img src="@/assets/imgs/e1.jpg" class="idea-img" alt="show" />
            </swiper-slide>

            <swiper-slide>
              <img src="@/assets/imgs/e2.jpg" class="idea-img" alt="show" />
            </swiper-slide>

            <swiper-slide>
              <img src="@/assets/imgs/e3.jpg" class="idea-img" alt="show" />
            </swiper-slide>

            <swiper-slide>
              <img src="@/assets/imgs/e4.jpg" class="idea-img" alt="show" />
            </swiper-slide>

            <swiper-slide>
              <img src="@/assets/imgs/e5.jpg" class="idea-img" alt="show" />
            </swiper-slide>

            <swiper-slide>
              <img src="@/assets/imgs/e6.jpg" class="idea-img" alt="show" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>

    <div class="row g-4 mb-5" id="about">
      <div class="col-lg-12 mb-4">
        <h3 class="mb-0 text-center border-bottom">عننا</h3>
      </div>

      <div class="col-lg-8">
        <div
          class="w-100 bg-dark rounded-3 d-flex justify-content-center flex-column black-one"
        >
          <h1 class="mb-0 text-white text-center mb-5">
            <i class="fa-solid fa-lines-leaning text-warning fs-1 ms-3"></i>

            <span>
              <span class="text-warning">مميزتنا</span>
              فقط من أجلك
            </span>
          </h1>

          <div class="text-center">
            <button class="btn fw-bold fs-5 btn-warning">
              تواصل معنا كى تصبح جزء من عالمنا
            </button>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="w-100 rounded-3 bg-white p-3 black-one position-relative">
          <div class="text-center mb-3">
            <img
              src="@/assets/imgs/certificate.png"
              class="card-logo"
              alt="certificate"
            />
          </div>

          <div
            class="tk-blob position-absolute d-flex"
            style="
              --fill: #e91e63;
              width: 100px;
              opacity: 0.5;
              top: 15%;
              right: 20%;
              z-index: 1;
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.6 385.5">
              <path
                d="M381.4 86.5c43.5 48 77.5 110.3 68.8 168.7-8.6 58.4-59.9 113-114.8 126.7-54.9 13.6-113.4-13.7-176.6-40.6-63.1-27-130.7-53.5-151.5-102.8-20.9-49.2 5.1-121.1 50.3-169.5C102.8 20.7 167.1-3.9 225.9.5c58.8 4.5 111.9 38.1 155.5 86z"
              ></path>
            </svg>
          </div>

          <h3 class="mb-3">تميز فى ما تتعلمة</h3>

          <p class="text-black-50 fs-4">
            ضيف إلى عقلك وزود فرصتك لتكون من أنجب الطلاب
          </p>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="w-100 rounded-3 bg-white p-3 black-one position-relative">
          <div class="text-center mb-3">
            <img
              src="@/assets/imgs/online-learning.png"
              class="card-logo"
              alt="learning"
            />
          </div>

          <div
            class="tk-blob position-absolute d-flex"
            style="
              --fill: #ffca2c;
              width: 100px;
              opacity: 0.5;
              top: 15%;
              right: 20%;
              z-index: 1;
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 319.2 356.7">
              <path
                d="M271.9 50.3c30.6 29.3 51.3 75.5 46.6 123.9-4.6 48.4-34.6 99-86.5 136.3s-125.6 61.4-168.3 35.3S9.4 243.5 3.4 177.3C-2.7 111.2-3.1 55.2 24 26.7 51.1-1.9 105.9-2.9 153.4 2.8c47.6 5.8 88 18.2 118.5 47.5z"
              ></path>
            </svg>
          </div>

          <h3 class="mb-3">تميز فى ما تتعلمة</h3>

          <p class="text-black-50 fs-4">
            ضيف إلى عقلك وزود فرصتك لتكون من أنجب الطلاب
          </p>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="w-100 rounded-3 bg-white p-3 black-one position-relative">
          <div class="text-center mb-3">
            <img
              src="@/assets/imgs/webinar.png"
              class="card-logo"
              alt="webinar"
            />
          </div>

          <div
            class="tk-blob position-absolute d-flex"
            style="
              --fill: #009688;
              width: 100px;
              opacity: 0.5;
              top: 15%;
              right: 20%;
              z-index: 1;
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
              <path
                d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"
              ></path>
            </svg>
          </div>

          <h3 class="mb-3">تميز فى ما تتعلمة</h3>

          <p class="text-black-50 fs-4">
            ضيف إلى عقلك وزود فرصتك لتكون من أنجب الطلاب
          </p>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="w-100 rounded-3 bg-white p-3 black-one position-relative">
          <div class="text-center mb-3">
            <img
              src="@/assets/imgs/laptop.png"
              class="card-logo"
              alt="laptop"
            />
          </div>

          <div
            class="tk-blob position-absolute d-flex"
            style="
              --time: 20s;
              --amount: 5;
              --fill: #ff8c00;
              width: 100px;
              opacity: 0.5;
              top: 15%;
              right: 20%;
              z-index: 1;
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
              <path
                d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"
              ></path>
            </svg>
          </div>

          <h3 class="mb-3">تميز فى ما تتعلمة</h3>

          <p class="text-black-50 fs-4">
            ضيف إلى عقلك وزود فرصتك لتكون من أنجب الطلاب
          </p>
        </div>
      </div>
    </div>

    <div class="row" id="contact">
      <div class="col-lg-12 mb-4">
        <h3 class="mb-0 text-center border-bottom">تواصل معنا</h3>
      </div>

      <div class="col-lg-6">
        <div
          class="w-100 bg-white overflow-hidden rounded-3 form-container p-5"
        >
          <form @submit.prevent="">
            <div class="mb-3">
              <label for="email" class="fs-5 form-label"
                >البريد الألكتروني</label
              >

              <input
                type="email"
                id="email"
                class="form-control py-2 fs-5 mt-2"
                placeholder="أدخل بريدك الألكتروني"
              />
            </div>

            <div class="mb-3">
              <label for="password" class="fs-5 form-label">كلمة السر</label>

              <input
                type="password"
                id="password"
                class="form-control py-2 fs-5 mt-2"
                placeholder="أدخل كلمة السر الخاصة بك"
              />
            </div>

            <div class="mb-3">
              <label for="subject" class="fs-5 form-label">الموضوع</label>

              <input
                type="text"
                id="subject"
                class="form-control py-2 fs-5 mt-2"
                placeholder="أدخل الموضوع عن..."
              />
            </div>

            <div class="mb-3">
              <label for="content" class="fs-5 form-label">أترك رسالتك</label>

              <textarea
                class="form-control fs-5"
                name="content"
                id="content"
                cols="30"
                rows="3"
                placeholder="أدخل رسالتك"
              ></textarea>
            </div>

            <div>
              <button class="btn btn-dark fw-bold w-100 fs-5 py-2">
                Send Messege
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="w-100 overflow-hidden rounded-3 container-contact">
          <img
            src="@/assets/imgs/undraw_Online_learning_re_qw08.png"
            class="contact-img"
            alt="learning"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Typewriter } from "vue-simple-typewriter";
import "vue-simple-typewriter/dist/style.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const modules = ref([Autoplay, Pagination]);

const data = ref(["تفكر جيدا", "تفهم بوضوح", "تتعلم كثيرا", "تكتسب مهارات"]);
</script>

<style scoped>
.img-container {
  width: 100%;
  height: 100%;
}
.bg-container {
  height: 600px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.idea-img {
  width: 100%;
  height: 600px;
  object-fit: cover;
}
.word {
  -webkit-text-fill-color: transparent;
  background: linear-gradient(45deg, #9d316e, #de2d3e);
  -webkit-background-clip: text;
  background-clip: text;
}
.word-container {
  background-color: #f2f2ff;
}

.black-one {
  height: 250px;
  transition-duration: 0.3s;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.black-one:hover {
  transform: translateY(-8px);
}
.card-logo {
  width: 80px;
  height: 80px;
  object-fit: cover;
  opacity: 0.5;
}
.contact-img {
  width: 100%;
  height: 600px;
  object-fit: cover;
}
.form-container,
.container-contact {
  height: 600px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
</style>
