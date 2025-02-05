<script setup lang="ts">
const props = withDefaults(defineProps<Props>(), {
  as: "section",
});

type Props = {
  as?: string;
  title?: string;
};
</script>

<template>
  <component :is="as" class="rounded-md bg-gray-800 p-4 shadow-lg shadow-black/20">
    <slot name="header">
      <h2 v-if="title">{{ title }}</h2>
    </slot>

    <slot />
  </component>
</template>
