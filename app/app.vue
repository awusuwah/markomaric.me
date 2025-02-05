<script setup lang="ts">
import Card from "~/components/card/Card.vue";
import Button from "~/components/button/Button.vue";
import IconButton from "~/components/button/IconButton.vue";
</script>

<template>
  <div class="p-4">
    <Card title="Buttons" class="space-y-4">
      <section class="flex gap-x-4">
        <Button label="Primary" variant="primary" />
        <Button label="Primary (prefix icon)" variant="primary" prefix-icon="firefox-browser-line" />
        <Button label="Primary (disabled)" variant="primary" disabled />
      </section>

      <section class="flex gap-x-4">
        <Button label="Secondary" variant="secondary" />
        <Button label="Secondary (prefix icon)" variant="secondary" prefix-icon="firefox-browser-line" />
        <Button label="Secondary (disabled)" variant="secondary" disabled />
      </section>

      <section class="flex gap-x-4">
        <IconButton icon="firefox-browser-line" variant="primary" />
        <IconButton icon="firefox-browser-line" variant="secondary" />
      </section>
    </Card>
  </div>
</template>
