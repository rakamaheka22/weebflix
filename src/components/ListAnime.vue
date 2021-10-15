<template>
  <section class="section mt-12">
    <div v-if="search" class="mt-48 sm:mt-[400px] md:mt-4">     
      <h2 class="title-section">
        Search Result : {{ search }}
      </h2>
    </div>
    <div
      v-if="listAnime && listAnime.length > 0"
      id="search-anime"
      :class="type === 'watch-list' ? 'section-grid section-grid-3' : 'section-grid'"
    >
      <div
        v-for="item in listAnime"
        :key="item.mal_id"
        class="relative rounded-lg group"
      >
        <img
          :src="item.image_url"
          :alt="item.title"
          class="w-full h-full rounded-lg object-cover object-center"
        />
        <div class="card-overlay"></div>
        <div class="card-score">
          {{ item.score }}
        </div>
        <div class="card-bookmark" @click="bookmarkAnime(item)">
          <feather
            type="bookmark"
            stroke="#FFFFFF"
            :fill="isBookmarked(item) ? '#FFFFFF' : ''"
          ></feather>
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
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment';

export default {
  name: 'ListAnime',
  props: {
    type: {
      type: String,
      default: ''
    },
    search: {
      type: String,
      default: ''
    },
    listAnime: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  computed: {
    ...mapGetters({
      getWatchList: 'watchList/getWatchList'
    })
  },
  methods: {
    ...mapActions({
      addFirestore: 'watchList/addFirestore',
      deleteFirestore: 'watchList/deleteFirestore'
    }),
    convertDate(date) {
      return moment(date).format('DD MMMM YYYY');
    },
    async bookmarkAnime(item) {
      if (this.isBookmarked(item)) {
        const getSelectedAnime = this.getWatchList
        .filter((el) => el.mal_id === item.mal_id);

        this.deleteFirestore(getSelectedAnime[0].id);
      } else {
        const payload = {
          mal_id: item.mal_id,
          title: item.title,
          type: item.type,
          url: item.url,
          start_date: item.start_date || '',
          end_date: item.end_date || '',
          score: item.score || 0,
          rank: item.rank || '',
          episodes: item.episodes || 0,
          members: item.members,
          image_url: item.image_url
        }
        const response = await this.addFirestore(payload);

        if (response) this.$router.push('/watch-list');
      }
    },
    isBookmarked(item) {
      return this.getWatchList
        .filter((el) => el.mal_id === item.mal_id).length > 0;
    }
  }
}
</script>