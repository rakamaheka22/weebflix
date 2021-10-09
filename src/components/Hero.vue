<template>
  <section class="hero">
    <div class="bg-overlay">
      <div class="overlay"></div>
      <div class="relative mx-auto px-5 mt-32 mb-16 lg:mt-48 lg:mb-24">
        <h1 class="hero-title">
          Find Your Favorite Anime, Movies or TV Series Here.
        </h1>
        <p class="hero-subtitle">
          You can find various anime genres and save them to watch later.
        </p>
        <div class="hero-search"></div>
      </div>
    </div>
    <div v-if="upcomingList && upcomingList.length > 0" class="upcoming-container">
      <h2 class="title-section">
        Upcoming
      </h2>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="upcoming in upcomingList" :key="upcoming.mal_id">
          <div class="w-full md:w-[320px] h-48">
            <img
              :src="upcoming.image_url"
              :alt="upcoming.title"
              class="w-full h-full object-cover object-center rounded-lg"
            />
          </div>
          <div class="flex">
            <div class="flex-auto">
              <h3 class="font-bold text-white text-sm md:text-base my-4 max-w-[200px] md:max-w-[250px] line-clamp-2">
                {{ upcoming.title }}
              </h3>
              <span class="bg-grey py-1 px-2 text-white text-xs rounded-xl">
                {{ upcoming.type }}
              </span>
              <p class="text-white text-xs mt-4">
                Start Date : {{ upcoming.start_date || '-' }}
              </p>
            </div>
            <div class="flex-none flex flex-col items-end">
              <div class="font-bold text-white bg-red-400 py-1 px-3 rounded-lg text-sm my-4">
                {{ upcoming.rank }}
              </div>
              <div>
                <feather type="bookmark" stroke="#38485C"></feather>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HeroComponent',
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      upcomingList: 'topList/getUpcomingList',
    }),
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.fetchTopList({
      page: 1,
      type: 'upcoming'
    });
  },
  methods: {
    ...mapActions({
      fetchTopList: 'topList/fetchTopList'
    })
  }
}
</script>

<style lang="scss" scoped>
.hero {
  @apply relative w-screen h-screen;

  .bg-overlay {
    @apply bg-hero object-cover object-center bg-center z-0;
    @apply relative w-full flex flex-col h-[90vh] sm:h-[500px] md:h-[75vh];

    .overlay {
      @apply w-full h-full bg-black opacity-80 absolute;
    }

    .hero-title {
      @apply relative z-10 text-center text-white text-2xl md:text-5xl md:max-w-3xl md:leading-tight font-bold;
    }

    .hero-subtitle {
      @apply text-center text-white text-xs md:text-base mt-5 mb-7 md:mb-10 tracking-wide leading-relaxed w-60 sm:w-full mx-auto;
    }

    .hero-search {
      @apply w-full rounded-lg md:rounded-2xl bg-white px-4 py-4 md:px-6 md:py-6 md:max-w-2xl mx-auto;
    }
  }

  .upcoming-container {
    @apply w-screen pl-5 z-20 max-w-6xl mx-auto -mt-48 md:-mt-56;

    .swiper-slide {
      @apply block w-[80%] md:w-[320px] mr-[16px];

      &:last-child {
        @apply mr-[24px];
      }
    }
  }
}
</style>
