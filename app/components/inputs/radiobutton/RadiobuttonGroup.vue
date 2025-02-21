<script setup lang="ts">
import Radiobutton from "@/components/inputs/radiobutton/Radiobutton.vue";
import type { RadiobuttonGroupProps, RadiobuttonGroupEmits } from "@/@types/radiobutton.d.ts";

const emit = defineEmits<RadiobuttonGroupEmits>();
const props = withDefaults(defineProps<RadiobuttonGroupProps>(), {
  variant: "default",
  disabled: false,
  inline: false,
});

/**
 * The classes which are applied to the wrapper element.
 */
const wrapperClasses = computed(
  (): Record<string, boolean> => ({
    flex: true,
    "flex-row gap-x-6": props.inline,
    "flex-col gap-y-2": !props.inline,
  }),
);

/**
 * The classes which are applied to the label element.
 */
const labelClasses = computed(
  (): Record<string, boolean> => ({
    "font-medium text-sm w-fit select-none": true,

    // Variants
    "text-txt": props.variant === "default",
    "text-suc": props.variant === "success",
    "text-dng": props.variant === "danger",
    "text-war": props.variant === "warning",
    "text-inf": props.variant === "info",

    // Disabled
    "cursor-not-allowed italic opacity-50": props.disabled,
  }),
);
</script>

<template>
  <div :class="wrapperClasses">
    <label v-if="label" :class="labelClasses">{{ label }}</label>

    <div class="flex flex-row gap-x-6">
      <Radiobutton
        v-for="option in props.options"
        :model-value="props.modelValue"
        :label="option.label"
        :value="option.value"
        :variant="variant"
        :disabled="disabled || option.disabled"
        :group="group"
        @update:model-value="emit('update:modelValue', $event)"
      />
    </div>
  </div>
</template>
