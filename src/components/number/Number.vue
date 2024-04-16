<script setup lang="ts">
import { computed } from "vue";
import { CheckIcon, XCircleIcon } from "@heroicons/vue/24/outline";

import { cn } from "../../utils/classes";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<NumberProps>(), {
  state: "idle",
  errorMessage: "Invalid input.",
  step: 1,
});

const emit = defineEmits<NumberEmits>();

/**
 * Increment the value of the number input by 1.
 */
const increment = (): void => {
  const newValue = props.modelValue + props.step;
  emit("update:modelValue", props.max !== undefined ? Math.min(newValue, props.max) : newValue);
};

/**
 * Decrement the value of the number input by 1.
 */
const decrement = (): void => {
  const newValue = props.modelValue - props.step;
  emit("update:modelValue", props.min !== undefined ? Math.max(newValue, props.min) : newValue);
};

/**
 * Make sure that the value returned is always a number. If the conversion into
 * a number fails, then return 0.
 *
 * @param { Event } event - The event which triggered the input.
 */
const handleInput = (event: Event): void => {
  const valueNumber = (event.target as HTMLInputElement).valueAsNumber;
  emit("update:modelValue", Number.isNaN(valueNumber) ? 0 : valueNumber);
};

/**
 * Handle when the user presses the up or down arrow keys. This will increment or decrement
 * the value of the number input by the step prop.
 */
const handleArrowKeys = (event: KeyboardEvent): void => {
  event.preventDefault();

  if (event.key === "ArrowUp") {
    increment();
  } else if (event.key === "ArrowDown") {
    decrement();
  }
};

/**
 * The classes which are applied wrapper element.
 */
const wrapperClasses = computed(() =>
  cn({
    "flex items-center relative pl-3": true,
    "w-full rounded border": true,

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

/**
 * The classes which are applied to the increment / decrement button wrapper.
 */
const buttonWrapperClasses = computed(() =>
  cn({
    "flex flex-col w-8 border-l divide-y": true,

    // State variants
    "border-gray-300 divide-gray-300": props.state === "idle",
    "border-emerald-600 divide-emerald-600": props.state === "success",
    "border-red-600 divide-red-600": props.state === "error",
  }),
);

/**
 * The classes which are applied to the increment / decrement buttons.
 */
const buttonClasses = computed(() =>
  cn({
    "text-xs h-5 select-none": true,

    // State variants
    "hover:bg-gray-300/20": props.state === "idle",
    "hover:bg-emerald-600/20": props.state === "success",
    "hover:bg-red-600/20": props.state === "error",
  }),
);

type NumberProps = {
  /**
   * The label which is displayed above the input field.
   */
  label?: string;

  /**
   * The state of the number input. This will dictate how the number input appears.
   */
  state?: "idle" | "loading" | "success" | "error";

  /**
   * The value of the number input.
   */
  modelValue: number;

  /**
   * The error message that is shown when the state is `error`.
   */
  errorMessage?: string;

  /**
   * Handle the max value of the input.
   */
  max?: number;

  /**
   * Handle the min value of the input.
   */
  min?: number;

  /**
   * The amount by which the value of the number input should be incremented or decremented.
   */
  step?: number;

  /**
   * The unique identifier of the number input. This is mostly used to connect the label with the
   * number input field.
   */
  id?: string;
};

type NumberEmits = {
  /**
   * The value of the number input has changed and should be updated.
   */
  (e: "update:modelValue", value: number): void;
};
</script>

<template>
  <div class="flex flex-col flex-1">
    <label v-if="label" :for="id" :class="labelClasses">{{ label }}</label>
    <div v-if="state !== 'loading'" :class="wrapperClasses">
      <input
        v-bind="$attrs"
        :id="id"
        class="bg-transparent w-full border-none focus:ring-0 focus:outline-none"
        type="number"
        :value="modelValue"
        :min="min"
        :max="max"
        @input="handleInput"
        @keydown="handleArrowKeys"
      />
      <div :class="buttonWrapperClasses">
        <button :class="buttonClasses" aria-label="Increment" tabindex="-1" @click="increment">+</button>
        <button :class="buttonClasses" aria-label="Decrement" tabindex="-1" @click="decrement">-</button>
      </div>

      <CheckIcon v-if="state === 'success'" class="absolute right-9 w-7 h-7 text-emerald-600" />
      <XCircleIcon v-if="state === 'error'" class="absolute right-9 w-7 h-7 text-red-600" />
    </div>
    <div v-else class="animate-pulse bg-gray-400 w-full h-[42px] rounded"></div>
    <span v-if="state === 'error' && errorMessage" class="text-xs text-red-600">
      {{ errorMessage }}
    </span>
  </div>
</template>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield; /* Hide for Firefox */
}
</style>
