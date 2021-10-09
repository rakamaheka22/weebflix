<template>
  <section class="section mt-48 sm:mt-[400px] md:mt-4">
    <h2 class="title-section">
      Top 20 Rated Anime
    </h2>
    <nav class="w-full overflow-x-auto md:overflow-x-hidden whitespace-nowrap">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        :class="tab.actived ? 'tabs-active' : 'tabs'"
        @click="changeTab(tab)"
      >
        {{ tab.title }}
      </button>
    </nav>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TopCategories',
  data() {
    return {
      tabs: [
        {
          key: 'airing',
          title: 'Airing',
          actived: true
        },
        {
          key: 'movie',
          title: 'Movies',
          actived: false
        },
        {
          key: 'tv',
          title: 'TV Series',
          actived: false
        },
        {
          key: 'ova',
          title: 'OVA',
          actived: false
        }
      ]
    }
  },
  mounted() {
    this.fetchTopList({
      page: 1,
      type: 'airing'
    });
  },
  methods: {
    ...mapActions({
      fetchTopList: 'topList/fetchTopList'
    }),
    changeTab(tab) {
      this.tabs = this.tabs.map((tabItem) => {
        if (tabItem.key === tab.key)
          return { ...tabItem, actived: true }
        return { ...tabItem, actived: false }
      });
      this.fetchTopList({
        page: 1,
        type: tab.key
      });
    },
  }
}
</script>

<style>

</style>