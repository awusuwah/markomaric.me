<script setup lang="ts">
import { computed } from "vue";
import { CheckIcon, XCircleIcon } from "@heroicons/vue/24/outline";

import { cn } from "../../utils/classes";
import type { TextProps, TextEmits } from "./Text.types";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<TextProps>(), {
  state: "idle",
  errorMessage: "Invalid input.",
  type: "text",
});

const emit = defineEmits<TextEmits>();

/**
 * The classes which are applied to the wrapper element.
 */
const wrapperClasses = computed(() =>
  cn({
    "flex items-center relative pl-3": true,
    "w-full rounded border py-2": true,

    // Focus styles
    "focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500": true,

    // State variants
    "bg-white border-gray-300 text-gray-800": props.state === "idle",
    "bg-emerald-600/10 border-emerald-600 text-emerald-600": props.state === "success",
    "bg-red-600/10 border-red-600 text-red-600": props.state === "error",
  }),
);

/**
 * The classes which are applied to the label.
 */
const labelClasses = computed(() =>
  cn({
    "text-sm font-medium": true,

    // State variants
    "text-gray-800": props.state === "idle" || props.state === "loading",
    "text-emerald-600": props.state === "success",
    "text-red-600": props.state === "error",
  }),
);
</script>

<template>
  <div class="flex flex-col flex-1">
    <label v-if="label" :for="id" :class="labelClasses">{{ label }}</label>
    <div v-if="state !== 'loading'" :class="wrapperClasses">
      <input
        v-bind="$attrs"
        :id="id"
        class="bg-transparent w-full border-none focus:ring-0 focus:outline-none"
        :type="type"
        :value="modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value || '')"
      />
      <CheckIcon v-if="state === 'success'" class="absolute right-2 w-7 h-7 text-emerald-600" />
      <XCircleIcon v-if="state === 'error'" class="absolute right-2 w-7 h-7 text-red-600" />
    </div>
    <div v-else class="animate-pulse bg-gray-400 w-full h-[42px] rounded"></div>
    <span v-if="state === 'error' && errorMessage" class="text-xs text-red-600">
      {{ errorMessage }}
    </span>
  </div>
</template>
