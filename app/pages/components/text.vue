<script setup lang="ts">
import Card from "@/components/card/Card.vue";
import Text from "@/components/inputs/text/Text.vue";

const value = ref("");
</script>

<template>
  <div class="flex h-full w-full flex-col gap-y-4">
    <Card title="Text"></Card>

    <Card class="flex-1">
      <div class="flex h-full flex-col items-center justify-center gap-4">
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
      </div>
    </Card>
  </div>
</template>
