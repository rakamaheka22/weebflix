<template>
  <nav :class="classProperty">
    <router-link class="flex items-center gap-4" to="/">
      <feather
        type="arrow-left"
        stroke="#FFFFFF"
      ></feather>
      Back
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'BackButton',
  props: {
    classProperty: {
      type: String,
      default: 'absolute text-white font-bold z-20 m-5'
    }
  }
}
</script>
