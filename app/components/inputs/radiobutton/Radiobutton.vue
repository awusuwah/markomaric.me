<script setup lang="ts">
import type { RadiobuttonProps, RadiobuttonEmits, RadiobuttonSlots } from "@/@types/radiobutton.d.ts";

const emit = defineEmits<RadiobuttonEmits>();
const slots = defineSlots<RadiobuttonSlots>();
const props = withDefaults(defineProps<RadiobuttonProps>(), {
  label: undefined,
  value: undefined,
  group: undefined,
  variant: "default",
  disabled: false,
});

/**
 * The classes which are applied to the wrapper element.
 */
const wrapperClasses = computed(
  (): Record<string, boolean> => ({
    "group relative flex flex-row items-center gap-x-2 w-fit": true,
    "cursor-pointer": !props.disabled,
    "cursor-not-allowed opacity-50": props.disabled,
  }),
);

/**
 * The classes which are applied to the custom radio button element.
 */
const radiobuttonClasses = computed(
  (): Record<string, boolean> => ({
    "grid w-5 h-5 border rounded-full place-content-center transition-all": true,

    // Variants (unchecked)
    "border-gray-600 peer-checked:border-transparent": props.variant === "default",
    "border-suc peer-checked:border-transparent": props.variant === "success",
    "border-dng peer-checked:border-transparent": props.variant === "danger",
    "border-war peer-checked:border-transparent": props.variant === "warning",
    "border-inf peer-checked:border-transparent": props.variant === "info",

    // Variants (checked)
    "peer-checked:bg-acc peer-checked:peer-not-disabled:hover:bg-acc-hover peer-checked:peer-not-disabled:group-hover:bg-acc-hover": props.variant === "default",
    "peer-checked:bg-suc peer-checked:peer-not-disabled:hover:bg-suc-hover peer-checked:peer-not-disabled:group-hover:bg-suc-hover": props.variant === "success",
    "peer-checked:bg-dng peer-checked:peer-not-disabled:hover:bg-dng-hover peer-checked:peer-not-disabled:group-hover:bg-dng-hover": props.variant === "danger",
    "peer-checked:bg-war peer-checked:peer-not-disabled:hover:bg-war-hover peer-checked:peer-not-disabled:group-hover:bg-war-hover": props.variant === "warning",
    "peer-checked:bg-inf peer-checked:peer-not-disabled:hover:bg-inf-hover peer-checked:peer-not-disabled:group-hover:bg-inf-hover": props.variant === "info",

    // Checkmark
    "peer-checked:[&>div]:bg-acc-contrast": props.variant === "default",
    "peer-checked:[&>div]:bg-suc-contrast": props.variant === "success",
    "peer-checked:[&>div]:bg-dng-contrast": props.variant === "danger",
    "peer-checked:[&>div]:bg-war-contrast": props.variant === "warning",
    "peer-checked:[&>div]:bg-inf-contrast": props.variant === "info",

    // Focus
    "peer-focus:ring-2 peer-focus:ring-acc peer-focus:ring-offset-2 peer-focus:ring-offset-gray-900": true,
  }),
);

/**
 * The classes which are applied to the label of the radiobutton.
 */
const labelClasses = computed(
  (): Record<string, boolean> => ({
    "ms-1 text-sm font-medium select-none": true,

    // Variants
    "text-txt": props.variant === "default",
    "text-suc": props.variant === "success",
    "text-dng": props.variant === "danger",
    "text-war": props.variant === "warning",
    "text-inf": props.variant === "info",

    // Disabled
    italic: props.disabled,
  }),
);
</script>

<template>
  <label :class="wrapperClasses">
    <input
      type="radio"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      :name="group"
      class="peer sr-only"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />

    <!-- Custom radiobutton -->
    <slot>
      <div :class="radiobuttonClasses">
        <div class="h-1.5 w-1.5 rounded-full transition"></div>
      </div>
    </slot>

    <!-- Label -->
    <slot name="label" :label="label">
      <span v-if="label" :class="labelClasses">{{ label }}</span>
    </slot>
  </label>
</template>
