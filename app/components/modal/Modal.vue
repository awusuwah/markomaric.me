<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import type { ModalProps, ModalSlots } from "@/@types/modal";

const slots = defineSlots<ModalSlots>();
const props = withDefaults(defineProps<ModalProps>(), {
  title: undefined,
  variant: "default",
});

const dialog = ref<HTMLDialogElement>();
const isOpen = ref(false);

/**
 * Exposed function to open the modal.
 */
const open = (): void => {
  dialog.value?.showModal();
  // Small delay to ensure the dialog is in the DOM before animating
  setTimeout(() => {
    isOpen.value = true;
  }, 50);
};

/**
 * Exposed function to close the modal.
 */
const close = (): void => {
  isOpen.value = false;
  // Wait for the animation to complete before actually closing
  setTimeout(() => {
    dialog.value?.close();
  }, 200);
};

/**
 * The classes which are applied to the dialog element.
 */
const dialogClasses = computed(
  (): Record<string, boolean> => ({
    "place-self-center bg-gray-800 text-white border-2 rounded-md w-[550px]": true,

    // Variants
    "border-gray-700": props.variant === "default",
    "border-suc": props.variant === "success",
    "border-dng": props.variant === "danger",
    "border-war": props.variant === "warning",
    "border-inf": props.variant === "info",

    // Animation classes
    "transition-all duration-200 ease-out": true,
    "opacity-0 translate-y-4": !isOpen.value,
    "opacity-100 translate-y-0": isOpen.value,

    // Backdrop base styles
    "backdrop:backdrop-blur-sm backdrop:transition-opacity backdrop:duration-300 backdrop:ease-out": true,
    "backdrop:opacity-0": !isOpen.value,
    "backdrop:opacity-100": isOpen.value,

    // Backdrop variant gradients
    "backdrop:bg-[radial-gradient(circle_at_center,rgba(31,41,55,0.15)_0%,rgba(31,41,55,0.1)_45%,rgba(17,24,39,0.8)_75%,rgba(17,24,39,0.95)_100%)]": props.variant === "default",
    "backdrop:bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.15)_0%,rgba(22,163,74,0.1)_45%,rgba(17,24,39,0.8)_75%,rgba(17,24,39,0.95)_100%)]": props.variant === "success",
    "backdrop:bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15)_0%,rgba(220,38,38,0.1)_45%,rgba(17,24,39,0.8)_75%,rgba(17,24,39,0.95)_100%)]": props.variant === "danger",
    "backdrop:bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.15)_0%,rgba(234,179,8,0.1)_45%,rgba(17,24,39,0.8)_75%,rgba(17,24,39,0.95)_100%)]": props.variant === "warning",
    "backdrop:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,rgba(59,130,246,0.1)_45%,rgba(17,24,39,0.8)_75%,rgba(17,24,39,0.95)_100%)]": props.variant === "info",
  }),
);

/**
 * The classes which are applied to the header of the modal.
 */
const headerClasses = computed(
  (): Record<string, boolean> => ({
    "relative grid place-items-center py-3 border-b border-gray-700": true,
  }),
);

/**
 * The classes which are applied to the footer of the modal.
 */
const footerClasses = computed(
  (): Record<string, boolean> => ({
    "flex justify-end gap-x-2 p-3 border-t border-gray-700": true,
  }),
);

defineExpose({
  openModal: open,
  closeModal: close,
});
</script>

<template>
  <dialog ref="dialog" :class="dialogClasses">
    <slot name="header" :title="title">
      <header :class="headerClasses">
        <h3 v-if="title">{{ title }}</h3>
        <button class="absolute top-4 right-4 cursor-pointer rounded-md" @click="close">
          <Icon icon="close-line" />
        </button>
      </header>
    </slot>

    <main class="flex-1 p-3">
      <slot name="default"></slot>
    </main>

    <slot name="footer">
      <footer :class="footerClasses">
        <Button @click="close">Close</Button>
      </footer>
    </slot>
  </dialog>
</template>
