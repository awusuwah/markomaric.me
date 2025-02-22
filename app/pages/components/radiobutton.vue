<script setup lang="ts">
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Radiobutton from "@/components/inputs/radiobutton/Radiobutton.vue";

// Controls
import RadiobuttonGroup from "@/components/inputs/radiobutton/RadiobuttonGroup.vue";
import Text from "@/components/inputs/text/Text.vue";
import Toggle from "@/components/inputs/checkbox/Toggle.vue";
import { componentRadiobutton } from "@/data/components";

const radioModel = ref<string>("radio3");
const radioLabel = ref<string>("Radiobutton");
const radioVariant = ref<"default" | "success" | "danger" | "warning" | "info">("default");
const radioDisabled = ref<boolean>(false);

const showcase = ref<InstanceType<typeof ComponentShowcase>>();
const controlsDisabled = computed((): boolean => {
  const pane = showcase.value?.openPane ?? "all";
  return pane !== "single";
});
</script>

<template>
  <ComponentShowcase
    ref="showcase"
    title="Radiobutton"
    description="Radiobuttons are used to select one option from a list. They are often choosen when there are less than 5 options. They have different variants and disabled states."
    component="radiobutton"
  >
    <section class="flex gap-x-4">
      <Radiobutton v-for="option in componentRadiobutton.options" v-model="radioModel" :label="option.label" :value="option.value" :disabled="option.disabled" />
    </section>

    <section class="flex gap-x-4">
      <Radiobutton v-for="option in componentRadiobutton.options" v-model="radioModel" :label="option.label" :value="option.value" variant="success" :disabled="option.disabled" />
    </section>

    <section class="flex gap-x-4">
      <Radiobutton v-for="option in componentRadiobutton.options" v-model="radioModel" :label="option.label" :value="option.value" variant="danger" :disabled="option.disabled" />
    </section>

    <section class="flex gap-x-4">
      <Radiobutton v-for="option in componentRadiobutton.options" v-model="radioModel" :label="option.label" :value="option.value" variant="warning" :disabled="option.disabled" />
    </section>

    <section class="flex gap-x-4">
      <Radiobutton v-for="option in componentRadiobutton.options" v-model="radioModel" :label="option.label" :value="option.value" variant="info" :disabled="option.disabled" />
    </section>

    <template #single>
      <Radiobutton v-model="radioModel" :label="radioLabel" :variant="radioVariant" :disabled="radioDisabled" />
    </template>

    <template #controls>
      <Text v-model="radioLabel" label="Label" placeholder="Mister" :disabled="controlsDisabled" />
      <RadiobuttonGroup v-model="radioVariant" label="Variant" :options="componentRadiobutton.variants" :disabled="controlsDisabled" group="radio-variant" inline />
      <Toggle v-model="radioDisabled" label="Disabled" :disabled="controlsDisabled" />
    </template>
  </ComponentShowcase>
</template>
