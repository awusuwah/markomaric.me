<script setup lang="ts">
import { computed } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

import { cn } from "../../utils/classes";
import type { BadgeProps, BadgeEmits, BadgeSlots } from "./Badge.types";

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

    // Variants: Tailwind colors
    "bg-slate-500 text-white": props.variant === "slate",
    "bg-gray-500 text-white": props.variant === "gray",
    "bg-zinc-500 text-white": props.variant === "zinc",
    "bg-neutral-500 text-white": props.variant === "neutral",
    "bg-stone-500 text-white": props.variant === "stone",
    "bg-red-500 text-white": props.variant === "red",
    "bg-orange-500 text-white": props.variant === "orange",
    "bg-amber-500 text-white": props.variant === "amber",
    "bg-yellow-500 text-white": props.variant === "yellow",
    "bg-lime-500 text-white": props.variant === "lime",
    "bg-green-500 text-white": props.variant === "green",
    "bg-emerald-500 text-white": props.variant === "emerald",
    "bg-teal-500 text-white": props.variant === "teal",
    "bg-cyan-500 text-white": props.variant === "cyan",
    "bg-sky-500 text-white": props.variant === "sky",
    "bg-blue-500 text-white": props.variant === "blue",
    "bg-indigo-500 text-white": props.variant === "indigo",
    "bg-violet-500 text-white": props.variant === "violet",
    "bg-purple-500 text-white": props.variant === "purple",
    "bg-fuchsia-500 text-white": props.variant === "fuchsia",
    "bg-pink-500 text-white": props.variant === "pink",
    "bg-rose-500 text-white": props.variant === "rose",
    "bg-white text-black": props.variant === "white",
    "bg-black text-white": props.variant === "black",

    // Variants: Custom colors
    "bg-pri text-pri-contrast": props.variant === "primary",
    "bg-sec text-sec-contrast": props.variant === "secondary",
  }),
);
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
