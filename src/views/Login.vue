<template>
  <div class="bg-darkgrey w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
    <div class="w-full h-100">

      <div class="flex-shrink-0">
        <a href="/" class="block">
            <img src="/logo.png" alt="Weebflix logo" class="h-[36px] md:h-[48px]">
        </a>
      </div>

      <h1 class="text-white text-xl md:text-2xl font-bold leading-tight my-6">Log in to your account</h1>

      <ErrorMessage />

      <form class="mt-6" @submit.prevent="doLogin">
        <div>
          <label class="block text-white mb-2 text-xs md:text-sm">Email Address</label>
          <input
            v-model="form.email"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Address"
            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary focus:bg-white focus:outline-none font-bold"
            autofocus
            autocomplete
            required
          />
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
          Log In
        </button>
      </form>

      <hr class="my-5 border-gray-500 w-full">

      <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
        <div class="flex items-center justify-center">
          <GoogleIcon />
          <span class="ml-4">Log in with Google</span>
        </div>
      </button>
      <p class="mt-8 text-white text-sm">
        Need an account?
        <router-link to="/register" class="text-primary hover:text-bl ue-700 font-semibold">
          Create an account
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

import ErrorMessage from '../components/ErrorMessage.vue';
import GoogleIcon from '../components/icons/Google.vue';

export default {
  name: 'Register',
  components: {
    GoogleIcon,
    ErrorMessage
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      isError: false
    };
  },
  computed: {
    ...mapState('user', {
      getUserInfoMap: 'user_info'
    }),
    ...mapGetters({
      isAuthenticated: 'user/isAuthenticated'
    }),
    getUserInfo() {
      return this.$store.state.user.user_info;
    }
  },
  methods: {
    ...mapActions({
      fetchLogin: 'user/fetchLogin',
    }),
    async doLogin() {
      this.isError = false;

      const response = await this.fetchLogin(this.form);

      if (response) {
        this.$router.push('/watch-list');
      } else {
        this.isError = true;
      }
    }
  }
}
</script>

<style>

</style>