<script setup lang="ts">
import Card from "@/components/card/Card.vue";
import Icon from "@/components/icon/Icon.vue";
</script>

<template>
  <div class="flex h-full w-full flex-col gap-y-4">
    <Card title="Icon" class="space-y-4">
      <p>Icons are loaded from the Remix Icon library. The icon name to use can be copied straight from the library.</p>
    </Card>

    <Card class="flex-1">
      <div class="flex h-full flex-col items-center justify-center gap-4">
        <section class="flex items-center gap-x-4">
          <Icon icon="firefox-browser-line" size="xl" />
          <Icon icon="firefox-browser-line" size="lg" />
          <Icon icon="firefox-browser-line" size="md" />
          <Icon icon="firefox-browser-line" size="sm" />
          <Icon icon="firefox-browser-line" size="xs" />
        </section>
      </div>
    </Card>

    <Card title="Controls" class="space-y-4"></Card>
  </div>
</template>
