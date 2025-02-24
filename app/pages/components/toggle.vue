<script setup lang="ts">
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Toggle from "@/components/inputs/checkbox/Toggle.vue";
import { componentCheckbox } from "@/data/components";

// Controls
import RadiobuttonGroup from "@/components/inputs/radiobutton/RadiobuttonGroup.vue";
import Text from "@/components/inputs/text/Text.vue";

// Control state
const toggleModel = ref<boolean>(true);
const toggleLabel = ref<string>("Toggle");
const toggleVariant = ref<"default" | "success" | "danger" | "warning" | "info">("default");
const toggleDisabled = ref<boolean>(false);

const showcase = ref<InstanceType<typeof ComponentShowcase>>();
</script>

<template>
  <ComponentShowcase ref="showcase" title="Toggle" description="Toggles are used to select one or more options from a list. They have different variants and disabled states." component="toggle">
    <section class="flex gap-x-4">
      <Toggle v-model="toggleModel" label="Default" />
      <Toggle v-model="toggleModel" label="Default" disabled />
    </section>

    <section class="flex gap-x-4">
      <Toggle v-model="toggleModel" label="Success" variant="success" />
      <Toggle v-model="toggleModel" label="Success" variant="success" disabled />
    </section>

    <section class="flex gap-x-4">
      <Toggle v-model="toggleModel" label="Danger" variant="danger" />
      <Toggle v-model="toggleModel" label="Danger" variant="danger" disabled />
    </section>

    <section class="flex gap-x-4">
      <Toggle v-model="toggleModel" label="Warning" variant="warning" />
      <Toggle v-model="toggleModel" label="Warning" variant="warning" disabled />
    </section>

    <section class="flex gap-x-4">
      <Toggle v-model="toggleModel" label="Info" variant="info" />
      <Toggle v-model="toggleModel" label="Info" variant="info" disabled />
    </section>

    <template #single>
      <Toggle v-model="toggleModel" :label="toggleLabel" :variant="toggleVariant" :disabled="toggleDisabled" />
    </template>

    <template #controls="{ disabled }">
      <Text v-model="toggleLabel" label="Label" :disabled="disabled" />
      <RadiobuttonGroup v-model="toggleVariant" label="Variant" :options="componentCheckbox.variants" :disabled="disabled" group="toggle-variant" inline />
      <Toggle v-model="toggleDisabled" label="Disabled" :disabled="disabled" />
    </template>
  </ComponentShowcase>
</template>
