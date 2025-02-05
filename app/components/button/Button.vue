<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import type { ButtonProps } from "@/@types/button.d.ts";

const props = withDefaults(defineProps<ButtonProps>(), {
  label: undefined,
  icon: undefined,
  variant: "primary",
  type: "button",
  size: "md",
  prefixIcon: undefined,
  suffixIcon: undefined,
  disabled: false,
  fullWidth: false,
});

const slots = defineSlots<ButtonSlots>();

/**
 * The classes which are applied to the button element.
 */
const buttonClasses = computed(() => ({
  "flex gap-x-2 items-center justify-center rounded-lg transition-colors": true,
  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950": true,

  // Sizes
  "h-8 px-2": props.size === "sm",
  "h-12 px-4": props.size === "md",
  "h-16 px-6": props.size === "lg",

  // Full width
  "w-full": props.fullWidth,

  // Disabled
  "cursor-not-allowed opacity-50": props.disabled,

  // Variants
  "bg-pri text-pri-contast": props.variant === "primary",
  "hover:bg-pri-hover active:bg-pri-active focus:ring-pri": props.variant === "primary" && !props.disabled,

  "bg-sec text-sec-contrast": props.variant === "secondary",
  "hover:bg-sec-hover active:bg-sec-active focus:ring-sec": props.variant === "secondary" && !props.disabled,

  "bg-emerald-500 text-white": props.variant === "success",
  "hover:bg-emerald-600 active:bg-emerald-700 focus:ring-emerald-500": props.variant === "success" && !props.disabled,

  "bg-red-500 text-white": props.variant === "danger",
  "hover:bg-red-600 active:bg-red-700 focus:ring-red-500": props.variant === "danger" && !props.disabled,

  // Click effect
  "active:scale-[98%]": true,
}));

interface ButtonSlots {
  prefix?: { icon?: string };
  suffix?: { icon?: string };
  default?: { label?: string | number; icon?: string };
}
</script>

<template>
  <button :type="type" :class="buttonClasses" :disabled="disabled">
    <slot name="prefix" :icon="prefixIcon">
      <Icon v-if="prefixIcon" :icon="prefixIcon" />
    </slot>

    <slot name="default" :label="label" :icon="icon">
      <span v-if="label">{{ label }}</span>
      <Icon v-if="icon" :icon="icon" />
    </slot>

    <slot name="suffix" :icon="suffixIcon">
      <Icon v-if="suffixIcon" :icon="suffixIcon" />
    </slot>
  </button>
</template>
