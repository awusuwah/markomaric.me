<script setup lang="ts">
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Radiobutton from "@/components/inputs/radiobutton/Radiobutton.vue";

const radioSelected = ref<string>("radio3");
const radioOptions = [
  { label: "Radio 1", value: "radio1", disabled: false },
  { label: "Radio 2", value: "radio2", disabled: false },
  { label: "Radio 3", value: "radio3", disabled: true },
];
</script>

<template>
  <ComponentShowcase
    title="Radiobutton"
    description="Radiobuttons are used to select one option from a list. They are often choosen when there are less than 5 options. They have different variants and disabled states."
  >
    <section class="flex gap-x-4">
      <Radiobutton v-for="option in radioOptions" v-model="radioSelected" :label="option.label" :value="option.value" :disabled="option.disabled" />
    </section>

    <section class="flex gap-x-4">
      <Radiobutton v-for="option in radioOptions" v-model="radioSelected" :label="option.label" :value="option.value" variant="success" :disabled="option.disabled" />
    </section>

    <section class="flex gap-x-4">
      <Radiobutton v-for="option in radioOptions" v-model="radioSelected" :label="option.label" :value="option.value" variant="danger" :disabled="option.disabled" />
    </section>

    <section class="flex gap-x-4">
      <Radiobutton v-for="option in radioOptions" v-model="radioSelected" :label="option.label" :value="option.value" variant="warning" :disabled="option.disabled" />
    </section>

    <section class="flex gap-x-4">
      <Radiobutton v-for="option in radioOptions" v-model="radioSelected" :label="option.label" :value="option.value" variant="info" :disabled="option.disabled" />
    </section>
  </ComponentShowcase>
</template>
