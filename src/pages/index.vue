<template>
  <div>
    <div class="container px-6 py-8 mx-auto">
      <header class="mb-8 mt-36">
        <h1 class="mb-2 text-4xl font-bold text-center text-white dark:text-white">Marko Maric</h1>
        <h2 class="mb-8 text-2xl font-semibold text-center text-white dark:text-white">Web Developer from Switzerland</h2>
        <img src="https://placehold.it/300x300" alt="Marko Maric" class="mx-auto border-8 border-green-800 rounded-full" />
      </header>

      <main class="w-full px-10 py-16 mt-32 bg-white shadow-lg rounded-3xl dark:bg-gray-800">
        <section name="experience">
          <h2 class="mb-2 text-3xl font-semibold text-center dark:text-white">My Experience</h2>
          <h3 class="text-center dark:text-white">
            I have been a web developer since 4 years and have graduated with an EFZ in software development. I have started
            working on a rather small .NET application and later got into React development. Currently I am working as a Vue +
            Nuxt developer, still for <b>Hotelplan Management AG</b>. In my freetime I spend some of my time programming things
            here and there.
          </h3>

          <div class="grid grid-cols-3 grid-rows-1 gap-4 mt-6">
            <div class="w-1/3 w-full px-4 py-12 border-2 border-gray-400 rounded-lg">
              <img src="~/assets/icons/vue.svg" alt="VueJS" class="w-1/2 h-24 mx-auto mb-8" />
              <h3 class="text-xl font-semibold text-center">Vue</h3>
              <p class="text-center">2 Years of experience</p>
              <hr class="my-3" />
              <i class="text-sm text-center">Hands on developer experience with a large international e-commerce website.</i>
            </div>
            <div class="w-1/3 w-full px-4 py-12 border-2 border-gray-400 rounded-lg">
              <img src="~/assets/icons/nuxt.svg" alt="NuxtJS" class="w-1/2 h-24 mx-auto mb-8" />
              <h3 class="text-xl font-semibold text-center">Nuxt</h3>
              <p class="text-center">1 Year of experience</p>
              <hr class="my-3" />
              <i class="text-sm text-center">
                Completely setup and maintained a Nuxt application with in depth knowledge about its configuration
              </i>
            </div>
            <div class="w-1/3 w-full px-4 py-12 border-2 border-gray-400 rounded-lg">
              <img src="~/assets/icons/vscode.svg" alt="Visual Studio Code" class="w-1/2 h-24 mx-auto mb-8" />
              <h3 class="text-xl font-semibold text-center">VSCode</h3>
              <p class="text-center">5 Years of experience</p>
              <hr class="my-3" />
              <i class="text-sm text-center">
                My main editor for any kind of code. I have been using it since release and have experience with the most imporant
                development plugins and customization.
              </i>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
