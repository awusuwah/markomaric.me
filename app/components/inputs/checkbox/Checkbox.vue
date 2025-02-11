<script setup lang="ts">
import type { CheckboxProps, CheckboxEmits } from "@/@types/checkbox.d.ts";

const props = withDefaults(defineProps<CheckboxProps>(), {
  label: undefined,
  variant: "default",
  disabled: false,
});

const emit = defineEmits<CheckboxEmits>();

/**
 * The classes which are applied to the wrapper element.
 */
const wrapperClasses = computed(() => ({
  "group relative flex flex-row items-center gap-x-2 w-fit": true,
  "cursor-pointer": !props.disabled,
  "cursor-not-allowed opacity-50": props.disabled,
}));

/**
 * The classes which are applied to the custom checkbox element.
 */
const checkboxClasses = computed(() => ({
  "grid w-5 h-5 border rounded place-content-center": true,

  // Variants
  "border-gray-600 peer-checked:border-transparent": props.variant === "default",
  "border-suc peer-checked:border-transparent": props.variant === "success",
  "border-dng peer-checked:border-transparent": props.variant === "danger",
  "border-war peer-checked:border-transparent": props.variant === "warning",
  "border-inf peer-checked:border-transparent": props.variant === "info",

  // Focus
  "peer-focus:ring-2 peer-focus:ring-acc peer-focus:ring-offset-2 peer-focus:ring-offset-gray-900": true,
}));

/**
 * The classes which are applied to the checkmark svg element.
 */
const checkmarkClasses = computed(() => ({
  "absolute h-5 w-5 p-0.5 text-transparent rounded transition-all": true,

  // Unchecked
  "bg-transparent": props.variant === "default",
  "bg-suc-light peer-not-checked:hover:bg-suc-light-hover peer-not-checked:group-hover:bg-suc-light-hover": props.variant === "success",
  "bg-dng-light peer-not-checked:hover:bg-dng-light-hover peer-not-checked:group-hover:bg-dng-light-hover": props.variant === "danger",
  "bg-war-light peer-not-checked:hover:bg-war-light-hover peer-not-checked:group-hover:bg-war-light-hover": props.variant === "warning",
  "bg-inf-light peer-not-checked:hover:bg-inf-light-hover peer-not-checked:group-hover:bg-inf-light-hover": props.variant === "info",

  // Checked
  "peer-checked:bg-acc peer-checked:peer-not-disabled:hover:bg-acc-hover peer-checked:peer-not-disabled:group-hover:bg-acc-hover peer-checked:text-acc-contrast": props.variant === "default",
  "peer-checked:bg-suc peer-checked:peer-not-disabled:hover:bg-suc-hover peer-checked:peer-not-disabled:group-hover:bg-suc-hover peer-checked:text-suc-contrast": props.variant === "success",
  "peer-checked:bg-dng peer-checked:peer-not-disabled:hover:bg-dng-hover peer-checked:peer-not-disabled:group-hover:bg-dng-hover peer-checked:text-dng-contrast": props.variant === "danger",
  "peer-checked:bg-war peer-checked:peer-not-disabled:hover:bg-war-hover peer-checked:peer-not-disabled:group-hover:bg-war-hover peer-checked:text-war-contrast": props.variant === "warning",
  "peer-checked:bg-inf peer-checked:peer-not-disabled:hover:bg-inf-hover peer-checked:peer-not-disabled:group-hover:bg-inf-hover peer-checked:text-inf-contrast": props.variant === "info",
}));

/**
 * The classes which are applied to the label of the checkbox.
 */
const labelClasses = computed(() => ({
  "ms-1 text-sm font-medium select-none": true,

  // Variants
  "text-txt": props.variant === "default",
  "text-suc": props.variant === "success",
  "text-dng": props.variant === "danger",
  "text-war": props.variant === "warning",
  "text-inf": props.variant === "info",

  // Disabled
  italic: props.disabled,
}));
</script>

<template>
  <label :class="wrapperClasses">
    <input type="checkbox" :checked="modelValue" :disabled="disabled" class="peer sr-only" @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)" />

    <!-- Custom checkbox -->
    <slot>
      <div :class="checkboxClasses"></div>
      <svg :class="checkmarkClasses" viewBox="0 0 16 16" fill="none">
        <path
          d="M12.4409 3.63243L6.66648 9.4075L3.72005 6.46108L3.36649 6.10752L3.01294 6.46108L2.07027 7.40374L1.71672 7.7573L2.07027 8.11085L6.31294 12.3535L6.66649 12.7071L7.02005 12.3535L14.0914 5.28218L14.4451 4.9285L14.0913 4.57495L13.1479 3.63228L12.7943 3.27896L12.4409 3.63243Z"
          fill="currentColor"
          stroke="currentColor"
        />
      </svg>
    </slot>

    <!-- Label -->
    <span v-if="label" :class="labelClasses">{{ label }}</span>
  </label>
</template>
