<script setup lang="ts">
import { computed } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

import { cn } from "../../utils/classes";

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: "primary",
  label: "Badge",
  dismissable: false,
});

const emit = defineEmits<BadgeEmits>();
const slots = defineSlots<BadgeSlots>();

/**
 * The classes which are applied to the badge.
 */
const classes = computed(() =>
  cn({
    "flex items-center gap-2 max-w-fit rounded-md px-3 transition-colors": true,

    // Primary variant
    "bg-pri text-pri-contrast": props.variant === "primary",

    // Secondary variant
    "bg-sec text-sec-contrast": props.variant === "secondary",

    // Neutral variant
    "bg-gray-400 text-white": props.variant === "neutral",
  }),
);

type BadgeProps = {
  /**
   * The color variant the button will have.
   */
  variant?: "primary" | "secondary" | "neutral";

  /**
   * The text to display in the badge.
   */
  label?: string;

  /**
   * Enable the badge to be dismissable when clicked.
   */
  dismissable?: boolean;
};

type BadgeEmits = {
  /**
   * The badge has been dismissed.
   */
  (e: "dismiss"): void;
};

type BadgeSlots = {
  /**
   * The default slot which is used to display the badge's content.
   */
  default(): any;
};
</script>

<template>
  <div :class="classes">
    <slot>
      {{ label }}
    </slot>

    <button v-if="dismissable" class="flex items-center justify-center" aria-label="dismiss" @click="emit('dismiss')">
      <XMarkIcon class="w-4 h-4" aria-hidden />
    </button>
  </div>
</template>
