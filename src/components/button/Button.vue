<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { CheckIcon, XMarkIcon } from "@heroicons/vue/24/outline";

import Spinner from "@/components/spinner/Spinner.vue";
import { cn } from "../../utils/classes";

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "neutral",
  label: "Button",
  state: "idle",
  noShake: false,
});

const emit = defineEmits<ButtonEmits>();
const slots = defineSlots<ButtonSlots>();

const shaking = ref(false);

/**
 * The classes which are applied to the button.
 */
const classes = computed(() =>
  cn({
    "relative flex items-center justify-center px-6 py-2 rounded-md transition-colors": true,

    // Focus state
    "focus:outline-none focus:ring-2 focus:ring-offset-2": true,

    // Primary variant
    "bg-pri text-pri-contrast focus:ring-pri": props.variant === "primary",
    "hover:bg-pri-hover active:bg-pri-active": props.variant === "primary" && props.state === "idle",

    // Secondary variant
    "bg-sec text-sec-contrast focus:ring-sec": props.variant === "secondary",
    "hover:bg-sec-hover active:bg-sec-active": props.variant === "secondary" && props.state === "idle",

    // Neutral variant
    "bg-gray-400 text-white focus:ring-gray-400": props.variant === "neutral",
    "hover:bg-gray-500 active:bg-gray-600": props.variant === "neutral" && props.state === "idle",

    // Disabled state
    "cursor-not-allowed opacity-75": props.state !== "idle",

    // Shake animation
    shake: shaking.value,
  }),
);

/**
 * Watch for changes in the buttons state. When the state switches to either `success` or `error`, a timeout is set to switch
 * the state back to `idle` after a predefined amount of time.
 */
watch(
  () => props.state,
  (state) => {
    if (state === "error" && !props.noShake) shaking.value = true;
    if (state === "success" || state === "error") {
      setTimeout(() => {
        emit("update:state", "idle");
        shaking.value = false;
      }, 1250);
    }
  },
);

type ButtonProps = {
  /**
   * The color variant the button will have.
   */
  variant?: "primary" | "secondary" | "neutral";

  /**
   * The label which is displayed on the button.
   */
  label?: string;

  /**
   * The state of the button. This will dictate how the button appears and behaves.
   */
  state?: ButtonState;

  /**
   * Prevent the button from shaking when an error occurs.
   */
  noShake?: boolean;
};

type ButtonState = "idle" | "loading" | "disabled" | "success" | "error";

type ButtonEmits = {
  /**
   * The state of the button should be updated to the provided value. This is used to change
   * the buttons state back to `idle` after it has been set to either `success` or `error`.
   */
  (e: "update:state", state: ButtonState): void;
};

type ButtonSlots = {
  /**
   * The default slot which is used to display the buttons content.
   */
  default(): any;

  /**
   * Used to display a custom loading indicator.
   */
  stateLoading(): any;

  /**
   * Used to display a custom success icon.
   */
  stateSuccess(): any;

  /**
   * Used to display a custom error icon.
   */
  stateError(): any;
};
</script>

<template>
  <button :class="classes" :disabled="state !== 'idle'">
    <!-- This element is required to keep the buttons length when the state switches -->
    <span class="invisible">{{ label }}</span>

    <Transition name="fade-content">
      <slot name="stateLoading">
        <Spinner v-if="state === 'loading'" size="sm" :variant="variant" class="absolute" contrast />
      </slot>
    </Transition>

    <Transition name="fade-content">
      <slot name="stateSuccess">
        <CheckIcon v-if="state === 'success'" class="absolute w-8 h-8" />
      </slot>
    </Transition>

    <Transition name="fade-content">
      <slot name="stateError">
        <XMarkIcon v-if="state === 'error'" class="absolute w-8 h-8" />
      </slot>
    </Transition>

    <Transition name="fade-content">
      <span v-if="state === 'idle' || state === 'disabled'" class="absolute">
        <slot>
          {{ label }}
        </slot>
      </span>
    </Transition>
  </button>
</template>

<style scoped>
.fade-content-enter-active,
.fade-content-leave-active {
  transition: all 0.25s ease;
}

.fade-content-enter-from,
.fade-content-leave-to {
  opacity: 0;
  transform: translateY(1rem);
}

.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-0.75rem);
  }
  50% {
    transform: translateX(0.75rem);
  }
  75% {
    transform: translateX(-0.75rem);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
