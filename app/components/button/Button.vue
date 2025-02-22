<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import type { ButtonProps, ButtonSlots } from "@/@types/button.d.ts";

const slots = defineSlots<ButtonSlots>();
const props = withDefaults(defineProps<ButtonProps>(), {
  label: undefined,
  icon: undefined,
  variant: "neutral",
  type: "button",
  size: "md",
  startIcon: undefined,
  endIcon: undefined,
  disabled: false,
  fullWidth: false,
});

/**
 * The classes which are applied to the button element.
 */
const buttonClasses = computed(
  (): Record<string, boolean> => ({
    "flex items-center justify-center gap-x-2 rounded-lg transition-colors": true,
    "focus:outline-none focus:ring-2 focus:ring-acc focus:ring-offset-2 focus:ring-offset-gray-950": true,

    // Variants
    "bg-gray-700 text-white not-disabled:hover:bg-gray-600 not-disabled:active:bg-gray-500": props.variant === "neutral",
    "bg-pri text-pri-contrast not-disabled:hover:bg-pri-hover not-disabled:active:bg-pri-active": props.variant === "primary",
    "bg-sec text-sec-contrast not-disabled:hover:bg-sec-hover not-disabled:active:bg-sec-active": props.variant === "secondary",
    "bg-suc text-suc-contrast not-disabled:hover:bg-suc-hover not-disabled:active:bg-suc-active": props.variant === "success",
    "bg-dng text-dng-contrast not-disabled:hover:bg-dng-hover not-disabled:active:bg-dng-active": props.variant === "danger",
    "bg-war text-war-contrast not-disabled:hover:bg-war-hover not-disabled:active:bg-war-active": props.variant === "warning",
    "bg-inf text-inf-contrast not-disabled:hover:bg-inf-hover not-disabled:active:bg-inf-active": props.variant === "info",

    // Disabled
    "cursor-pointer active:scale-[98%]": !props.disabled,
    "cursor-not-allowed opacity-50": props.disabled,

    // Sizes
    "h-8 px-2": props.size === "sm",
    "h-12 px-4": props.size === "md",
    "h-16 px-6": props.size === "lg",

    // Full width
    "w-full": props.fullWidth,
  }),
);
</script>

<template>
  <button :type="type" :class="buttonClasses" :disabled="disabled">
    <slot name="start" :icon="startIcon">
      <Icon v-if="startIcon" :icon="startIcon" />
    </slot>

    <slot name="default" :label="label" :icon="icon">
      <span v-if="label">{{ label }}</span>
      <Icon v-if="icon" :icon="icon" />
    </slot>

    <slot name="end" :icon="endIcon">
      <Icon v-if="endIcon" :icon="endIcon" />
    </slot>
  </button>
</template>
