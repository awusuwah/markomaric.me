<script setup lang="ts">
const props = withDefaults(defineProps<Props>(), {
  size: "md",
});

const actualIcon = computed((): string => {
  if (props.icon?.includes(":")) return props.icon;
  return `mingcute:${props.icon}`;
});

const iconClasses = computed(() => [
  {
    "h-4 w-4": props.size === "sm",
    "h-6 w-6": props.size === "md",
    "h-8 w-8": props.size === "lg",
  },
  props.class,
]);

interface Props {
  icon?: string;
  size?: "sm" | "md" | "lg";
  class?: string | Record<string, boolean> | Record<string, string>;
}
</script>

<template>
  <NuxtIcon v-if="actualIcon" :name="actualIcon" :class="iconClasses" />
</template>
