<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import type { TextProps, TextEmits, TextSlots } from "@/@types/text.d.ts";

const emit = defineEmits<TextEmits>();
const slots = defineSlots<TextSlots>();
const props = withDefaults(defineProps<TextProps>(), {
  type: "text",
  variant: "default",
  disabled: false,
  readOnly: false,
  startIcon: undefined,
  endIcon: undefined,
});

/**
 * Generate a unique ID for this text input instance.
 */
const inputKey = ref(`menu-${Math.random().toString(36).substring(2, 11)}`);

/**
 * The classes which are applied to the wrapper element.
 */
const wrapperClasses = computed(
  (): Record<string, boolean> => ({
    "relative flex flex-row items-center w-full rounded-md border py-1.5": true,

    "px-3": !props.startIcon,

    // Variants
    "border-gray-400 bg-transparent": props.variant === "default",
    "border-suc": props.variant === "success",
    "border-dng": props.variant === "danger",
    "border-war": props.variant === "warning",
    "border-inf": props.variant === "info",

    // Disabled
    "cursor-not-allowed opacity-disabled": props.disabled,

    // Focus
    "focus-within:outline-2 focus-within:outline-acc focus-within:outline-offset-2": true,
  }),
);

/**
 * The classes which are applied to the input element.
 */
const inputClasses = computed(
  (): Record<string, boolean> => ({
    "flex-1 placeholder:text-gray-600 focus:outline-none": true,

    // Disabled
    "cursor-not-allowed": props.disabled,
  }),
);

/**
 * The classes which are applied to the label element.
 */
const labelClasses = computed(
  (): Record<string, boolean> => ({
    "absolute -top-3 left-3 inline-block rounded-xs bg-gray-800 px-1 h-fit text-sm select-none": true,

    // Variants
    "text-gray-400": props.variant === "default",
    "text-suc": props.variant === "success",
    "text-dng": props.variant === "danger",
    "text-war": props.variant === "warning",
    "text-inf": props.variant === "info",

    // Disabled
    "italic cursor-not-allowed": props.disabled,
  }),
);

/**
 * The classes which are applied to the start and end icons.
 */
const iconClasses = computed(
  (): Record<string, boolean> => ({
    "mx-1": true,

    "text-gray-400": props.variant === "default",
    "text-suc": props.variant === "success",
    "text-dng": props.variant === "danger",
    "text-war": props.variant === "warning",
    "text-inf": props.variant === "info",
  }),
);
</script>

<template>
  <div :class="wrapperClasses">
    <label :for="inputKey" :class="labelClasses">{{ label }}</label>

    <slot name="start" :icon="startIcon">
      <Icon v-if="startIcon" :icon="startIcon" size="sm" :class="iconClasses" />
    </slot>
    <input
      v-bind="$attrs"
      :value="modelValue"
      :id="inputKey"
      :class="inputClasses"
      :type="type"
      :disabled="disabled"
      :readonly="readOnly"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <slot name="end" :icon="endIcon">
      <Icon v-if="endIcon" :icon="endIcon" size="sm" :class="iconClasses" />
    </slot>
  </div>
</template>
