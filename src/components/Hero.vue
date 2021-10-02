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
    <div class="upcoming-container">
      <h2 class="title-section">
        Upcoming
      </h2>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="upcoming in listUpcoming" :key="upcoming.id">
          <div class="w-full md:w-[320px] h-48">
            <img :src="upcoming.img" :alt="upcoming.title" class="w-full h-full object-cover object-center rounded-lg" />
          </div>
          <div class="flex">
            <div class="flex-auto">
              <h3 class="font-bold text-white text-sm md:text-base my-4 max-w-[200px] md:max-w-[250px]">
                {{ upcoming.title }}
              </h3>
              <ul class="flex gap-2 mb-4">
                <li
                  v-for="(genre, index) in upcoming.genre" :key="index"
                  class="bg-grey py-1 px-2 text-white text-xs rounded-xl"
                >
                  {{ genre }}
                </li>
              </ul>
              <p class="text-white text-xs">
                Start Date : {{ upcoming.date }}
              </p>
            </div>
            <div class="flex-none flex flex-col items-end">
              <div class="font-bold text-white bg-red-400 py-1 px-2 rounded-lg text-sm my-4">
                {{ upcoming.type }}
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
      listUpcoming: [
        {
          id: 1,
          title: 'Tate no Yuusha no Nariagari Season 2',
          genre: ['Adventure', 'Action', 'Fantasy'],
          type: 'TV',
          date: 'April 2022',
          img: '/images/1.jpg'
        },
        {
          id: 2,
          title: 'Shingeki no Kyojin: The Final Season Part 2',
          genre: ['Mystery', 'Action', 'Fantasy'],
          type: 'TV',
          date: 'April 2022',
          img: '/images/2.jpg'
        },
        {
          id: 3,
          title: 'Jujutsu Kaisen 0 Movie',
          genre: ['Supernatural', 'Action', 'Fantasy'],
          type: 'TV',
          date: 'April 2022',
          img: '/images/3.jpg'
        },
        {
          id: 4,
          title: 'Kimetsu no Yaiba: Yuukaku-hen',
          genre: ['Slice of Life', 'Action', 'Fantasy'],
          type: 'TV',
          date: 'April 2022',
          img: '/images/4.jpg'
        }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  @apply relative w-screen h-screen;

  .bg-overlay {
    @apply bg-hero object-cover object-center bg-center z-0;
    @apply relative w-full flex flex-col h-[90vh] md:h-[75vh];

    .overlay {
      @apply w-full h-full bg-black opacity-80 absolute;
    }

    .hero-title {
      @apply relative z-10 text-center text-white text-2xl md:text-5xl md:max-w-3xl md:leading-tight font-bold;
    }

    .hero-subtitle {
      @apply text-center text-white text-xs md:text-base mt-5 mb-7 md:mb-10 tracking-wide leading-relaxed w-60 md:w-full mx-auto;
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
