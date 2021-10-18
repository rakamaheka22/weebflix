<template>
  <header class="absolute w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out">
      <div class="max-w-6xl mx-auto px-5 sm:px-6">
        <div class="flex items-center justify-between h-20 md:h-28">

          <div class="flex-shrink-0 mr-4">
            <a href="/" class="block">
               <img src="/logo.png" alt="Weebflix logo" class="h-[36px] md:h-[48px]">
            </a>
          </div>

          <nav class="flex flex-grow">
            <ul class="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <router-link
                  to="/watch-list"
                  class="font-medium text-white hover:text-gray-100 px-2 py-3 flex items-center transition duration-150 ease-in-out gap-2"
                >
                  <feather type="eye" stroke="white"></feather>
                  <div class="hidden md:block">Watch List</div>
                </router-link>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  }
}
</script>
