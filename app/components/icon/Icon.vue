<script setup lang="ts">
import * as RemixIcons from "@remixicon/vue";
import type { IconProps } from "@/@types/icon.d.ts";

const props = withDefaults(defineProps<IconProps>(), {
  size: "md",
});

/**
 * Determine the icon component to use based on the icon prop. This transforms the icon
 * name from kebab-case to PascalCase. (e.g "ri-home-line" -> "RiHomeLine"). The "ri-"
 * prefix can be omitted from the icon prop.
 */
const iconComponent = computed(() => {
  const iconName = props.icon.startsWith("ri-") ? props.icon : `ri-${props.icon}`;

  const pascalCase = iconName
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  return RemixIcons[pascalCase as keyof typeof RemixIcons];
});

/**
 * Determine the size of the icon based on the size prop.
 */
const iconClasses = computed(
  (): Record<string, boolean> => ({
    "h-3 w-3": props.size === "xs",
    "h-4 w-4": props.size === "sm",
    "h-6 w-6": props.size === "md",
    "h-8 w-8": props.size === "lg",
    "h-10 w-10": props.size === "xl",
  }),
);
</script>

<template>
  <component :is="iconComponent" :class="iconClasses" />
</template>
