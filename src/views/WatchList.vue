<template>
  <div class="flex flex-col md:flex-row max-w-6xl mx-auto">
    <div class=" mb-10 md:my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-xs mx-auto">
      <div class="bg-darkgrey rounded-lg shadow-sm pb-10">
        <div class="relative h-40">
          <nav class="absolute text-white font-bold z-20 m-5">
            <router-link class="flex items-center gap-4" to="/">
              <feather
                type="arrow-left"
                stroke="#FFFFFF"
              ></feather>
              Back
            </router-link>
          </nav>
          <img class="absolute h-full w-full object-cover" src="/img/bg-pattern.jpg" alt="Background Pattern">
        </div>
        <div class="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
          <img class="object-cover w-full h-full" src="/img/avatar.png" alt="Profile Picture">
        </div>
        <div class="mt-16 flex flex-col items-center">
          <h1 class="text-lg text-center font-bold text-white">
            {{ user && user.displayName }} 
          </h1>
          <p class="text-sm text-gray-400 tracking-wide font-medium text-center mt-1 mb-4">
            {{ user && user.email }}
          </p>
          <p class="text-sm text-white text-center">
            {{ getCountWatchList }} watch list
          </p>
          <button
            class="bg-primary hover:bg-darkprimary focus:bg-darkprimary text-white font-semibold rounded-lg px-4 py-2 mt-8 mx-auto text-sm"
            @click="doLogout"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
    <div class="flex-auto px-5 md:pt-12">
      <h1 class="text-white font-bold md:text-xl px-5">
        My Watch List
      </h1>
      <div v-if="getWatchList && getWatchList.length > 0" class="mb-16">
        <ListAnime type="watch-list" :list-anime="getWatchList" />
      </div>
      <div v-else>
        <p class="text-center text-gray-400 my-12 text-sm tracking-wider">
          No Watch List Available :(
          <router-link to="/">
            <span class="text-primary font-bold">Go to Home</span>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import ListAnime from '../components/ListAnime.vue';

export default {
  name: 'WatchList',
  components: {
    ListAnime
  },
  computed: {
    ...mapGetters({
      user: 'user/getUserInfo',
      getWatchList: 'watchList/getWatchList',
      getCountWatchList: 'watchList/getCountWatchList'
    })
  },
  mounted() {
    this.fetchFirestore();
  },
  methods: {
    ...mapActions({
      signOutAccount: 'user/signOutAccount',
      fetchFirestore: 'watchList/fetchFirestore'
    }),
    async doLogout() {
      try {
        await this.signOutAccount();
        this.$router.push('/login');
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>