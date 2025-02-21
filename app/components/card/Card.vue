<script setup lang="ts">
import type { CardProps, CardSlots } from "@/@types/card.d.ts";

const slots = defineSlots<CardSlots>();
withDefaults(defineProps<CardProps>(), {
  as: "section",
});
</script>

<template>
  <component :is="as" class="rounded-md bg-gray-800 p-4 shadow-lg shadow-black/20">
    <slot name="header" :title="title">
      <h2 v-if="title">{{ title }}</h2>
    </slot>

    <slot />
  </component>
</template>
