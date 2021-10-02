<template>
  <footer class="w-screen bg-darkgrey mt-56 md:mt-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">

        <div class="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

          <div class="sm:col-span-12 lg:col-span-3">
            <div class="mb-4">
              <a href="/" class="block">
               <img src="/logo.png" alt="Weebflix logo" class="h-[36px] md:h-[48px]">
              </a>
            </div>
            <div class="text-xs text-white leading-relaxed">
              <p class="text-white hover:text-gray-200 hover:underline transition duration-150 ease-in-out">
                You can find various anime genres and save them to watch later.
              </p>
            </div>
          </div>

          <div class="sm:col-span-6 md:col-span-3">
            <h6 class="text-white text-sm font-medium mb-2">Sitemap</h6>
            <ul class="text-sm mt-3">
              <li class="mb-2">
                <router-link to="#" class="text-gray-400 hover:text-gray-400 transition duration-150 ease-in-out">Home</router-link>
              </li>
              <li class="mb-2">
                <router-link to="#" class="text-gray-400 hover:text-gray-400 transition duration-150 ease-in-out">Watch List</router-link>
              </li>                           
            </ul>
          </div>

          <div class="sm:col-span-6 md:col-span-3">
            <h6 class="text-white text-sm font-medium mb-2">Official Tools</h6>
            <ul class="text-sm mt-3">
              <li class="mb-2">
                <router-link to="#" class="text-gray-400 hover:text-gray-400 transition duration-150 ease-in-out">Jikan.moe</router-link>
              </li>
              <li class="mb-2">
                <router-link to="#" class="text-gray-400 hover:text-gray-400 transition duration-150 ease-in-out">Netlify</router-link>
              </li>  
              <li class="mb-2">
                <router-link to="#" class="text-gray-400 hover:text-gray-400 transition duration-150 ease-in-out">Vue</router-link>
              </li>                           
            </ul>
          </div>

          <div class="sm:col-span-6 md:col-span-3">
            <h6 class="text-white text-sm font-medium mb-2">Support</h6>
            <ul class="text-sm mt-3">
              <li class="mb-2">
                <router-link to="#" class="text-gray-400 hover:text-gray-400 transition duration-150 ease-in-out">WA : 085798291910</router-link>
              </li>
              <li class="mb-2">
                <router-link to="#" class="text-gray-400 hover:text-gray-400 transition duration-150 ease-in-out">Email : hello@weebflix.com</router-link>
              </li>
              <li class="mb-2">
                <router-link to="#" class="text-gray-400 hover:text-gray-400 transition duration-150 ease-in-out">Selangkah.org</router-link>
              </li>                          
            </ul>
          </div>        

        </div>

        <div class="md:flex md:items-center md:justify-center py-4 md:py-8 border-t border-grey">

          <div class="text-xs text-center text-white mr-4">
            Copyright <strong>Weebflix</strong> 2021. All rights reserved
          </div>

        </div>

      </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>

</style>