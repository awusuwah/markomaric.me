<script setup lang="ts">
import Button from "@/components/button/Button.vue";
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Menu from "@/components/menu/Menu.vue";

// Controls
import RadiobuttonGroup from "@/components/inputs/radiobutton/RadiobuttonGroup.vue";
import Toggle from "@/components/inputs/checkbox/Toggle.vue";
import Text from "@/components/inputs/text/Text.vue";
import { componentMenu } from "@/data/components";

// Control state
const menuPosition = ref<"top" | "bottom" | "left" | "right">("top");
const menuOffset = ref<string>("8");
const menuLabel = ref<string>("Menu");
const menuIcon = ref<string>("menu-unfold-4-line");

const showcase = ref<InstanceType<typeof ComponentShowcase>>();
const controlsDisabled = computed((): boolean => {
  const pane = showcase.value?.openPane ?? "all";
  return pane !== "single";
});
</script>

<template>
  <ComponentShowcase ref="showcase" title="Menu" component="menu">
    <section class="flex gap-x-4">
      <Menu position="top" icon="menu-unfold-4-line">This is a very basic menu. It just contains some text and is limited to 200px wide.</Menu>
      <Menu position="bottom" label="Bottom Menu">A basic menu with a label button.</Menu>
      <Menu position="right">
        <template #trigger="{ classes, popovertarget }">
          <Button :class="classes" :popovertarget="popovertarget" label="Right Menu with custom button" />
        </template>
      </Menu>
    </section>

    <template #single>
      <Menu :position="menuPosition" :offset="parseInt(menuOffset)" :label="menuLabel" :icon="menuIcon">Some very new content</Menu>
    </template>

    <template #controls>
      <RadiobuttonGroup v-model="menuPosition" label="Position" :options="componentMenu.positions" :disabled="controlsDisabled" group="menu-position" inline />
      <Text v-model="menuOffset" label="Offset" :disabled="controlsDisabled" />
      <Text v-model="menuLabel" label="Label" :disabled="controlsDisabled" />
      <Text v-model="menuIcon" label="Icon" :disabled="controlsDisabled" />
    </template>
  </ComponentShowcase>
</template>
