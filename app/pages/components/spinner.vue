<script setup lang="ts">
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Spinner from "@/components/loading/Spinner.vue";

// Controls
import RadiobuttonGroup from "@/components/inputs/radiobutton/RadiobuttonGroup.vue";
import Toggle from "@/components/inputs/checkbox/Toggle.vue";
import { componentSpinner } from "@/data/components";

const spinnerVariant = ref<"primary" | "secondary" | "success" | "danger" | "warning" | "info">("primary");
const spinnerType = ref<"circle" | "bars" | "dots">("circle");
const spinnerSize = ref<"xs" | "sm" | "md" | "lg" | "xl">("md");
const spinnerContrast = ref<boolean>(false);

const showcase = ref<InstanceType<typeof ComponentShowcase>>();
const openPane = computed((): string => showcase.value?.openPane ?? "all");
</script>

<template>
  <ComponentShowcase ref="showcase" title="Spinner" description="Spinners are used to indicate that an action is in progress." component="spinner">
    <section class="flex gap-x-4">
      <Spinner type="circle" variant="primary" />
      <Spinner type="bars" variant="primary" />
      <Spinner type="dots" variant="primary" />

      <Spinner type="circle" variant="primary" contrast />
      <Spinner type="bars" variant="primary" contrast />
      <Spinner type="dots" variant="primary" contrast />
    </section>

    <section class="flex gap-x-4">
      <Spinner type="circle" variant="secondary" />
      <Spinner type="bars" variant="secondary" />
      <Spinner type="dots" variant="secondary" />

      <Spinner type="circle" variant="secondary" contrast />
      <Spinner type="bars" variant="secondary" contrast />
      <Spinner type="dots" variant="secondary" contrast />
    </section>

    <section class="flex gap-x-4">
      <Spinner type="circle" variant="success" />
      <Spinner type="bars" variant="success" />
      <Spinner type="dots" variant="success" />

      <Spinner type="circle" variant="success" contrast />
      <Spinner type="bars" variant="success" contrast />
      <Spinner type="dots" variant="success" contrast />
    </section>

    <section class="flex gap-x-4">
      <Spinner type="circle" variant="danger" />
      <Spinner type="bars" variant="danger" />
      <Spinner type="dots" variant="danger" />

      <Spinner type="circle" variant="danger" contrast />
      <Spinner type="bars" variant="danger" contrast />
      <Spinner type="dots" variant="danger" contrast />
    </section>

    <section class="flex gap-x-4">
      <Spinner type="circle" variant="warning" />
      <Spinner type="bars" variant="warning" />
      <Spinner type="dots" variant="warning" />

      <Spinner type="circle" variant="warning" contrast />
      <Spinner type="bars" variant="warning" contrast />
      <Spinner type="dots" variant="warning" contrast />
    </section>

    <section class="flex gap-x-4">
      <Spinner type="circle" variant="info" />
      <Spinner type="bars" variant="info" />
      <Spinner type="dots" variant="info" />

      <Spinner type="circle" variant="info" contrast />
      <Spinner type="bars" variant="info" contrast />
      <Spinner type="dots" variant="info" contrast />
    </section>

    <template #single>
      <Spinner :type="spinnerType" :variant="spinnerVariant" :size="spinnerSize" :contrast="spinnerContrast" />
    </template>

    <template #controls>
      <RadiobuttonGroup v-model="spinnerVariant" label="Variant" :options="componentSpinner.variants" :disabled="openPane !== 'single'" group="spinner-variant" inline />
      <RadiobuttonGroup v-model="spinnerType" label="Type" :options="componentSpinner.types" :disabled="openPane !== 'single'" group="spinner-type" inline />
      <RadiobuttonGroup v-model="spinnerSize" label="Size" :options="componentSpinner.sizes" :disabled="openPane !== 'single'" group="spinner-size" inline />
      <Toggle v-model="spinnerContrast" label="Contrast" :disabled="openPane !== 'single'" />
    </template>
  </ComponentShowcase>
</template>
