<script setup lang="ts">
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Checkbox from "@/components/inputs/checkbox/Checkbox.vue";

// Controls
import RadiobuttonGroup from "@/components/inputs/radiobutton/RadiobuttonGroup.vue";
import Text from "@/components/inputs/text/Text.vue";
import Toggle from "@/components/inputs/checkbox/Toggle.vue";
import { componentCheckbox } from "@/data/components";

const checkboxModel = ref<boolean>(true);
const checkboxLabel = ref<string>("Checkbox");
const checkboxVariant = ref<"default" | "success" | "danger" | "warning" | "info">("default");
const checkboxDisabled = ref<boolean>(false);

const showcase = ref<InstanceType<typeof ComponentShowcase>>();
const controlsDisabled = computed((): boolean => {
  const pane = showcase.value?.openPane ?? "all";
  return pane !== "single";
});
</script>

<template>
  <ComponentShowcase ref="showcase" title="Checkbox" description="Checkboxes are used to select one or more options from a list." component="checkbox">
    <section class="flex gap-x-4">
      <Checkbox v-model="checkboxModel" label="Default" />
      <Checkbox v-model="checkboxModel" label="Default" disabled />
    </section>

    <section class="flex gap-x-4">
      <Checkbox v-model="checkboxModel" label="Success" variant="success" />
      <Checkbox v-model="checkboxModel" label="Success" variant="success" disabled />
    </section>

    <section class="flex gap-x-4">
      <Checkbox v-model="checkboxModel" label="Danger" variant="danger" />
      <Checkbox v-model="checkboxModel" label="Danger" variant="danger" disabled />
    </section>

    <section class="flex gap-x-4">
      <Checkbox v-model="checkboxModel" label="Warning" variant="warning" />
      <Checkbox v-model="checkboxModel" label="Warning" variant="warning" disabled />
    </section>

    <section class="flex gap-x-4">
      <Checkbox v-model="checkboxModel" label="Info" variant="info" />
      <Checkbox v-model="checkboxModel" label="Info" variant="info" disabled />
    </section>

    <template #single>
      <Checkbox v-model="checkboxModel" :label="checkboxLabel" :variant="checkboxVariant" :disabled="checkboxDisabled" />
    </template>

    <template #controls>
      <Text v-model="checkboxLabel" label="Label" placeholder="I agree to the terms and conditions" :disabled="controlsDisabled" />
      <RadiobuttonGroup v-model="checkboxVariant" label="Variant" :options="componentCheckbox.variants" :disabled="controlsDisabled" group="checkbox-variant" inline />
      <Toggle v-model="checkboxDisabled" label="Disabled" :disabled="controlsDisabled" />
    </template>
  </ComponentShowcase>
</template>
