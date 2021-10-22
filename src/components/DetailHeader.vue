<template>
  <header v-if="anime" class="max-w-full md:max-w-6xl mx-auto">
    <div class="absolute top-0 left-0 right-0 w-full bg-gradient-to-t from-primary to-secondary h-72"></div>
    <nav class="absolute top-10 z-20 text-white font-bold left-5 md:left-auto">
      <router-link class="flex items-center gap-4" to="/">
        <feather
          type="arrow-left"
          stroke="#FFFFFF"
        ></feather>
        Back
      </router-link>
    </nav>
    <div class="relative w-full flex flex-col md:flex-row gap-[48px] px-5 md:px-0 mt-28 md:mt-32">
      <div class="h-[400px] w-full md:h-[360px] md:w-[300px]">
        <img :src="anime.image_url" :alt="anime.title" class="w-full h-full object-cover object-center" />
      </div>
      <div class="relative w-full">
        <h1 class="text-3xl text-white font-bold line-clamp-4 md:line-clamp-1">
          {{ anime.title }}
        </h1>
        <p class="text-white italic mt-4">
          {{ anime.title_english || '-' }}
        </p>
        <p class="text-white mt-4 font-bold">
          {{ anime.title_japanese || '-' }}
        </p>
        <div class="mt-[50px] sm:mt-[90px] flex flex-col md:flex-row flex-wrap justify-between gap-2 md:gap-4">
          <div class="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-3 border-b md:border-b-0 border-grey pb-5 md:pb-0">
            <span class="text-white font-bold">Score</span>
            <div class="flex items-center">
              <div class="flex md:hidden"><feather type="star" stroke="white" size="20px"></feather></div>
              <div class="hidden md:flex"><feather type="star" stroke="white" size="28px"></feather></div>
              <span class="text-white font-bold text-base md:text-2xl ml-2">{{ anime.score || '-' }}</span>
            </div>
          </div>
          <div class="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-3 border-b md:border-b-0 border-grey pb-5 md:pb-0">
            <span class="text-white font-bold">Rank</span>
            <div class="flex items-center">
              <div class="flex md:hidden"><feather type="award" stroke="white" size="20px"></feather></div>
              <div class="hidden md:flex"><feather type="award" stroke="white" size="28px"></feather></div>
              <span class="text-white font-bold text-base md:text-2xl ml-2">{{ anime.rank || '-' }}</span>
            </div>
          </div>
          <div class="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-3 border-b md:border-b-0 border-grey pb-5 md:pb-0">
            <span class="text-white font-bold">Popularity</span>
            <div class="flex items-center">
              <div class="flex md:hidden"><feather type="arrow-up-right" stroke="white" size="20px"></feather></div>
              <div class="hidden md:flex"><feather type="arrow-up-right" stroke="white" size="28px"></feather></div>
              <span class="text-white font-bold text-base md:text-2xl ml-2">{{ anime.popularity }}</span>
            </div>
          </div>
          <div class="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-3 border-b md:border-b-0 border-grey pb-5 md:pb-0">
            <span class="text-white font-bold">Members</span>
            <div class="flex items-center">
              <div class="inline-flex md:hidden"><feather type="users" stroke="white" size="20px"></feather></div>
              <div class="hidden md:inline-flex"><feather type="users" stroke="white" size="28px"></feather></div>
              <span class="text-white font-bold text-base md:text-2xl ml-2">{{ anime.members }}</span>
            </div>
          </div>
          <div class="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-3 border-b md:border-b-0 border-grey pb-5 md:pb-0">
            <span class="text-white font-bold">Favorites</span>
            <div class="flex items-center">
              <div class="inline-flex md:hidden"><feather type="heart" stroke="white" size="20px"></feather></div>
              <div class="hidden md:inline-flex"><feather type="heart" stroke="white" size="28px"></feather></div>
              <span class="text-white font-bold text-base md:text-2xl ml-2">{{ anime.favorites }}</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-start md:items-center gap-7 md:gap-3 my-10">
          <div class="w-full md:w-auto mb-4 md:mb-0">
            <button
              class="flex items-center justify-center gap-2 w-full md:w-auto rounded-full bg-primary hover:bg-darkprimary text-white font-bold py-2 px-8 mr-0 md:mr-8"
              @click="bookmarkAnime(anime)"
            >
              <feather
                type="bookmark"
                stroke="#FFFFFF"
                :fill="isBookmarked(anime) ? '#FFFFFF' : '#DB202C'"
              ></feather>
              <span>
                {{ isBookmarked(anime) ? 'Delete from' : 'Add to' }} Watch List
              </span>
            </button>
          </div>
          <span class="text-white font-bold">Genres</span>
          <div class="flex flex-wrap gap-4">
            <span
              v-for="(item, i) in anime.genres"
              :key="i"
              class="px-3 py-1 text-sm rounded-full text-white border border-white opacity-60 hover:opacity-100 font-bold"
            >
              {{ item.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import {
  NO_CONNECTION
} from '../constant';

export default {
  name: 'DetailHeader',
  props: {
    anime: {
      type: Object,
      default() {
        return {
          mal_id: 0,
          image_url: '',
          title: '',
          title_english: '',
          title_japanese: '',
          score: 0,
          rank: 0,
          popularity: 0,
          members: 0,
          favorites: 0,
          genres: []
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      getWatchList: 'watchList/getWatchList'
    })
  },
  methods: {
    ...mapActions({
      isUserLoggon: 'user/isUserLoggon',
      addFirestore: 'watchList/addFirestore',
      deleteFirestore: 'watchList/deleteFirestore'
    }),
    async bookmarkAnime(item) {
      try {
        if (!navigator.onLine) throw new Error(NO_CONNECTION);

        const isLogggedIn = await this.isUserLoggon();
        if (!isLogggedIn) this.$router.push('/login');

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
      } catch (error) {
        console.error(error);
      }
    },
    isBookmarked(item) {
      return this.getWatchList
        .filter((el) => el.mal_id === item.mal_id).length > 0;
    }
  }
}
</script>

<style>

</style>