<template>
  <div>
    <nav class="flex w-full h-16 p-3 bg-white bg-opacity-25 dark:bg-gray-800 dark:bg-opacity-50">
      <div class="flex items-center justify-start w-2/3 h-full">
        <nuxt-link to="/recipes" class="px-4 py-2 font-semibold text-white hover:text-gray-100">Recipes</nuxt-link>
        <nuxt-link to="/videogames" class="px-4 py-2 font-semibold text-white hover:text-gray-100"
          >Videogames</nuxt-link
        >
      </div>
      <div class="flex items-center justify-end w-1/3 h-full">
        <button class="px-4 py-2 mr-4 font-semibold transition-all bg-white rounded hover:bg-gray-200">
          Create Account
        </button>
        <button class="px-4 py-2 font-bold text-white transition-all bg-red-500 rounded hover:bg-red-700">Login</button>
      </div>
    </nav>

    <div class="container px-6 py-8 mx-auto">
      <main class="w-full h-screen px-10 py-16 mt-64 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <header>
          <h1 class="mb-2 text-4xl font-bold text-center dark:text-white">Marko Maric</h1>
          <h2 class="mb-8 text-2xl font-semibold text-center dark:text-white">Web Developer from Switzerland</h2>
        </header>

        <hr />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'bg-gradient-to-r from-red-700 to-yellow-500 dark:from-indigo-600 dark:to-blue-800',
    },
  },
}
</script>
