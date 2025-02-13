<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import type { TextProps, TextEmits } from "@/@types/text.d.ts";

const props = withDefaults(defineProps<TextProps>(), {
  label: undefined,
  placeholder: "Placeholder",
  type: "text",
  variant: "default",
  disabled: false,
  prefixIcon: undefined,
  suffixIcon: undefined,
});

const emit = defineEmits<TextEmits>();

/**
 * The classes which are applied to the wrapper element.
 */
const wrapperClasses = computed(() => ({
  "flex items-center h-10 border rounded-md ": true,

  // Variants
  "border-gray-600 bg-transparent": props.variant === "default",
  "border-suc bg-suc-light": props.variant === "success",
  "border-dng bg-dng-light": props.variant === "danger",
  "border-war bg-war-light": props.variant === "warning",
  "border-inf bg-inf-light": props.variant === "info",

  // Disabled
  "cursor-not-allowed opacity-50": props.disabled,

  "focus-within:ring-2 focus-within:ring-acc focus-within:ring-offset-2 focus-within:ring-offset-gray-900": true,
}));

/**
 * The classes which are applied to the input element.
 */
const inputClasses = computed(() => ({
  "peer w-full h-full flex-1": true,

  // Spacing
  "px-2": !props.prefixIcon,

  // Prevent focus styles
  "focus:ring-0 focus-visible:outline-none": true,

  // Disabled
  "cursor-not-allowed": props.disabled,
}));

/**
 * The classes which are applied to the label element.
 */
const labelClasses = computed(() => ({
  "w-fit select-none": true,

  // Variants
  "text-txt": props.variant === "default",
  "text-suc": props.variant === "success",
  "text-dng": props.variant === "danger",
  "text-war": props.variant === "warning",
  "text-inf": props.variant === "info",
}));

/**
 * The classes which are applied to the icon elements.
 */
const iconClasses = computed(() => ({
  "text-txt": props.variant === "default",
  "text-suc": props.variant === "success",
  "text-dng": props.variant === "danger",
  "text-war": props.variant === "warning",
  "text-inf": props.variant === "info",
}));
</script>

<template>
  <label class="flex flex-col gap-x-1">
    <span v-if="label" :class="labelClasses">{{ label }}</span>

    <!-- The custom input element -->
    <div :class="wrapperClasses">
      <!-- Prefix Icon -->
      <div v-if="prefixIcon" class="flex aspect-square h-full items-center justify-center">
        <Icon :icon="prefixIcon" :class="iconClasses" />
      </div>

      <input :type="type" :placeholder="placeholder" :value="modelValue" :disabled="disabled" :class="inputClasses" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" />

      <!-- Suffix Icon -->
      <div v-if="suffixIcon" class="flex aspect-square h-full items-center justify-center">
        <Icon :icon="prefixIcon" :class="iconClasses" />
      </div>
    </div>
  </label>
</template>
