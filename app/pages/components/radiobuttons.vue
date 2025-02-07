<script setup lang="ts">
import Card from "@/components/card/Card.vue";
import Radiobutton from "@/components/inputs/radiobutton/Radiobutton.vue";

const radioSelected = ref("radio3");
const radioOptions = [
  { label: "Radio 1", value: "radio1", disabled: false },
  { label: "Radio 2", value: "radio2", disabled: false },
  { label: "Radio 3", value: "radio3", disabled: true },
];
</script>

<template>
  <div class="flex h-full w-full flex-col gap-y-4">
    <Card title="Radiobuttons" class="space-y-4">
      <p>Radiobuttons are used to select one option from a list. They are often choosen when there are less than 5 options. They have different variants and disabled states.</p>
    </Card>

    <Card class="flex-1">
      <div class="flex h-full flex-col items-center justify-center gap-4">
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
      </div>
    </Card>

    <Card title="Controls" class="space-y-4"></Card>
  </div>
</template>
