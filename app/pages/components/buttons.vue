<script setup lang="ts">
import Button from "@/components/button/Button.vue";
import Card from "@/components/card/Card.vue";
</script>

<template>
  <div class="flex h-full w-full flex-col gap-y-4">
    <Card title="Buttons" class="space-y-4">
      <p>Buttons are used to trigger actions in the application. They come in text and icon versions, have multiple sizes and variants.</p>
    </Card>

    <Card class="flex-1">
      <div class="flex h-full flex-col items-center justify-center gap-4">
        <section class="flex gap-x-4">
          <Button variant="primary" label="Primary" />
          <Button variant="primary" label="Primary (prefix icon)" prefix-icon="firefox-browser-line" />
          <Button variant="primary" label="Primary (disabled)" disabled />
          <Button variant="primary" icon="firefox-browser-line" />
          <Button icon="firefox-browser-line" variant="primary" disabled />
        </section>

        <section class="flex gap-x-4">
          <Button variant="secondary" label="Secondary" />
          <Button variant="secondary" label="Secondary (prefix icon)" prefix-icon="firefox-browser-line" />
          <Button variant="secondary" label="Secondary (disabled)" disabled />
          <Button variant="secondary" icon="firefox-browser-line" />
          <Button variant="secondary" icon="firefox-browser-line" disabled />
        </section>
      </div>
    </Card>

    <Card title="Controls" class="space-y-4"></Card>
  </div>
</template>
