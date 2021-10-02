<template>
  <div>
    <Header />
    <Hero />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Hero from '../components/Hero.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Footer
  },
  methods: {
    fetchData() {
      this.axios.get('https://ghibliapi.herokuapp.com/films').then((response) => {
        console.log(response.data); // JSON
      });
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>
