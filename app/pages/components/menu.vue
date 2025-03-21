<script setup lang="ts">
import Button from "@/components/button/Button.vue";
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Menu from "@/components/menu/Menu.vue";
import { componentMenu } from "@/data/components";

// Controls
import RadiobuttonGroup from "@/components/inputs/radiobutton/RadiobuttonGroup.vue";
import Text from "@/components/inputs/text/Text.vue";

// Control state
const menuPosition = ref<"top" | "bottom" | "left" | "right">("top");
const menuOffset = ref<string>("8");
const menuLabel = ref<string>("Menu");
const menuIcon = ref<string>("menu-unfold-4-line");

const showcase = ref<InstanceType<typeof ComponentShowcase>>();
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
      <Menu :position="menuPosition" :offset="parseInt(menuOffset)" :label="menuLabel" :icon="menuIcon">
        <ul class="flex flex-col gap-y-1">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </Menu>
    </template>

    <template #controls="{ disabled }">
      <RadiobuttonGroup v-model="menuPosition" label="Position" :options="componentMenu.positions" :disabled="disabled" group="menu-position" inline />
      <Text v-model="menuOffset" label="Offset" :disabled="disabled" />
      <Text v-model="menuLabel" label="Label" :disabled="disabled" />
      <Text v-model="menuIcon" label="Icon" :disabled="disabled" />
    </template>
  </ComponentShowcase>
</template>
