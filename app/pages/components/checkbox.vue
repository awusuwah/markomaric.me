<script setup lang="ts">
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Checkbox from "@/components/inputs/checkbox/Checkbox.vue";

const checked = ref<boolean>(true);
</script>

<template>
  <ComponentShowcase title="Checkbox" description="Checkboxes are used to select one or more options from a list.">
    <section class="flex gap-x-4">
      <Checkbox v-model="checked" label="Default" />
      <Checkbox v-model="checked" label="Default" disabled />
    </section>

    <section class="flex gap-x-4">
      <Checkbox v-model="checked" label="Success" variant="success" />
      <Checkbox v-model="checked" label="Success" variant="success" disabled />
    </section>

    <section class="flex gap-x-4">
      <Checkbox v-model="checked" label="Danger" variant="danger" />
      <Checkbox v-model="checked" label="Danger" variant="danger" disabled />
    </section>

    <section class="flex gap-x-4">
      <Checkbox v-model="checked" label="Warning" variant="warning" />
      <Checkbox v-model="checked" label="Warning" variant="warning" disabled />
    </section>

    <section class="flex gap-x-4">
      <Checkbox v-model="checked" label="Info" variant="info" />
      <Checkbox v-model="checked" label="Info" variant="info" disabled />
    </section>
  </ComponentShowcase>
</template>
