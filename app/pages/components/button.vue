<script setup lang="ts">
import Button from "@/components/button/Button.vue";
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
</script>

<template>
  <ComponentShowcase title="Button" description="Buttons are used to trigger actions in the application.">
    <section class="flex gap-x-4">
      <Button variant="primary" label="Primary" />
      <Button variant="primary" label="Primary (prefix icon)" start-icon="firefox-browser-line" />
      <Button variant="primary" label="Primary (disabled)" disabled />
      <Button variant="primary" icon="firefox-browser-line" />
      <Button icon="firefox-browser-line" variant="primary" disabled />
    </section>

    <section class="flex gap-x-4">
      <Button variant="secondary" label="Secondary" />
      <Button variant="secondary" label="Secondary (prefix icon)" start-icon="firefox-browser-line" />
      <Button variant="secondary" label="Secondary (disabled)" disabled />
      <Button variant="secondary" icon="firefox-browser-line" />
      <Button variant="secondary" icon="firefox-browser-line" disabled />
    </section>

    <section class="flex gap-x-4">
      <Button variant="success" label="Success" />
      <Button variant="success" label="Success (prefix icon)" start-icon="firefox-browser-line" />
      <Button variant="success" label="Success (disabled)" disabled />
      <Button variant="success" icon="firefox-browser-line" />
      <Button variant="success" icon="firefox-browser-line" disabled />
    </section>

    <section class="flex gap-x-4">
      <Button variant="danger" label="Danger" />
      <Button variant="danger" label="Danger (prefix icon)" start-icon="firefox-browser-line" />
      <Button variant="danger" label="Danger (disabled)" disabled />
      <Button variant="danger" icon="firefox-browser-line" />
      <Button variant="danger" icon="firefox-browser-line" disabled />
    </section>

    <section class="flex gap-x-4">
      <Button variant="warning" label="Warning" />
      <Button variant="warning" label="Warning (prefix icon)" start-icon="firefox-browser-line" />
      <Button variant="warning" label="Warning (disabled)" disabled />
      <Button variant="warning" icon="firefox-browser-line" />
      <Button variant="warning" icon="firefox-browser-line" disabled />
    </section>

    <section class="flex gap-x-4">
      <Button variant="info" label="Info" />
      <Button variant="info" label="Info (prefix icon)" start-icon="firefox-browser-line" />
      <Button variant="info" label="Info (disabled)" disabled />
      <Button variant="info" icon="firefox-browser-line" />
      <Button variant="info" icon="firefox-browser-line" disabled />
    </section>
  </ComponentShowcase>
</template>
