<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import type { TextProps, TextEmits, TextSlots } from "@/@types/text.d.ts";

const emit = defineEmits<TextEmits>();
const slots = defineSlots<TextSlots>();
const props = withDefaults(defineProps<TextProps>(), {
  label: undefined,
  placeholder: "Placeholder",
  type: "text",
  variant: "default",
  disabled: false,
  prefixIcon: undefined,
  suffixIcon: undefined,
  readOnly: false,
});

/**
 * The classes which are applied to the wrapper element.
 */
const wrapperClasses = computed(
  (): Record<string, boolean> => ({
    "flex flex-col gap-y-1": true,
  }),
);

/**
 * The classes which are applied to the wrapper element around the input element + the prefix and suffix icons.
 */
const inputWrapperClasses = computed(
  (): Record<string, boolean> => ({
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
  }),
);

/**
 * The classes which are applied to the input element.
 */
const inputClasses = computed(
  (): Record<string, boolean> => ({
    "peer w-full h-full flex-1": true,

    // Spacing
    "px-2": !props.prefixIcon,

    // Prevent focus styles
    "focus:ring-0 focus-visible:outline-none": true,

    // Disabled
    "cursor-not-allowed": props.disabled,
  }),
);

/**
 * The classes which are applied to the label element.
 */
const labelClasses = computed(
  (): Record<string, boolean> => ({
    "w-fit select-none": true,

    // Variants
    "text-txt": props.variant === "default",
    "text-suc": props.variant === "success",
    "text-dng": props.variant === "danger",
    "text-war": props.variant === "warning",
    "text-inf": props.variant === "info",

    // Disabled
    "cursor-not-allowed": props.disabled,
  }),
);

/**
 * The classes which are applied to the icon elements.
 */
const iconClasses = computed(
  (): Record<string, boolean> => ({
    "text-txt": props.variant === "default",
    "text-suc": props.variant === "success",
    "text-dng": props.variant === "danger",
    "text-war": props.variant === "warning",
    "text-inf": props.variant === "info",
  }),
);

/**
 * Create an object with all native input event handlers
 */
const inputEvents = computed(() => ({
  input: (e: Event) => emit("update:modelValue", (e.target as HTMLInputElement).value),
  blur: (e: Event) => emit("blur", e),
  focus: (e: Event) => emit("focus", e),
  keydown: (e: Event) => emit("keydown", e),
  keyup: (e: Event) => emit("keyup", e),
  keypress: (e: Event) => emit("keypress", e),
  change: (e: Event) => emit("change", e),
  paste: (e: Event) => emit("paste", e),
}));
</script>

<template>
  <label :class="wrapperClasses">
    <slot name="label" :label="label">
      <span v-if="label" :class="labelClasses">{{ label }}</span>
    </slot>

    <!-- The custom input element -->
    <div :class="inputWrapperClasses">
      <!-- Prefix Icon -->
      <slot name="start">
        <div v-if="prefixIcon" class="flex aspect-square h-full items-center justify-center">
          <Icon :icon="prefixIcon" :class="iconClasses" />
        </div>
      </slot>

      <input :type="type" :placeholder="placeholder" :value="modelValue" :disabled="disabled" :readonly="readOnly" :class="inputClasses" v-on="inputEvents" />

      <!-- Suffix Icon -->
      <slot name="end">
        <div v-if="suffixIcon" class="flex aspect-square h-full items-center justify-center">
          <Icon :icon="prefixIcon" :class="iconClasses" />
        </div>
      </slot>
    </div>
  </label>
</template>
