<script setup lang="ts">
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Icon from "@/components/icon/Icon.vue";
</script>

<template>
  <ComponentShowcase title="Icon" description="Icons are used to represent actions and objects in the application.">
    <section class="flex items-center gap-x-4">
      <Icon icon="firefox-browser-line" size="xl" />
      <Icon icon="firefox-browser-line" size="lg" />
      <Icon icon="firefox-browser-line" size="md" />
      <Icon icon="firefox-browser-line" size="sm" />
      <Icon icon="firefox-browser-line" size="xs" />
    </section>
  </ComponentShowcase>
</template>
