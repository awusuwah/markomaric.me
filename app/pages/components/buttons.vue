<script setup lang="ts">
import Button from "@/components/button/Button.vue";
import Card from "@/components/card/Card.vue";

const propLabel = ref("Button");
const propIcon = ref("firefox-browser-line");
const propVariant = ref("primary");
const propType = ref("button");
const propSize = ref("md");
const propPrefixIcon = ref("firefox-browser-line");
const propSuffixIcon = ref("firefox-browser-line");
const propDisabled = ref(false);
const propFullWidth = ref(false);
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

    <Card title="Controls" class="space-y-4">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    </Card>
  </div>
</template>
