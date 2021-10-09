<template>
  <section class="section mt-12">
    <div v-if="topList && topList.length > 0" class="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
      <div
        v-for="item in topList"
        :key="item.mal_id"
        class="relative rounded-lg group"
      >
        <img :src="item.image_url" :alt="item.title" class="w-full h-full rounded-lg object-cover object-center">
        <div class="card-overlay"></div>
        <div class="card-score">
          {{ item.score }}
        </div>
        <div class="card-desc">
          <span class="text-xs">
            {{ convertDate(item.start_date) }}
          </span>
          <h4 class="font-medium my-2 line-clamp-2">
            {{ item.title }}
          </h4>
          <p class="text-sm mb-6">
            Eps. {{ item.episodes }} • {{ item.type }}
          </p>
          <button class="card-button">
            View Detail
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
  name: 'ListAnime',
  props: {
    tab: {
      type: String,
      default: 'airing'
    }
  },
  computed: {
    ...mapGetters({
      topList: 'topList/getTopList',
    }),
  },
  methods: {
    convertDate(date) {
      return moment(date).format('DD MMMM YYYY');
    }
  }
}
</script>