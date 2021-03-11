<template>
  <div>
    <navigation />

    <Nuxt />

    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'bg-green-700 dark:bg-blue-400 debug-screens',
    },
  },
}
</script>

<style></style>
