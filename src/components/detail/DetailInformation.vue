<template>
  <div v-if="anime" class="flex flex-col-reverse md:flex-row gap-10 px-5 md:px-0">
    <div class="flex-1">
      <h2 class="text-white text-lg md:text-xl font-bold mb-6 md:mb-8 relative">
        Synopsis
      </h2>
      <p class="text-white text-sm leading-8 tracking-wider mb-5 md:mb-10">
        {{ anime.synopsis || '-' }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 mb-10">
        <div class="border-b border-grey py-5">
          <span class="text-white text-xs">
            Type
          </span>
          <p class="text-white text-sm font-bold mt-2">
            {{ anime.type || '-' }}
          </p>
        </div>
        <div class="border-b border-grey py-5">
          <span class="text-white text-xs">
            Episodes
          </span>
          <p class="text-white text-sm font-bold mt-2">
            {{ anime.episodes || '-' }}
          </p>
        </div>
        <div class="border-b border-grey py-5">
          <span class="text-white text-xs">
            Status
          </span>
          <p class="text-white text-sm font-bold mt-2">
            {{ anime.status || '-' }}
          </p>
        </div>
        <div class="border-b border-grey py-5">
          <span class="text-white text-xs">
            Aired
          </span>
          <p class="text-white text-sm font-bold mt-2">
            {{ anime.aired.string || '-' }}
          </p>
        </div>
        <div class="border-b border-grey py-5">
          <span class="text-white text-xs">
            Premiered
          </span>
          <p class="text-white text-sm font-bold mt-2">
            {{ anime.premiered || '-' }}
          </p>
        </div>
        <div class="border-b border-grey py-5">
          <span class="text-white text-xs">
            Broadcast
          </span>
          <p class="text-white text-sm font-bold mt-2">
            {{ anime.broadcast || '-' }}
          </p>
        </div>
        <div class="border-b border-grey py-5">
          <span class="text-white text-xs">
            Duration
          </span>
          <p class="text-white text-sm font-bold mt-2">
            {{ anime.duration || '-' }}
          </p>
        </div>
      </div>
      <h2 class="text-white text-lg md:text-xl font-bold mb-6 md:mb-8 relative">
        Production
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 mb-10">
        <div class="border-b border-grey py-5">
          <span class="text-white text-xs">
            Producers
          </span>
          <p class="text-white text-sm font-bold mt-2 pr-3">
            <span v-for="(item, i) in anime.producers" :key="i">
              {{ item.name }}
            </span>
          </p>
        </div>
        <div class="border-b border-grey py-5">
          <span class="text-white text-xs">
            Licensors
          </span>
          <p class="text-white text-sm font-bold mt-2 pr-3">
            <span v-for="(item, i) in anime.licensors" :key="i">
              {{ item.name }}
            </span>
          </p>
        </div>
        <div class="border-b border-grey py-5">
          <span class="text-white text-xs">
            Studios
          </span>
          <p class="text-white text-sm font-bold mt-2">
            <span v-for="(item, i) in anime.studios" :key="i">
              {{ item.name }}
            </span>
          </p>
        </div>
        <div class="border-b border-grey py-5">
          <span class="text-white text-xs">
            Rating
          </span>
          <p class="text-white text-sm font-bold mt-2">
            {{ anime.rating || '-' }}
          </p>
        </div>
        <div class="border-b border-grey py-5">
          <span class="text-white text-xs">
            Source
          </span>
          <p class="text-white text-sm font-bold mt-2">
            {{ anime.source || '-' }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="anime.trailer_url" class="flex-aUto">
      <iframe
        class="w-full md:w-[400px] h-[300px]"
        :src="anime.trailer_url"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInformation',
  props: {
    anime: {
      type: Object,
      default() {
        return {
          synopsis: '',
          type: '',
          episodes: 0,
          status: '',
          aired: {
            string: ''
          },
          premiered: '',
          broadcast: '',
          duration: '',
          producers: [],
          licensors: [],
          studios: [],
          rating: '',
          source: '',
          trailer_url: ''
        }
      }
    }
  }
}
</script>

<style>

</style>