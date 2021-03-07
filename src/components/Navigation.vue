<template>
  <nav class="flex w-full h-16 p-3 bg-white bg-opacity-25 dark:bg-gray-800 dark:bg-opacity-50">
    <div class="flex items-center justify-start w-2/3 h-full">
      <nuxt-link to="/" class="px-4 py-2 font-semibold text-white hover:text-gray-100">Home</nuxt-link>
      <nuxt-link to="/recipes" class="px-4 py-2 font-semibold text-white hover:text-gray-100">Recipes</nuxt-link>
      <nuxt-link to="/videogames" class="px-4 py-2 font-semibold text-white hover:text-gray-100">Videogames</nuxt-link>
    </div>
    <div class="flex items-center justify-end w-1/3 h-full">
      <nuxt-link
        to="/create-account"
        class="px-4 py-2 mr-4 font-semibold transition-all bg-white rounded hover:bg-gray-200 dark:bg-white dark:hover:bg-gray-300"
      >
        Create Account
      </nuxt-link>
      <nuxt-link to="/login" class="px-4 py-2 font-bold text-white transition-all bg-red-500 rounded hover:bg-red-700">
        Login
      </nuxt-link>
    </div>
  </nav>
</template>
