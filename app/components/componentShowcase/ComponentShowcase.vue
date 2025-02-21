<script setup lang="ts">
import Card from "@/components/card/Card.vue";
import type { ComponentShowcaseProps, ComponentShowcaseSlots } from "@/@types/component-showcase.d";

const slots = defineSlots<ComponentShowcaseSlots>();
const props = withDefaults(defineProps<ComponentShowcaseProps>(), {
  description: undefined,
});
</script>

<template>
  <div class="flex h-[calc(100vh-2rem)] w-full flex-col gap-y-4">
    <Card :title="props.title">
      <slot name="description" :description="props.description">
        <p v-if="props.description">{{ props.description }}</p>
      </slot>
    </Card>

    <Card class="flex-1">
      <div class="flex h-full flex-col items-center justify-center gap-4">
        <slot />
      </div>
    </Card>

    <Card title="Controls"></Card>
  </div>
</template>
