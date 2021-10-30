<template>
  <div
    v-if="getErrorMessage"
    class="bg-red-100 border-l-4 border-red-500 text-red-500 p-4 text-xs"
    role="alert"
  >
    <p class="font-bold">Error</p>
    <p>{{ getErrorMessage }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ErrorMessage',
  computed: {
    ...mapGetters([
      'getErrorMessage'
    ])
  }
}
</script>
