<template>
  <div class="bg-darkgrey w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
    <div class="w-full h-100">

      <div class="flex-shrink-0">
        <a href="/" class="block">
            <img src="/logo.png" alt="Weebflix logo" class="h-[36px] md:h-[48px]">
        </a>
      </div>

      <h1 class="text-white text-xl md:text-2xl font-bold leading-tight mt-6">Registration your account</h1>

      <ErrorMessage />

      <form class="mt-6" @submit.prevent="doRegister">
        <div>
          <label class="block text-white mb-2 text-xs md:text-sm">Name</label>
          <input
            v-model="form.name"
            type="text"
            name="name"
            id="name"
            placeholder="Enter Full Name"
            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary focus:bg-white focus:outline-none font-bold"
            autofocus
            autocomplete
            required
          />
        </div>

        <div class="mt-4">
          <label class="block text-white mb-2 text-xs md:text-sm">Email Address</label>
          <input
            v-model="form.email"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Address"
            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary focus:bg-white focus:outline-none font-bold"
            required
          >
        </div>

        <div class="mt-4">
          <label class="block text-white mb-2 text-xs md:text-sm">Password</label>
          <input
            v-model="form.password"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            minlength="6"
            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary focus:bg-white focus:outline-none font-bold"
            autocomplete
            required
          />
        </div>

        <button
          type="submit"
          class="w-full block bg-primary hover:bg-darkprimary focus:bg-darkprimary text-white font-semibold rounded-lg px-4 py-3 mt-8 md:mt-10"
        >
          Register
        </button>
      </form>

      <p class="mt-8 text-white text-sm">
        Already have account?
        <router-link to="/login" class="text-primary hover:text-bl ue-700 font-semibold">
          Log in to account
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import ErrorMessage from '../components/commons/ErrorMessage.vue';

export default {
  name: 'Register',
  components: {
    ErrorMessage
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    ...mapActions({
      addAccountRegister: 'user/addAccountRegister',
    }),
    async doRegister() {
      if (
        !Object.values(this.form)
          .every(x => x === null || x === '')
      ) {
        const response = await this.addAccountRegister(this.form);

        if (response) {
          this.$router.push('/login');
        }
      }
    }
  }
}
</script>

<style>

</style>