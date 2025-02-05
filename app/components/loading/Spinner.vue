<script setup lang="ts">
import type { SpinnerProps } from "@/@types/loading.d.ts";

const props = withDefaults(defineProps<SpinnerProps>(), {
  type: "circle",
  variant: "primary",
  size: "md",
  contrast: false,
});

/**
 * The classes which are applied to the spinner element.
 */
const spinnerClasses = computed(() => ({
  // Sizes
  "h-3 w-3": props.size === "xs",
  "h-4 w-4": props.size === "sm",
  "h-6 w-6": props.size === "md",
  "h-8 w-8": props.size === "lg",
  "h-10 w-10": props.size === "xl",

  // Variants
  "text-pri": props.variant === "primary" && !props.contrast,
  "text-pri-contrast": props.variant === "primary" && props.contrast,

  "text-sec": props.variant === "secondary" && !props.contrast,
  "text-sec-contrast": props.variant === "secondary" && props.contrast,
}));
</script>

<template>
  <div class="flex items-center justify-center">
    <svg v-if="type === 'circle'" :class="spinnerClasses" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" fill="currentColor" />
      <path
        d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
        class="spinner-circle"
        fill="currentColor"
      />
    </svg>

    <svg v-if="type === 'bars'" :class="spinnerClasses" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect class="spinner-bars" x="1" y="6" width="2.8" height="12" fill="currentColor" />
      <rect class="spinner-bars spinner-bars-offset-1" x="5.8" y="6" width="2.8" height="12" fill="currentColor" />
      <rect class="spinner-bars spinner-bars-offset-2" x="10.6" y="6" width="2.8" height="12" fill="currentColor" />
      <rect class="spinner-bars spinner-bars-offset-3" x="15.4" y="6" width="2.8" height="12" fill="currentColor" />
      <rect class="spinner-bars spinner-bars-offset-4" x="20.2" y="6" width="2.8" height="12" fill="currentColor" />
    </svg>

    <svg v-if="type === 'dots'" :class="spinnerClasses" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle class="spinner-dots" cx="4" cy="12" r="3" fill="currentColor" />
      <circle class="spinner-dots spinner-dots-offset-1" cx="12" cy="12" r="3" fill="currentColor" />
      <circle class="spinner-dots spinner-dots-offset-2" cx="20" cy="12" r="3" fill="currentColor" />
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
