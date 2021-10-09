<template>
  <div>
    <Header />
    <Hero />
    <TopCategories />
    <ListAnime />
    <Footer />
  </div>
</template>

<script>
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
  }
}
</script>
