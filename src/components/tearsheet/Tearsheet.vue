<script setup lang="ts">
import { ref, watch } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

import Button from "@/components/button/Button.vue";

const props = withDefaults(defineProps<TearsheetProps>(), {
  modelValue: false,
  closeTitle: "Are you sure?",
  closeText: "All changes you have made up until this point will be lost and cannot be recovered!",
  submitLabel: "Submit",
  noCloseWarning: false,
});

const emit = defineEmits<TearsheetEmits>();
const slots = defineSlots<TearsheetSlots>();

const loading = ref(false);
const closing = ref(false);

/**
 * Open the tearsheet. This will move the page to the background and open the tearsheet infront of it.
 */
const open = (): void => {
  const appContainer = document.querySelector("#app") ?? document.getElementById("app");
  appContainer?.classList.add("sm:scale-[0.97]", "sm:opacity-75", "sm:rounded-lg");
};

/**
 * Close the tearsheet. This will move the page back up front and close the tearsheet infront of it.
 */
const close = (): void => {
  const appContainer = document.querySelector("#app") ?? document.getElementById("app");
  appContainer?.classList.remove("sm:scale-[0.97]", "sm:opacity-75", "sm:rounded-lg");

  closing.value = false;
  emit("update:modelValue", false);
};

/**
 * Attempt to close the tearsheet. If not prevented by the `noCloseWarning` prop, the close warning
 * will be displayed.
 */
const attemptClose = (): void => {
  if (props.noCloseWarning) {
    close();
    return;
  }

  closing.value = true;
};

/**
 * Submit the tearsheet. This will emit the `submit` event so the parent component can handle the
 * submission. The button which triggers the submission is automatically set to it's `loading` state.
 */
const submit = (): void => {
  loading.value = true;
  emit("submit");
};

/**
 * Watch for changes in the model value. This will trigger the open / close mechanism of the tearsheet.
 */
watch(
  () => props.modelValue,
  (value) => {
    if (value) open();
    else close();
  },
);

type TearsheetProps = {
  /**
   * Determines if the tearsheet is open or not.
   */
  modelValue: boolean;

  /**
   * The title of the tearsheet. This is displayed in the header.
   */
  title?: string;

  /**
   * The title in the close warning of the tearsheet.
   */
  closeTitle?: string;

  /**
   * The text in the close warning of the tearsheet.
   */
  closeText?: string;

  /**
   * The label for the submit button in the footer of the tearsheet.
   */
  submitLabel?: string;

  /**
   * Prevent the close warning from being displayed when the tearsheet is being closed.
   */
  noCloseWarning?: boolean;
};

type TearsheetEmits = {
  /**
   * The tearsheet is being closed.
   */
  (e: "update:modelValue", value: boolean): void;

  /**
   * The tearsheet has been submitted. This will emit the `submit` event so the parent component
   * can handle the submission of the tearsheet. The button which triggers the submission is automatically
   * been set to the `loading` state.
   */
  (e: "submit"): void;
};

type TearsheetSlots = {
  /**
   * Used to style and layout the header of the tearsheet.
   */
  header(): any;

  /**
   * Used to style and layout the footer of the tearsheet.
   */
  footer(): any;

  /**
   * Used to style and layout the close warning of the tearsheet.
   */
  closeWarning(): any;
};
</script>

<template>
  <Teleport to="body">
    <Transition name="tearsheet">
      <div v-if="modelValue" class="absolute inset-0 sm:top-8 xl:left-3 xl:right-3 sm:bottom-0 sm:rounded-t-lg bg-gray-100 overflow-hidden shadow-lg">
        <div class="relative w-full h-full flex flex-col justify-between">
          <Transition name="close-blur">
            <div v-if="closing" class="absolute inset-0 bg-white/30 backdrop-blur-sm z-50 flex items-center justify-center">
              <slot name="closeWarning" :close="close" :loading="loading">
                <div class="w-full sm:w-1/3 lg:w-1/4 px-6 sm:px-0 flex flex-col items-center justify-center text-center">
                  <h1 class="text-2xl font-bold">{{ closeTitle }}</h1>
                  <h2 class="text-lg">{{ closeText }}</h2>

                  <div class="flex flex-col sm:flex-row w-full sm:w-auto gap-2 mt-4">
                    <Button variant="neutral" label="Close" @click="closing = false" />
                    <Button variant="primary" label="Confirm" @click="close" />
                  </div>
                </div>
              </slot>
            </div>
          </Transition>

          <slot name="header" :attempt-close="attemptClose" :close="close" :loading="loading">
            <header class="h-14 flex items-center justify-center border border-b-gray-300 relative">
              <h1 class="text-xl font-semibold text-gray-700">{{ title }}</h1>

              <button class="absolute top-2.5 right-2.5 text-gray-600 hover:text-gray-700" @click="attemptClose">
                <XMarkIcon class="w-8 h-8" />
              </button>
            </header>
          </slot>

          <slot name="footer" :attempt-close="attemptClose" :close="close" :loading="loading">
            <footer class="h-14 px-4 py-2 border border-t-gray-300 flex items-center justify-end">
              <Button variant="primary" :label="submitLabel" :state="loading ? 'loading' : 'idle'" @click="submit" />
            </footer>
          </slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.tearsheet-enter-active,
.tearsheet-leave-active {
  transition: all 0.5s ease;
}

.tearsheet-enter-from,
.tearsheet-leave-to {
  transform: translateY(100vh);
}

.close-blur-enter-active {
  transition: all 0.5s ease;
}
.close-blur-leave-active {
  transition: all 0.2s ease;
}

.close-blur-enter-from,
.close-blur-leave-to {
  opacity: 0;
}
</style>
