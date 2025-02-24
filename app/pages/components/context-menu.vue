<script setup lang="ts">
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import ContextMenu from "@/components/contextMenu/ContextMenu.vue";

// Controls
import RadiobuttonGroup from "@/components/inputs/radiobutton/RadiobuttonGroup.vue";
import Text from "@/components/inputs/text/Text.vue";
import { componentContextMenu } from "@/data/components";

// Control state
const contextMenuPosition = ref<"top" | "bottom" | "left" | "right">("top");
const contextMenuOffset = ref<string>("8");
const contextMenuLabel = ref<string>("Context Menu");
const contextMenuIcon = ref<string>("menu-unfold-4-line");

const showcase = ref<InstanceType<typeof ComponentShowcase>>();
const controlsDisabled = computed((): boolean => {
  const pane = showcase.value?.openPane ?? "all";
  return pane !== "single";
});

/**
 * Handle when a menu item is selected.
 */
const selected = (id: string): void => {
  console.log("[Context Menu Story] Item selected: ", id);
};
</script>

<template>
  <ComponentShowcase ref="showcase" title="Context Menu" component="context-menu">
    <section class="flex gap-x-4">
      <ContextMenu :options="componentContextMenu.options" label="Default" @select="selected" />
      <ContextMenu :options="componentContextMenu.options" label="Custom Header & Footer" position="bottom" @select="selected">
        <template #header>
          <div class="flex flex-col p-2">
            <small class="text-xs text-gray-400">Logged in as</small>
            <span class="font-medium">Marko Marić</span>
          </div>
        </template>

        <template #footer>
          <div class="flex flex-row justify-between p-2">
            <div class="h-5 w-5 rounded-full bg-red-500" />
            <div class="h-5 w-5 rounded-full bg-yellow-500" />
            <div class="h-5 w-5 rounded-full bg-green-500" />
            <div class="h-5 w-5 rounded-full bg-blue-500" />
            <div class="h-5 w-5 rounded-full bg-purple-500" />
            <div class="h-5 w-5 rounded-full bg-pink-500" />
          </div>
        </template>
      </ContextMenu>
    </section>

    <template #single>
      <ContextMenu :options="componentContextMenu.options" :position="contextMenuPosition" :offset="parseInt(contextMenuOffset)" :label="contextMenuLabel" :icon="contextMenuIcon" />
    </template>

    <template #controls>
      <RadiobuttonGroup v-model="contextMenuPosition" label="Position" :options="componentContextMenu.positions" :disabled="controlsDisabled" group="context-menu-position" inline />
      <Text v-model="contextMenuOffset" label="Offset" :disabled="controlsDisabled" />
      <div class="flex flex-row gap-x-2">
        <Text v-model="contextMenuLabel" label="Label" :disabled="controlsDisabled" class="flex-1" />
        <Text v-model="contextMenuIcon" label="Icon" :disabled="controlsDisabled" class="flex-1" />
      </div>
    </template>
  </ComponentShowcase>
</template>
