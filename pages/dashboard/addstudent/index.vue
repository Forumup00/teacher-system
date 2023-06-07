<template>
  <div class="container-fluid py-3">
    <div class="row">
      <div class="col-lg-3">
        <div class="w-100 h-100 d-flex align-items-center flex-column gap-3">
          <img
            src="@/assets/imgs/profile.png"
            alt="profile"
            class="profile-img rounded-circle"
          />

          <div>
            <label for="profilePic" class="btn btn-outline-primary fs-5">
              تحميل صورة
            </label>

            <input
              type="file"
              name="profile"
              id="profilePic"
              class="d-none"
              accept="image/*"
            />
          </div>
        </div>
      </div>

      <div class="col-lg-9">
        <form @submit.prevent="" class="w-100">
          <h5>بيانات الطالب</h5>

          <div class="d-flex align-items-center gap-3 mb-2">
            <div class="flex-grow-1">
              <label for="name" class="form-label">
                <span>الأسم</span>
                <span class="text-danger me-1" title="حقل مطلوب">*</span>
              </label>

              <input
                type="text"
                id="name"
                v-model="name"
                @blur="
                  generateEmail();
                  generateParentEmail();
                  generatePassword();
                  generatePasswordParent();
                "
                class="form-control fs-5"
                placeholder="أدخل اسم الطالب"
                required
                autocomplete="off"
              />
            </div>

            <div class="w-25">
              <label for="code" class="form-label">
                <span>الكود</span>
                <span class="text-danger me-1" title="حقل مطلوب">*</span>
              </label>

              <input
                type="number"
                id="code"
                v-model="code"
                disabled
                class="form-control fs-5"
                placeholder="أدخل كود الطالب"
                required
              />
            </div>
          </div>

          <div class="d-flex align-items-center gap-3 mb-2">
            <div class="w-50">
              <label for="year" class="form-label">
                <span>الصف</span>
                <span class="text-danger me-1" title="حقل مطلوب">*</span>
              </label>

              <select class="form-select fs-5" id="year" required>
                <option selected>أختر الصف</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div class="w-50">
              <label for="phone" class="form-label">رقم الهاتف</label>

              <input
                type="tel"
                id="phone"
                class="form-control fs-5"
                placeholder="أدخل رقم هاتف الطالب"
              />
            </div>
          </div>

          <div class="d-flex align-items-center gap-3 mb-2">
            <div class="w-50">
              <label for="group" class="form-label">
                <span>المجموعة</span>
                <span class="text-danger me-1" title="حقل مطلوب">*</span>
              </label>

              <select class="form-select fs-5" id="group" required>
                <option selected>أختر المجموعة</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div class="w-50">
              <label for="note" class="form-label">ملاحظات</label>

              <input
                type="text"
                id="note"
                class="form-control fs-5"
                placeholder="ملاحاظات على الطالب"
              />
            </div>
          </div>

          <div class="d-flex align-items-center gap-3 mb-2">
            <div class="w-50 position-relative">
              <label for="mail" class="form-label">
                <span>البريد الألكترونى</span>
                <span class="text-danger me-1" title="حقل مطلوب">*</span>
              </label>

              <input
                type="email"
                id="mail"
                v-model="email"
                :disabled="editEmail"
                class="form-control fs-5 dir-ltr"
                placeholder="أدخل البريد الألكترونى"
                required
              />

              <div
                class="position-absolute start-0 d-flex align-items-center gap-2"
              >
                <label for="editEmail">تعديل</label>

                <input
                  type="checkbox"
                  id="editEmail"
                  class="form-check-input"
                  @change="editEmail = !editEmail"
                />
              </div>
            </div>

            <div class="w-50 position-relative">
              <label for="password" class="form-label">
                <span>كلمة السر</span>
                <span class="text-danger me-1" title="حقل مطلوب">*</span>
              </label>

              <input
                type="text"
                id="password"
                v-model="password"
                class="form-control fs-5"
                placeholder="أدخل كلمة السر"
                :disabled="editPassword"
                required
              />

              <div class="position-absolute start-0 top-50">
                <button
                  class="btn border-0"
                  type="button"
                  @click="generatePassword"
                >
                  <img
                    src="@/assets/imgs/create.png"
                    alt="generate"
                    class="w-icon rounded-circle"
                  />
                </button>
              </div>

              <div
                class="position-absolute start-0 d-flex align-items-center gap-2"
              >
                <label for="editPassword">تعديل</label>

                <input
                  type="checkbox"
                  id="editPassword"
                  class="form-check-input"
                  @change="editPassword = !editPassword"
                />
              </div>
            </div>
          </div>

          <div class="d-flex align-items-center gap-3 mb-2">
            <div class="w-25">
              <label for="status" class="form-label">
                <span>الحالة</span>
                <span class="text-danger me-1" title="حقل مطلوب">*</span>
              </label>

              <select class="form-select fs-5" id="status" required>
                <option>أختر الحالة</option>
                <option value="1" selected>Enabled</option>
                <option value="2">Disabled</option>
              </select>
            </div>

            <div class="flex-grow-1">
              <label for="address" class="form-label">العنوان</label>

              <input
                type="address"
                id="address"
                class="form-control fs-5"
                placeholder="أدخل عنوان الطالب"
              />
            </div>
          </div>

          <hr />

          <h5>بيانات ولى الامر</h5>

          <div class="d-flex align-items-center gap-3 mb-2">
            <div class="w-50 position-relative">
              <label for="mailParent" class="form-label">
                <span>البريد الألكترونى</span>
                <span class="text-danger me-1" title="حقل مطلوب">*</span>
              </label>

              <input
                type="email"
                id="mailParent"
                v-model="emailParent"
                :disabled="editEmailParent"
                class="form-control fs-5 dir-ltr"
                placeholder="أدخل البريد الألكترونى لولى الأمر"
                required
              />

              <div
                class="position-absolute start-0 d-flex align-items-center gap-2"
              >
                <label for="editEmailParent">تعديل</label>

                <input
                  type="checkbox"
                  id="editEmailParent"
                  class="form-check-input"
                  @change="editEmailParent = !editEmailParent"
                />
              </div>
            </div>

            <div class="w-50 position-relative">
              <label for="passwordParent" class="form-label">
                <span>كلمة السر</span>
                <span class="text-danger me-1" title="حقل مطلوب">*</span>
              </label>

              <input
                type="text"
                id="passwordParent"
                v-model="passwordParent"
                :disabled="editPasswordParent"
                class="form-control fs-5"
                placeholder="أدخل كلمة السر لولى الأمر"
                required
              />

              <div class="position-absolute start-0 top-50">
                <button
                  class="btn border-0"
                  type="button"
                  @click="generatePasswordParent"
                >
                  <img
                    src="@/assets/imgs/create.png"
                    alt="generate"
                    class="w-icon rounded-circle"
                  />
                </button>
              </div>

              <div
                class="position-absolute start-0 d-flex align-items-center gap-2"
              >
                <label for="editPasswordParent">تعديل</label>

                <input
                  type="checkbox"
                  id="editPasswordParent"
                  class="form-check-input"
                  @change="editPasswordParent = !editPasswordParent"
                />
              </div>
            </div>
          </div>

          <div class="d-flex align-items-center gap-3 mb-2">
            <div class="w-50">
              <label for="telParent" class="form-label">
                <span>رقم الهاتف الأول</span>
                <span class="text-danger me-1" title="حقل مطلوب">*</span>
              </label>

              <input
                type="tel"
                id="telParent"
                class="form-control fs-5"
                placeholder="أدخل رقم هاتف ولى الامر"
                required
              />
            </div>

            <div class="w-50">
              <label for="telParent2" class="form-label">رقم هاتف اخر</label>

              <input
                type="tel"
                id="telParent2"
                class="form-control fs-5"
                placeholder="أدخل رقم هاتف اخر لولى الامر"
              />
            </div>
          </div>

          <div class="d-flex align-items-center justify-content-center">
            <button class="btn btn-danger fs-5 w-25">اضافة الطالب</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});

const name = ref("");
const code = ref(1258);
const email = ref("");
const password = ref("");

const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
const generatePassword = () => {
  if (name.value) {
    let pass = "";
    for (let i = 0; i < 10; i++) {
      let rand = Math.floor(Math.random() * chars.length);
      pass += chars[rand];
    }
    password.value = pass;
  }
};

let firstName = ref("");
let secondName = ref("");
let thirdName = ref("");
let forthName = ref("");
watch(name, (value) => {
  firstName.value = value.split(" ")[0];
  secondName.value = value.split(" ")[1];
  thirdName.value = value.split(" ")[2];
  forthName.value = value.split(" ")[3];
});

let emailContainer = ref("");

const generateEmail = async () => {
  if (name.value) {
    let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ar&tl=en&dt=t&q=${firstName.value} ${secondName.value}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        emailContainer.value = data[0][0][0];
      });

    let emailFromName = emailContainer.value.split("");

    emailFromName.forEach((char, index) => {
      if (char == " ") {
        emailFromName[index] = ".";
      } else if (char == "-") {
        emailFromName[index] = "_";
      }
    });

    email.value =
      emailFromName.join("").toLowerCase() + code.value + "@dodo.edu.eg";
  }
};

// ===========================

const emailParent = ref("");
const passwordParent = ref("");

const generatePasswordParent = () => {
  if (name.value) {
    let pass = "";
    for (let i = 0; i < 10; i++) {
      let rand = Math.floor(Math.random() * chars.length);
      pass += chars[rand];
    }
    passwordParent.value = pass;
  }
};

let emailParentContainer = ref("");

const generateParentEmail = async () => {
  if (name.value) {
    let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ar&tl=en&dt=t&q=${secondName.value} ${thirdName.value}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        emailParentContainer.value = data[0][0][0];
      });

    let emailFromName = emailParentContainer.value.split("");

    emailFromName.forEach((char, index) => {
      if (char == " ") {
        emailFromName[index] = ".";
      } else if (char == "-") {
        emailFromName[index] = "_";
      }
    });

    emailParent.value =
      emailFromName.join("").toLowerCase() + code.value + "p" + "@dodo.edu.eg";
  }
};

const editEmail = ref(true);
const editPassword = ref(true);
const editEmailParent = ref(true);
const editPasswordParent = ref(true);
</script>

<style scoped>
.profile-img {
  width: 250px;
  height: 250px;
  object-fit: cover;
}
.w-icon {
  width: 20px;
  height: 20px;
  object-fit: cover;
}
</style>
