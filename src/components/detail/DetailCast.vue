<template>
  <div v-if="cast && cast.length > 0" class="w-full pl-5 md:pl-0">
    <h2 class="text-white text-lg md:text-xl font-bold mb-6 md:mb-8 relative">
      Cast
    </h2>
    <div class="cast-container">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in cast" :key="item.mal_id">
          <div class="w-full md:w-[200px] h-[200px]">
            <img
              :src="item.image_url"
              :alt="item.name"
              class="w-full h-full object-cover object-center rounded-lg"
            />
          </div>
          <div>
            <h3 class="font-bold hover:underline text-white text-sm md:text-base my-4 max-w-[200px] md:max-w-[250px] line-clamp-2">
              {{ item.name }}
            </h3>
            <span class="bg-grey py-1 px-2 text-white text-xs rounded-xl">
              {{ item.role }}
            </span>
            <p class="text-white text-xs mt-4 leading-7 tracking-wider line-clamp-4">
              {{ showSeiyuu(item) }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCast',
  props: {
    cast: {
      type: Array,
      default() {
        return []
      }
    }
  },
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
    }
  },
  methods: {
    showSeiyuu(item) {
      const seiyuu =
        item.voice_actors &&
        item.voice_actors.length > 0 &&
        item.voice_actors.map((el) => el.name) || '';
      return seiyuu.toString()
    },
  }
}
</script>

<style lang="scss" scoped>
.cast-container {
    @apply w-screen z-20 max-w-6xl mx-auto mb-10;

    .swiper-slide {
      @apply block w-[50%] md:w-[200px] mr-[16px];

      &:last-child {
        @apply mr-[24px];
      }
    }
  }
</style>
