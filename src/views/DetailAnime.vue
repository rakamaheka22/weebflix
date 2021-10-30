<template>
  <div>
    <DetailHeader :anime="anime" />
    <section class="max-w-full md:max-w-6xl mx-auto mt-0 md:mt-10">
      <DetailInformation :anime="anime" />
      <DetailCast :cast="cast" />
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import DetailHeader from '../components/detail/DetailHeader.vue';
import DetailInformation from '../components/detail/DetailInformation.vue';
import DetailCast from '../components/detail/DetailCast.vue';

export default {
  name: 'DetailAnime',
  components: {
    DetailHeader,
    DetailInformation,
    DetailCast
  },
  computed: {
    ...mapGetters({
      anime: 'anime/getAnimeInfo',
      cast: 'anime/getCastInfo'
    })
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.findAnimeById(vm.$route.params.id);
      vm.fetchFirestore();
    })
  },reRouteLeave(to, from, next) {
    next(vm => vm.findAnimeById(''))
  },
  methods: {
    ...mapActions({
      findAnimeById: 'anime/findAnimeById',
      findCharaAnimeById: 'anime/findCharaAnimeById',
      fetchFirestore: 'watchList/fetchFirestore'
    })
  }
}
</script>
