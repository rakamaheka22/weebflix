<template>
  <div>
    <Header />
    <Hero @searchResult="search = $event" />
    <TopCategories v-if="!search" />
    <ListAnime :search="search" :list-anime="topList" />
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Header from '../components/home/Header.vue';
import Hero from '../components/home/Hero.vue';
import TopCategories from '../components/home/TopCategories.vue';
import ListAnime from '../components/commons/ListAnime.vue';
import Footer from '../components/home/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    TopCategories,
    ListAnime,
    Footer
  },
  data() {
    return {
      search: '',
    };
  },
  computed: {
    ...mapGetters({
      topList: 'topList/getTopList',
    }),
  },
  async mounted() {
    if (navigator.onLine) {
      const isLogggedIn = await this.isUserLoggon();
      if (isLogggedIn) {
        this.fetchFirestore();
      }
    }
  },
  methods: {
    ...mapActions({
      isUserLoggon: 'user/isUserLoggon',
      fetchFirestore: 'watchList/fetchFirestore'
    })
  }
}
</script>
