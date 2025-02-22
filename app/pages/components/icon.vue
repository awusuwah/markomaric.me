<script setup lang="ts">
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Icon from "@/components/icon/Icon.vue";

// Controls
import RadiobuttonGroup from "@/components/inputs/radiobutton/RadiobuttonGroup.vue";
import Text from "@/components/inputs/text/Text.vue";
import { componentIcon } from "@/data/components";

const iconIcon = ref<string>("firefox-browser-line");
const iconSize = ref<"xs" | "sm" | "md" | "lg" | "xl">("xl");

const showcase = ref<InstanceType<typeof ComponentShowcase>>();
const controlsDisabled = computed((): boolean => {
  const pane = showcase.value?.openPane ?? "all";
  return pane !== "single";
});
</script>

<template>
  <ComponentShowcase ref="showcase" title="Icon" description="Icons are used to represent actions and objects in the application." component="icon">
    <section class="flex items-center gap-x-4">
      <Icon icon="firefox-browser-line" size="xl" />
      <Icon icon="firefox-browser-line" size="lg" />
      <Icon icon="firefox-browser-line" size="md" />
      <Icon icon="firefox-browser-line" size="sm" />
      <Icon icon="firefox-browser-line" size="xs" />
    </section>

    <template #single>
      <Icon :icon="iconIcon" :size="iconSize" />
    </template>

    <template #controls>
      <Text v-model="iconIcon" label="Icon" placeholder="firefox-browser-line" :disabled="controlsDisabled" />
      <RadiobuttonGroup v-model="iconSize" label="Size" :options="componentIcon.sizes" :disabled="controlsDisabled" group="icon-size" inline />
    </template>
  </ComponentShowcase>
</template>
