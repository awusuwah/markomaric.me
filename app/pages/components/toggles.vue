<script setup lang="ts">
import Card from "@/components/card/Card.vue";
import Toggle from "@/components/inputs/checkbox/Toggle.vue";

const checked = ref(true);
</script>

<template>
  <div class="flex h-full w-full flex-col gap-y-4">
    <Card title="Toggles" class="space-y-4">
      <p>Toggles are used to select one or more options from a list. They have different variants and disabled states.</p>
    </Card>

    <Card class="flex-1">
      <div class="flex h-full flex-col items-center justify-center gap-4">
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
      </div>
    </Card>

    <Card title="Controls" class="space-y-4"></Card>
  </div>
</template>
