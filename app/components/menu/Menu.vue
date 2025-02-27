<script setup lang="ts">
import Button from "@/components/button/Button.vue";
import type { MenuProps } from "@/@types/menu";

const props = withDefaults(defineProps<MenuProps>(), {
  position: "top-start",
  offset: 8,
  icon: undefined,
  label: undefined,
  width: "auto",
});

const menuRef = ref<HTMLDivElement>();

/**
 * Generate a unique ID for this menu instance
 */
const menuKey = ref(`menu-${Math.random().toString(36).substring(2, 11)}`);

/**
 * The classes which are applied to the menu popover.
 */
const menuClasses = computed((): Record<string, boolean> => {
  return {
    "menu absolute inset-auto m-0 overflow-visible bg-transparent opacity-0 open:opacity-100": true,
  };
});

/**
 * The styles for the positioning of the menu based on the position prop.
 */
const menuPositionStyles = computed((): Record<string, string> => {
  switch (props.position) {
    case "top":
    case "top-start":
      return {
        bottom: "anchor(top)",
        left: "anchor(left)",
        "margin-block-end": `${props.offset}px`,
      };

    case "top-end":
      return {
        bottom: "anchor(top)",
        right: "anchor(right)",
        "margin-block-end": `${props.offset}px`,
      };

    case "top-center":
      return {
        bottom: "anchor(top)",
        "margin-block-end": `${props.offset}px`,
        "justify-self": "anchor-center",
      };

    case "bottom":
    case "bottom-start":
      return {
        top: "anchor(bottom)",
        left: "anchor(left)",
        "margin-block-start": `${props.offset}px`,
      };

    case "bottom-end":
      return {
        top: "anchor(bottom)",
        right: "anchor(right)",
        "margin-block-start": `${props.offset}px`,
      };

    case "bottom-center":
      return {
        top: "anchor(bottom)",
        "margin-block-start": `${props.offset}px`,
        "justify-self": "anchor-center",
      };

    case "left":
    case "left-start":
      return {
        right: "anchor(left)",
        top: "anchor(top)",
        "margin-inline-end": `${props.offset}px`,
      };

    case "left-end":
      return {
        right: "anchor(left)",
        bottom: "anchor(bottom)",
        "margin-inline-end": `${props.offset}px`,
      };

    case "left-center":
      return {
        right: "anchor(left)",
        "margin-inline-end": `${props.offset}px`,
        "align-self": "anchor-center",
      };

    case "right":
    case "right-start":
      return {
        left: "anchor(right)",
        top: "anchor(top)",
        "margin-inline-start": `${props.offset}px`,
      };

    case "right-end":
      return {
        left: "anchor(right)",
        bottom: "anchor(bottom)",
        "margin-inline-start": `${props.offset}px`,
      };

    case "right-center":
      return {
        left: "anchor(right)",
        "margin-inline-start": `${props.offset}px`,
        "align-self": "anchor-center",
      };
  }
});

/**
 * Exposed function to open the menu from the parent component.
 */
const open = (): void => {
  menuRef.value?.showPopover();
};

/**
 * Exposed function to close the menu from the parent component.
 */
const close = (): void => {
  menuRef.value?.hidePopover();
};

defineExpose({
  openMenu: open,
  closeMenu: close,
});
</script>

<template>
  <div>
    <slot name="trigger" :icon="icon" classes="trigger" :popovertarget="menuKey">
      <Button :icon="icon" :label="label" class="trigger" :popovertarget="menuKey" />
    </slot>

    <div ref="menuRef" :id="menuKey" :class="menuClasses" :style="menuPositionStyles" role="menu" popover>
      <slot name="wrapper">
        <div class="rounded-md border border-gray-700 bg-gray-900 px-2 py-3 text-white">
          <slot>
            <span>Content</span>
          </slot>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.trigger {
  anchor-name: var(--menu-anchor);
}

.menu {
  position-anchor: var(--menu-anchor);
}
</style>
