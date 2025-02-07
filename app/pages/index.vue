<script setup lang="ts">
const components = [
  { name: "Buttons", path: "/components/buttons" },
  { name: "Checkboxes", path: "/components/checkboxes" },
  { name: "Radiobuttons", path: "/components/radiobuttons" },
];
</script>

<template>
  <div>
    <h1>Home</h1>

    <section class="flex flex-col gap-y-1">
      <NuxtLink v-for="component in components" :to="component.path" class="text-sm text-blue-500 hover:text-blue-600 hover:underline">{{ component.name }}</NuxtLink>
    </section>
  </div>
</template>
