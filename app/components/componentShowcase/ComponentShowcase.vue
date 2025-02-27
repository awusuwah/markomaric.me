<script setup lang="ts">
import Button from "@/components/button/Button.vue";
import Card from "@/components/card/Card.vue";
import type { ComponentShowcaseProps, ComponentShowcaseSlots, Pane } from "@/@types/component-showcase.d";

const slots = defineSlots<ComponentShowcaseSlots>();
const props = withDefaults(defineProps<ComponentShowcaseProps>(), {
  description: undefined,
});

const openPane = ref<Pane>("all");

/**
 * Switch the current pane to the provided pane.
 *
 * @param { Pane } pane - The pane to switch to.
 */
const switchPane = (pane: Pane): void => {
  openPane.value = pane;

  if (!props.component) return;
  localStorage.setItem(`component-showcase-${props.component}`, pane);
};

/**
 * Determine the classes for the pane selection buttons based on the current pane.
 */
const paneButtonClasses = (pane: Pane): Record<string, boolean> => ({
  "text-sm font-medium cursor-pointer": true,
  "text-gray-500": openPane.value !== pane,
  "text-acc underline underline-offset-2": openPane.value === pane,

  "disabled:italic disabled:opacity-50": true,
});

onMounted(() => {
  if (!props.component) return;
  const savedPane = localStorage.getItem(`component-showcase-${props.component}`);
  if (!savedPane) {
    // If no saved pane has been found, create it with the default setting
    localStorage.setItem(`component-showcase-${props.component}`, "all");
    return;
  }

  // If a saved pane has been found, switch to it
  openPane.value = savedPane as Pane;
});

defineExpose({
  openPane,
});
</script>

<template>
  <div class="flex h-[calc(100vh-2rem)] w-full flex-col gap-y-4">
    <Card :title="props.title">
      <slot name="description" :description="props.description">
        <p v-if="props.description">{{ props.description }}</p>
      </slot>
    </Card>

    <Card class="relative flex-1">
      <div class="flex h-full flex-col items-center justify-center gap-4">
        <slot v-if="openPane === 'all'" />
        <slot v-else-if="openPane === 'single'" name="single" />
        <slot v-else-if="openPane === 'docs'" name="docs" />
        <slot v-else-if="openPane === 'code'" name="code" />
      </div>

      <!-- Pane selection controls -->
      <div class="absolute top-3 left-3 flex flex-row gap-x-2">
        <button :class="paneButtonClasses('all')" @click="switchPane('all')">All</button>
        <button :class="paneButtonClasses('single')" @click="switchPane('single')">Single</button>
        <button :class="paneButtonClasses('docs')" @click="switchPane('docs')" disabled>Docs</button>
        <button :class="paneButtonClasses('code')" @click="switchPane('code')" disabled>Code</button>
      </div>
    </Card>

    <Card title="Controls">
      <div class="mt-4 flex flex-col gap-y-4">
        <slot name="controls" :disabled="openPane !== 'single'" />
      </div>
    </Card>
  </div>
</template>
