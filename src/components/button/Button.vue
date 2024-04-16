<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { CheckIcon, XMarkIcon } from "@heroicons/vue/24/outline";

import Spinner from "@/components/spinner/Spinner.vue";
import { cn } from "../../utils/classes";

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
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
    "relative flex items-center justify-center h-[42px] px-6 py-2 rounded-md transition-colors": true,

    // Focus state
    "focus:outline-none focus:ring-2 focus:ring-offset-2": true,

    // Variants: Tailwind colors
    "bg-slate-500 text-white focus:ring-slate-400": props.variant === "slate",
    "hover:bg-slate-600 active:bg-slate-700": props.variant === "slate" && props.state === "idle",

    "bg-gray-500 text-white focus:ring-gray-500": props.variant === "gray",
    "hover:bg-gray-600 active:bg-gray-700": props.variant === "gray" && props.state === "idle",

    "bg-zinc-500 text-white focus:ring-zinc-500": props.variant === "zinc",
    "hover:bg-zinc-600 active:bg-zinc-700": props.variant === "zinc" && props.state === "idle",

    "bg-neutral-500 text-white focus:ring-neutral-500": props.variant === "neutral",
    "hover:bg-neutral-600 active:bg-neutral-700": props.variant === "neutral" && props.state === "idle",

    "bg-stone-500 text-white focus:ring-stone-500": props.variant === "stone",
    "hover:bg-stone-600 active:bg-stone-700": props.variant === "stone" && props.state === "idle",

    "bg-red-500 text-white focus:ring-red-500": props.variant === "red",
    "hover:bg-red-600 active:bg-red-700": props.variant === "red" && props.state === "idle",

    "bg-orange-500 text-white focus:ring-orange-500": props.variant === "orange",
    "hover:bg-orange-600 active:bg-orange-700": props.variant === "orange" && props.state === "idle",

    "bg-amber-500 text-white focus:ring-amber-500": props.variant === "amber",
    "hover:bg-amber-600 active:bg-amber-700": props.variant === "amber" && props.state === "idle",

    "bg-yellow-500 text-white focus:ring-yellow-500": props.variant === "yellow",
    "hover:bg-yellow-600 active:bg-yellow-700": props.variant === "yellow" && props.state === "idle",

    "bg-lime-500 text-white focus:ring-lime-500": props.variant === "lime",
    "hover:bg-lime-600 active:bg-lime-700": props.variant === "lime" && props.state === "idle",

    "bg-green-500 text-white focus:ring-green-500": props.variant === "green",
    "hover:bg-green-600 active:bg-green-700": props.variant === "green" && props.state === "idle",

    "bg-emerald-500 text-white focus:ring-emerald-500": props.variant === "emerald",
    "hover:bg-emerald-600 active:bg-emerald-700": props.variant === "emerald" && props.state === "idle",

    "bg-teal-500 text-white focus:ring-teal-500": props.variant === "teal",
    "hover:bg-teal-600 active:bg-teal-700": props.variant === "teal" && props.state === "idle",

    "bg-cyan-500 text-white focus:ring-cyan-500": props.variant === "cyan",
    "hover:bg-cyan-600 active:bg-cyan-700": props.variant === "cyan" && props.state === "idle",

    "bg-sky-500 text-white focus:ring-sky-500": props.variant === "sky",
    "hover:bg-sky-600 active:bg-sky-700": props.variant === "sky" && props.state === "idle",

    "bg-blue-500 text-white focus:ring-blue-500": props.variant === "blue",
    "hover:bg-blue-600 active:bg-blue-700": props.variant === "blue" && props.state === "idle",

    "bg-indigo-500 text-white focus:ring-indigo-500": props.variant === "indigo",
    "hover:bg-indigo-600 active:bg-indigo-700": props.variant === "indigo" && props.state === "idle",

    "bg-violet-500 text-white focus:ring-violet-500": props.variant === "violet",
    "hover:bg-violet-600 active:bg-violet-700": props.variant === "violet" && props.state === "idle",

    "bg-purple-500 text-white focus:ring-purple-500": props.variant === "purple",
    "hover:bg-purple-600 active:bg-purple-700": props.variant === "purple" && props.state === "idle",

    "bg-fuchsia-500 text-white focus:ring-fuchsia-500": props.variant === "fuchsia",
    "hover:bg-fuchsia-600 active:bg-fuchsia-700": props.variant === "fuchsia" && props.state === "idle",

    "bg-pink-500 text-white focus:ring-pink-500": props.variant === "pink",
    "hover:bg-pink-600 active:bg-pink-700": props.variant === "pink" && props.state === "idle",

    "bg-rose-500 text-white focus:ring-rose-500": props.variant === "rose",
    "hover:bg-rose-600 active:bg-rose-700": props.variant === "rose" && props.state === "idle",

    "bg-white text-black focus:ring-white": props.variant === "white",
    "hover:bg-gray-100 active:bg-gray-200": props.variant === "white" && props.state === "idle",

    "bg-black text-white focus:ring-black": props.variant === "black",
    "hover:bg-gray-900 active:bg-gray-800": props.variant === "black" && props.state === "idle",

    // Variants: Custom colors
    "bg-pri text-pri-contrast focus:ring-pri": props.variant === "primary",
    "hover:bg-pri-hover active:bg-pri-active": props.variant === "primary" && props.state === "idle",

    "bg-sec text-sec-contrast focus:ring-sec": props.variant === "secondary",
    "hover:bg-sec-hover active:bg-sec-active": props.variant === "secondary" && props.state === "idle",

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
  variant?: TailwindColors | CustomColors;

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
