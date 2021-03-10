<template>
  <div>
    <div class="container px-6 py-8 mx-auto">
      <main class="w-full px-10 py-16 mt-64 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <header class="mb-8">
          <h1 class="mb-2 text-4xl font-bold text-center dark:text-white">Marko Maric</h1>
          <h2 class="text-2xl font-semibold text-center dark:text-white">Web Developer from Switzerland</h2>
        </header>

        <section class="mb-8">
          <img src="https://placehold.it/300x300" alt="Marko Maric" class="mx-auto border-2 border-gray-400 rounded-full" />
        </section>

        <hr />

        <section class="grid grid-cols-3 grid-rows-1 gap-4 mt-8">
          <div class="w-1/3 w-full p-4 border-2 border-gray-400 rounded-lg">
            <img src="~/assets/icons/vue.svg" alt="VueJS" class="w-1/2 h-24 mx-auto mb-4" />
            <h3 class="text-xl font-semibold text-center">Vue</h3>
            <p class="text-center">2 Years of experience</p>
          </div>
          <div class="w-1/3 w-full p-4 border-2 border-gray-400 rounded-lg">
            <img src="~/assets/icons/nuxt.svg" alt="NuxtJS" class="w-1/2 h-24 mx-auto mb-4" />
            <h3 class="text-xl font-semibold text-center">Nuxt</h3>
            <p class="text-center">1 Year of experience</p>
          </div>
          <div class="w-1/3 w-full p-4 border-2 border-gray-400 rounded-lg">
            <img src="~/assets/icons/vscode.svg" alt="Visual Studio Code" class="w-1/2 h-24 mx-auto mb-4" />
            <h3 class="text-xl font-semibold text-center">VSCode</h3>
            <p class="text-center">5 Years of experience</p>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
