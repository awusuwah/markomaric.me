<script setup lang="ts">
const components = [
  { name: "Button", path: "/components/button" },
  { name: "Checkbox", path: "/components/checkbox" },
  { name: "Toggle", path: "/components/toggle" },
  { name: "Radiobutton", path: "/components/radiobutton" },
  { name: "Icon", path: "/components/icon" },
  { name: "Text", path: "/components/text" },
  { name: "Datepicker", path: "/components/datepicker" },
  { name: "Spinner", path: "/components/spinner" },
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
