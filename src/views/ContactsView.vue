<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <NavBarComponent />
          </div>
        </div>
        <h1 class="title-big">Contact us</h1>
      </div>
    </div>

    <!-- Форма -->
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />

            <form @submit.prevent="submitForm" class="mt-5">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-center">
                  <label for="name-input" class="mb-0">
                    Name <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="form.name"
                    type="text"
                    class="form-control"
                    id="name-input"
                    required
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-center">
                  <label for="email-input" class="mb-0">
                    E-mail <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    id="email-input"
                    required
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-center">
                  <label for="phone-input" class="mb-0">Phone</label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="form.phone"
                    type="tel"
                    class="form-control"
                    id="phone-input"
                  />
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-center">
                  <label for="message" class="mb-3 mt-3 text-center">
                    Your message <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <textarea
                    v-model="form.message"
                    class="form-control"
                    id="message"
                    rows="5"
                    placeholder="Leave your comments here"
                    required
                  ></textarea>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <button
                    @click="sendForm"
                    type="submit"
                    class="btn btn-outline-dark send-btn"
                  >
                    Send us
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';

export default {
  name: 'ContactsView',
  components: { NavBarComponent },
  //Пока сохраняем тут
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      const newForma = JSON.stringify(this.form);
      console.log('Отправленные данные:', newForma);
      this.form = {
        name: '',
        email: '',
        phone: '',
        message: '',
      };
      alert('Спасибо! Ваше сообщение отправлено.');
    },
    sendForm() {
      //this.$store.........('sendForm', this.form)потом сохранить и отправить на полку
      console.log('send form button click');
    },
  },
};
</script>
<style>
</style>
