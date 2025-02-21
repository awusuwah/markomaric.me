<script setup lang="ts">
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Text from "@/components/inputs/text/Text.vue";

const value = ref<string>("");
</script>

<template>
  <ComponentShowcase title="Text" description="Text is used to display text in the application.">
    <section class="flex gap-x-4">
      <Text v-model="value" label="Default" />
      <Text v-model="value" label="Default" prefix-icon="fire-line" suffix-icon="fire-line" />
      <Text v-model="value" label="Default" disabled />
      <Text v-model="value" label="Default" disabled prefix-icon="fire-line" suffix-icon="fire-line" />
    </section>

    <section class="flex gap-x-4">
      <Text v-model="value" label="Success" variant="success" />
      <Text v-model="value" label="Success" variant="success" prefix-icon="fire-line" suffix-icon="fire-line" />
      <Text v-model="value" label="Success" variant="success" disabled />
      <Text v-model="value" label="Success" variant="success" disabled prefix-icon="fire-line" suffix-icon="fire-line" />
    </section>

    <section class="flex gap-x-4">
      <Text v-model="value" label="Danger" variant="danger" />
      <Text v-model="value" label="Danger" variant="danger" prefix-icon="fire-line" suffix-icon="fire-line" />
      <Text v-model="value" label="Danger" variant="danger" disabled />
      <Text v-model="value" label="Danger" variant="danger" disabled prefix-icon="fire-line" suffix-icon="fire-line" />
    </section>

    <section class="flex gap-x-4">
      <Text v-model="value" label="Warning" variant="warning" />
      <Text v-model="value" label="Warning" variant="warning" prefix-icon="fire-line" suffix-icon="fire-line" />
      <Text v-model="value" label="Warning" variant="warning" disabled />
      <Text v-model="value" label="Warning" variant="warning" disabled prefix-icon="fire-line" suffix-icon="fire-line" />
    </section>

    <section class="flex gap-x-4">
      <Text v-model="value" label="Info" variant="info" />
      <Text v-model="value" label="Info" variant="info" prefix-icon="fire-line" suffix-icon="fire-line" />
      <Text v-model="value" label="Info" variant="info" disabled />
      <Text v-model="value" label="Info" variant="info" disabled prefix-icon="fire-line" suffix-icon="fire-line" />
    </section>
  </ComponentShowcase>
</template>
