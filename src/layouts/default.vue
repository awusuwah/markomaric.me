<template>
  <div>
    <navigation />

    <Nuxt />
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'bg-gradient-to-r from-red-700 to-yellow-500 dark:from-indigo-600 dark:to-blue-800 debug-screens',
    },
  },
}
</script>

<style></style>
