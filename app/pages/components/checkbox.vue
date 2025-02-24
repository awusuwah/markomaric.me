<script setup lang="ts">
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Checkbox from "@/components/inputs/checkbox/Checkbox.vue";
import { componentCheckbox } from "@/data/components";

// Controls
import RadiobuttonGroup from "@/components/inputs/radiobutton/RadiobuttonGroup.vue";
import Text from "@/components/inputs/text/Text.vue";
import Toggle from "@/components/inputs/checkbox/Toggle.vue";

// Control state
const checkboxModel = ref<boolean>(true);
const checkboxLabel = ref<string>("Checkbox");
const checkboxVariant = ref<"default" | "success" | "danger" | "warning" | "info">("default");
const checkboxDisabled = ref<boolean>(false);

const showcase = ref<InstanceType<typeof ComponentShowcase>>();
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

    <template #controls="{ disabled }">
      <Text v-model="checkboxLabel" label="Label" placeholder="I agree to the terms and conditions" :disabled="disabled" />
      <RadiobuttonGroup v-model="checkboxVariant" label="Variant" :options="componentCheckbox.variants" :disabled="disabled" group="checkbox-variant" inline />
      <Toggle v-model="checkboxDisabled" label="Disabled" :disabled="disabled" />
    </template>
  </ComponentShowcase>
</template>
