<script setup lang="ts">
const props = withDefaults(defineProps<Props>(), {});

const cardClasses = computed(
  (): Record<string, boolean> => ({
    "bg-bgr text-txt px-12 py-10 rounded-xl border-[0.5px] border-brd flex flex-col gap-4": true,
  })
);

interface Props {
  title?: string;
  icon?: string;
}
</script>

<template>
  <section :class="cardClasses">
    <div v-if="title" class="flex items-center gap-2">
      <Icon v-if="icon" :icon="icon" class="text-2xl" />
      <h2 class="text-2xl font-semibold">{{ title }}</h2>
    </div>
    <slot />
  </section>
</template>
