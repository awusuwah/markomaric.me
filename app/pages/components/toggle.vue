<script setup lang="ts">
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Toggle from "@/components/inputs/checkbox/Toggle.vue";

const checked = ref<boolean>(true);
</script>

<template>
  <ComponentShowcase title="Toggle" description="Toggles are used to select one or more options from a list. They have different variants and disabled states.">
    <section class="flex gap-x-4">
      <Toggle v-model="checked" label="Default" />
      <Toggle v-model="checked" label="Default" disabled />
    </section>

    <section class="flex gap-x-4">
      <Toggle v-model="checked" label="Success" variant="success" />
      <Toggle v-model="checked" label="Success" variant="success" disabled />
    </section>

    <section class="flex gap-x-4">
      <Toggle v-model="checked" label="Danger" variant="danger" />
      <Toggle v-model="checked" label="Danger" variant="danger" disabled />
    </section>

    <section class="flex gap-x-4">
      <Toggle v-model="checked" label="Warning" variant="warning" />
      <Toggle v-model="checked" label="Warning" variant="warning" disabled />
    </section>

    <section class="flex gap-x-4">
      <Toggle v-model="checked" label="Info" variant="info" />
      <Toggle v-model="checked" label="Info" variant="info" disabled />
    </section>
  </ComponentShowcase>
</template>
