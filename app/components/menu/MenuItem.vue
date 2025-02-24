<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import type { MenuItemProps, MenuItemEmits, MenuItemSlots } from "@/@types/menu";

const emit = defineEmits<MenuItemEmits>();
const slots = defineSlots<MenuItemSlots>();
const props = withDefaults(defineProps<MenuItemProps>(), {
  to: undefined,
  icon: undefined,
  label: undefined,
  disabled: false,
});

/**
 * Emits the click event with the key of the menu item which was clicked. This only triggers if the menu item is
 * a button.
 */
const click = (): void => {
  if (props.to) return;
  emit("click", props.id);
};

/**
 * The classes which are applied to the menu item.
 */
const menuItemClasses = computed(
  (): Record<string, boolean> => ({
    "block w-full p-2 text-left transition-colors select-none": true,
    "first:rounded-t-md last:rounded-b-md": true,

    // Disabled
    "cursor-not-allowed opacity-50": props.disabled,
    "cursor-pointer hover:bg-gray-800": !props.disabled,
  }),
);
</script>

<template>
  <component :is="to ? 'NuxtLink' : 'button'" :to="to" :disabled="disabled" :class="menuItemClasses" @click="click()">
    <slot :label="label" :icon="icon">
      <div class="flex items-center gap-x-2">
        <Icon v-if="icon" :icon="icon" />
        <span>{{ label }}</span>
      </div>
    </slot>
  </component>
</template>
