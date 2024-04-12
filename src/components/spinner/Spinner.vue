<script setup lang="ts">
import { computed } from "vue";
import { cn } from "../../utils/classes";

const props = withDefaults(defineProps<SpinnerProps>(), {
  variant: "primary",
  appearance: "circle",
  size: "md",
});

/**
 * The classes which are applied to the loading spinner.
 */
const classes = computed(() =>
  cn({
    // Sizes
    "w-6 h-6": props.size === "sm",
    "w-8 h-8": props.size === "md",
    "w-12 h-12": props.size === "lg",

    // Variants
    "text-pri": props.variant === "primary" && !props.contrast,
    "text-pri-contrast": props.variant === "primary" && props.contrast,
    "text-sec": props.variant === "secondary" && !props.contrast,
    "text-sec-contrast": props.variant === "secondary" && props.contrast,
    "text-gray-500": props.variant === "neutral" && !props.contrast,
    "text-white": props.variant === "neutral" && props.contrast,
  })
);

type SpinnerProps = {
  /**
   * The color variant the spinner will have.
   */
  variant?: "primary" | "secondary" | "neutral";

  /**
   * The appearance of the spinner. This will change it's layout and the form.
   */
  appearance?: "circle" | "bars" | "dots";

  /**
   * The size in which the spinner will be displayed.
   */
  size?: "sm" | "md" | "lg";

  /**
   * Render the spinner in the contrast color of the variant.
   */
  contrast?: boolean;
};
</script>

<template>
  <div class="flex items-center justify-center">
    <svg
      v-if="appearance === 'circle'"
      :class="classes"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
        fill="currentColor"
      />
      <path
        d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
        class="spinner-circle"
        fill="currentColor"
      />
    </svg>

    <svg
      v-if="appearance === 'bars'"
      :class="classes"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        class="spinner-bars"
        x="1"
        y="6"
        width="2.8"
        height="12"
        fill="currentColor"
      />
      <rect
        class="spinner-bars spinner-bars-offset-1"
        x="5.8"
        y="6"
        width="2.8"
        height="12"
        fill="currentColor"
      />
      <rect
        class="spinner-bars spinner-bars-offset-2"
        x="10.6"
        y="6"
        width="2.8"
        height="12"
        fill="currentColor"
      />
      <rect
        class="spinner-bars spinner-bars-offset-3"
        x="15.4"
        y="6"
        width="2.8"
        height="12"
        fill="currentColor"
      />
      <rect
        class="spinner-bars spinner-bars-offset-4"
        x="20.2"
        y="6"
        width="2.8"
        height="12"
        fill="currentColor"
      />
    </svg>

    <svg
      v-if="appearance === 'dots'"
      :class="classes"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle class="spinner-dots" cx="4" cy="12" r="3" fill="currentColor" />
      <circle
        class="spinner-dots spinner-dots-offset-1"
        cx="12"
        cy="12"
        r="3"
        fill="currentColor"
      />
      <circle
        class="spinner-dots spinner-dots-offset-2"
        cx="20"
        cy="12"
        r="3"
        fill="currentColor"
      />
    </svg>
  </div>
</template>

<style scoped>
.spinner-circle {
  transform-origin: center;
  animation: spinner-circle-kf 0.5s infinite linear;
}

.spinner-bars {
  animation: spinner-bars-kf 0.9s infinite linear;
  animation-delay: -0.9s;
}

.spinner-bars-offset-1 {
  animation-delay: -0.8s;
}

.spinner-bars-offset-2 {
  animation-delay: -0.7s;
}

.spinner-bars-offset-3 {
  animation-delay: -0.6s;
}

.spinner-bars-offset-4 {
  animation-delay: -0.5s;
}

.spinner-dots {
  animation: spinner-dots-kf 0.8s infinite linear;
}

.spinner-dots-offset-1 {
  animation-delay: -0.65s;
}
.spinner-dots-offset-2 {
  animation-delay: -0.5s;
}

@keyframes spinner-circle-kf {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinner-bars-kf {
  0%,
  66.66% {
    animation-timing-function: cubic-bezier(0.36, 0.61, 0.3, 0.98);
    y: 6px;
    height: 12px;
  }
  33.33% {
    animation-timing-function: cubic-bezier(0.36, 0.61, 0.3, 0.98);
    y: 1px;
    height: 22px;
  }
}

@keyframes spinner-dots-kf {
  93.75%,
  100% {
    r: 3px;
  }
  46.875% {
    r: 0.2px;
  }
}
</style>
