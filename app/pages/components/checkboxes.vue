<script setup lang="ts">
import Card from "@/components/card/Card.vue";
import Checkbox from "@/components/inputs/checkbox/Checkbox.vue";

const checked = ref(true);
</script>

<template>
  <div class="flex h-full w-full flex-col gap-y-4">
    <Card title="Checkboxes" class="space-y-4">
      <p>Checkboxes are used to select one or more options from a list. They have different variants and disabled states.</p>
    </Card>

    <Card class="flex-1">
      <div class="flex h-full flex-col items-center justify-center gap-4">
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
      </div>
    </Card>

    <Card title="Controls" class="space-y-4"></Card>
  </div>
</template>
