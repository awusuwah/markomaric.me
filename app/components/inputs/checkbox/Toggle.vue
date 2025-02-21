<script setup lang="ts">
import Checkbox from "@/components/inputs/checkbox/Checkbox.vue";
import type { CheckboxProps, CheckboxEmits } from "@/@types/checkbox.d.ts";

const emit = defineEmits<CheckboxEmits>();
const props = withDefaults(defineProps<CheckboxProps>(), {
  label: undefined,
  variant: "default",
  disabled: false,
});

/**
 * The classes which are applied to the custom toggle element.
 */
const toggleClasses = computed(
  (): Record<string, boolean> => ({
    "relative w-11 h-6 rounded-full transition-all": true,

    // Knob
    "after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:w-5 after:h-5 after:content-[''] after:transition-all": true,
    "peer-checked:after:translate-x-full peer-checked:after:border-white": true,

    // Unchecked
    "bg-gray-600 peer-not-checked:peer-not-disabled:hover:bg-gray-500 peer-not-checked:peer-not-disabled:group-hover:bg-gray-500": props.variant === "default",
    "bg-suc-light peer-not-checked:peer-not-disabled:hover:bg-suc-light-hover peer-not-checked:peer-not-disabled:group-hover:bg-suc-light-hover": props.variant === "success",
    "bg-dng-light peer-not-checked:peer-not-disabled:hover:bg-dng-light-hover peer-not-checked:peer-not-disabled:group-hover:bg-dng-light-hover": props.variant === "danger",
    "bg-war-light peer-not-checked:peer-not-disabled:hover:bg-war-light-hover peer-not-checked:peer-not-disabled:group-hover:bg-war-light-hover": props.variant === "warning",
    "bg-inf-light peer-not-checked:peer-not-disabled:hover:bg-inf-light-hover peer-not-checked:peer-not-disabled:group-hover:bg-inf-light-hover": props.variant === "info",

    // Checked
    "peer-checked:bg-acc peer-checked:peer-not-disabled:hover:bg-acc-hover peer-checked:peer-not-disabled:group-hover:bg-acc-hover": props.variant === "default",
    "peer-checked:bg-suc peer-checked:peer-not-disabled:hover:bg-suc-hover peer-checked:peer-not-disabled:group-hover:bg-suc-hover": props.variant === "success",
    "peer-checked:bg-dng peer-checked:peer-not-disabled:hover:bg-dng-hover peer-checked:peer-not-disabled:group-hover:bg-dng-hover": props.variant === "danger",
    "peer-checked:bg-war peer-checked:peer-not-disabled:hover:bg-war-hover peer-checked:peer-not-disabled:group-hover:bg-war-hover": props.variant === "warning",
    "peer-checked:bg-inf peer-checked:peer-not-disabled:hover:bg-inf-hover peer-checked:peer-not-disabled:group-hover:bg-inf-hover": props.variant === "info",

    // Focus
    "peer-focus:ring-2 peer-focus:ring-acc peer-focus:ring-offset-2 peer-focus:ring-offset-gray-900": true,
  }),
);
</script>

<template>
  <Checkbox :model-value="modelValue" :label="label" :variant="variant" :disabled="disabled" @update:model-value="emit('update:modelValue', $event)">
    <template #default>
      <div :class="toggleClasses"></div>
    </template>
  </Checkbox>
</template>
