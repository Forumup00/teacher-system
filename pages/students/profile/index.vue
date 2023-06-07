<template>
  <div class="container-fluid p-4 info">
    <div class="row">
      <div class="col-lg-12">
        <div class="w-100 d-flex align-items-center gap-3 border-bottom pb-3">
          <img
            src="@/assets/imgs/profile.png"
            class="img-profile rounded-circle"
            alt="profile"
          />

          <div>
            <p class="mb-2 fs-5">
              <span class="text-primary fw-bold">الأسم : </span>

              <span>محمد السيد محمد صبري حسن مصطفى</span>
            </p>

            <p class="mb-2 fs-5">
              <span class="text-primary fw-bold">الصف : </span>

              <span>1ع</span>
            </p>

            <p class="mb-0 fs-5">
              <span class="text-primary fw-bold">المجموعة : </span>

              <span>1.5 السبت</span>
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="w-100">
          <h5 class="mb-2 border-bottom py-2 text-bg-primary">
            البيانات الشخصية للطالب
          </h5>

          <div class="border-bottom pb-2">
            <div class="d-flex align-items-center gap-2 overflow-hidden mb-2">
              <div class="d-flex align-items-center gap-2 w-50">
                <p class="mb-0 fs-5 fw-bold">الأسم الأول :</p>

                <p class="mb-0 fs-5">محمد</p>
              </div>

              <div class="d-flex align-items-center gap-2 w-50">
                <p class="mb-0 fs-5 fw-bold">الأسم الأخير :</p>

                <p class="mb-0 fs-5">السيد محمد صبري حسن</p>
              </div>
            </div>

            <div class="d-flex align-items-center gap-2 overflow-hidden mb-2">
              <div class="d-flex align-items-center gap-2 w-50">
                <p class="mb-0 fs-5 fw-bold">البريد الألكتروني :</p>

                <p class="mb-0 fs-5">dodo87344@gmail.com</p>
              </div>

              <div class="d-flex align-items-center gap-2 w-50">
                <p class="mb-0 fs-5 fw-bold">رقم الهاتف :</p>

                <p class="mb-0 fs-5">01226074394</p>
              </div>
            </div>

            <div class="d-flex align-items-center gap-2 overflow-hidden mb-2">
              <div class="d-flex align-items-center gap-2 w-50">
                <p class="mb-0 fs-5 fw-bold">الكود :</p>

                <p class="mb-0 fs-5">1596</p>
              </div>

              <div class="d-flex align-items-center gap-2 w-50">
                <p class="mb-0 fs-5 fw-bold">الحالة :</p>

                <p class="mb-0 fs-5 text-success">Active</p>
              </div>
            </div>

            <div class="d-flex align-items-center gap-2 overflow-hidden mb-2">
              <div class="d-flex align-items-center gap-2 w-50">
                <p class="mb-0 fs-5 fw-bold">مصاريف الشهر الحالى :</p>

                <p class="mb-0 fs-5">
                  <span class="ms-2"> تم الدفع </span>

                  <img
                    src="@/assets/imgs/checked.png"
                    class="checked"
                    alt="checked"
                  />
                </p>
              </div>

              <div class="d-flex align-items-center gap-2 w-50">
                <p class="mb-0 fs-5 fw-bold">المستوى :</p>

                <p class="mb-0 fs-5">ممتاز</p>
              </div>
            </div>

            <div class="d-flex align-items-center gap-2 overflow-hidden">
              <div class="d-flex align-items-center gap-2 w-50">
                <p class="mb-0 fs-5 fw-bold">الملاحظات :</p>

                <p class="mb-0 fs-5">لا يوجد</p>
              </div>

              <div class="d-flex align-items-center gap-2 w-50">
                <p class="mb-0 fs-5 fw-bold">العنوان :</p>

                <p class="mb-0 fs-5">7 ش الشاذلى</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="w-100">
          <h5 class="mb-2 border-bottom py-2 text-bg-primary">
            البيانات الشخصية لولى الأمر
          </h5>

          <div class="border-bottom pb-2">
            <div class="d-flex align-items-center gap-2 overflow-hidden mb-2">
              <div class="d-flex align-items-center gap-2 w-50">
                <p class="mb-0 fs-5 fw-bold">البريد الألكتروني :</p>

                <p class="mb-0 fs-5">abododo87344@gmail.com</p>
              </div>

              <div class="d-flex align-items-center gap-2 w-50">
                <p class="mb-0 fs-5 fw-bold">رقم الهاتف :</p>

                <p class="mb-0 fs-5">01280022318</p>
              </div>
            </div>

            <div class="d-flex align-items-center gap-2 overflow-hidden mb-2">
              <div class="d-flex align-items-center gap-2 w-50">
                <p class="mb-0 fs-5 fw-bold">كلمة السر :</p>

                <p class="mb-0 fs-5">5@eRW8dA0</p>
              </div>

              <div class="d-flex align-items-center gap-2 w-50">
                <p class="mb-0 fs-5 fw-bold">رقم الهاتف :</p>

                <p class="mb-0 fs-5">01226074394</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "student",
});
</script>

<style scoped>
.info {
  height: calc(100vh - 67px);
}
.img-profile {
  width: 150px;
  height: 150px;
  object-fit: cover;
}
.checked {
  width: 25px;
  height: 25px;
  object-fit: cover;
}
</style>
