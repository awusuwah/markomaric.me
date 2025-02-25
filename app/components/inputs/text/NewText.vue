<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import type { NewTextProps, NewTextEmits, NewTextSlots } from "@/@types/new-text.d.ts";

const emit = defineEmits<NewTextEmits>();
const slots = defineSlots<NewTextSlots>();
const props = withDefaults(defineProps<NewTextProps>(), {
  type: "text",
  variant: "default",
  disabled: false,
  readOnly: false,
  startIcon: undefined,
  endIcon: undefined,
});

/**
 * Tracks whether the input is focused.
 */
const isFocused = ref(false);

/**
 * The classes which are applied to the wrapper element.
 */
const wrapperClasses = computed(
  (): Record<string, boolean> => ({
    "relative flex items-center h-14 w-full border rounded-md": true,

    // Variants
    "border-gray-600 bg-transparent": props.variant === "default",
    "border-suc bg-suc-light": props.variant === "success",
    "border-dng bg-dng-light": props.variant === "danger",
    "border-war bg-war-light": props.variant === "warning",
    "border-inf bg-inf-light": props.variant === "info",

    // Disabled
    "italic cursor-not-allowed opacity-50": props.disabled,

    // Focus
    "[&:has(input:focus)]:outline-2 [&:has(input:focus)]:outline-offset-2 [&:has(input:focus)]:outline-acc": true,
  }),
);

/**
 * The classes which are applied to the label element.
 */
const labelClasses = computed(
  (): Record<string, boolean> => ({
    "absolute pointer-events-none select-none transition-all": true,

    // Label positioning
    "left-3": !props.startIcon,
    "left-10": !!props.startIcon,
    "text-xs top-2": isFocused.value || !!props.modelValue,
    "text-base top-1/2 -translate-y-1/2": !isFocused.value && !props.modelValue,

    // Variant colors
    "text-gray-300": props.variant === "default",
    "text-suc": props.variant === "success",
    "text-dng": props.variant === "danger",
    "text-war": props.variant === "warning",
    "text-inf": props.variant === "info",

    // Disabled
    "cursor-not-allowed": props.disabled,
  }),
);

/**
 * The classes which are applied to the input element.
 */
const inputClasses = computed(
  (): Record<string, boolean> => ({
    "peer w-full h-full flex-1 text-gray-300": true,

    // Input positioning
    "pl-3": !props.startIcon,
    "pt-5 pb-1": isFocused.value || !!props.modelValue,
    "py-0": !isFocused.value && !props.modelValue,

    // Prevent focus styles for the input element, as they are handled on the wrapper element.
    "focus:ring-0 focus-visible:outline-none": true,
  }),
);

/**
 * The classes which are applied to the start and end icons.
 */
const iconClasses = computed(
  (): Record<string, boolean> => ({
    "text-gray-300": props.variant === "default",
    "text-suc": props.variant === "success",
    "text-dng": props.variant === "danger",
    "text-war": props.variant === "warning",
    "text-inf": props.variant === "info",
  }),
);

/**
 * The classes which are applied to the addon button.
 */
const addonClasses = computed(
  (): Record<string, boolean> => ({
    "flex h-full items-center justify-center aspect-square border-l rounded-r": true,

    // Variants
    "border-gray-600 text-gray-300 hover:bg-gray-600/10": props.variant === "default",
    "border-suc text-suc hover:bg-suc-light-hover": props.variant === "success",
    "border-dng text-dng hover:bg-dng-light-hover": props.variant === "danger",
    "border-war text-war hover:bg-war-light-hover": props.variant === "warning",
    "border-inf text-inf hover:bg-inf-light-hover": props.variant === "info",

    "focus:outline-none": true,
    // "focus:outline-2 focus:outline-offset-2 focus:outline-acc": true,
  }),
);

/**
 * Handles the focus event of the input.
 */
const handleFocus = (event: FocusEvent) => {
  isFocused.value = true;
  emit("focus", event);
};

/**
 * Handles the blur event of the input.
 */
const handleBlur = (event: FocusEvent) => {
  isFocused.value = false;
  emit("blur", event);
};

/**
 * Handles the input event of the input.
 */
const handleInput = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div :class="wrapperClasses">
    <!-- Start Icon -->
    <slot name="start">
      <div v-if="startIcon" class="flex h-full items-center justify-center px-2">
        <Icon :icon="startIcon" :class="iconClasses" />
      </div>
    </slot>

    <label :class="labelClasses">{{ label }}</label>
    <input :value="modelValue" :class="inputClasses" :type="type" :disabled="disabled" :readonly="readOnly" @focus="handleFocus" @blur="handleBlur" @input="handleInput" />

    <!-- End Icon -->
    <slot name="end">
      <div v-if="endIcon" class="flex h-full items-center justify-center px-2">
        <Icon :icon="endIcon" :class="iconClasses" />
      </div>
    </slot>
  </div>
</template>
