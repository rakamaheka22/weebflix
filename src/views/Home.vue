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

import Header from '../components/Header.vue';
import Hero from '../components/Hero.vue';
import TopCategories from '../components/TopCategories.vue';
import ListAnime from '../components/ListAnime.vue';
import Footer from '../components/Footer.vue';

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
  mounted() {
    this.fetchFirestore();
  },
  methods: {
    ...mapActions({
      fetchFirestore: 'watchList/fetchFirestore'
    })
  }
}
</script>
