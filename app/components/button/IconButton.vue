<script setup lang="ts">
import Button from "@/components/button/Button.vue";
import Icon from "@/components/icon/Icon.vue";

const slots = defineSlots<IconButtonSlots>();

const props = withDefaults(defineProps<IconButtonProps>(), {
  variant: "primary",
  type: "button",
  size: "md",
  disabled: false,
});

interface IconButtonProps {
  icon: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

interface IconButtonSlots {
  default?: { icon: string };
}
</script>

<template>
  <Button :type="type" :variant="variant" :size="size" :disabled="disabled">
    <slot name="default" :icon="icon">
      <Icon :icon="icon" />
    </slot>
  </Button>
</template>
