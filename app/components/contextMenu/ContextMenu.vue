<script setup lang="ts">
import Menu from "@/components/menu/Menu.vue";
import MenuItem from "@/components/menu/MenuItem.vue";
import type { ContextMenuProps, ContextMenuEmits } from "@/@types/context-menu";

const emit = defineEmits<ContextMenuEmits>();
const props = withDefaults(defineProps<ContextMenuProps>(), {
  position: "top",
  offset: 8,
  icon: undefined,
  label: "Context Menu",
  options: undefined,
});

const menuRef = ref<InstanceType<typeof Menu>>();

/**
 * Handle when a menu item is clicked. Item's with a link will not trigger this event.
 *
 * @param { string } id - The id of the menu item which was clicked.
 */
const selectItem = (id: string): void => {
  menuRef.value?.closeMenu();
  emit("select", id);
};
</script>

<template>
  <Menu ref="menuRef" :position="position" :offset="offset" :icon="icon" :label="label">
    <template #wrapper>
      <div class="divide-y divide-gray-700 rounded-md border border-gray-700 bg-gray-900 text-white">
        <slot name="header" />
        <MenuItem v-for="option in options" :id="option.id" :to="option.to" :icon="option.icon" :label="option.label" :disabled="option.disabled" @click="selectItem" />
        <slot name="footer" />
      </div>
    </template>
  </Menu>
</template>
