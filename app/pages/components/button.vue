<script setup lang="ts">
import Button from "@/components/button/Button.vue";
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";

// Controls
import RadiobuttonGroup from "@/components/inputs/radiobutton/RadiobuttonGroup.vue";
import Text from "@/components/inputs/text/Text.vue";
import Toggle from "@/components/inputs/checkbox/Toggle.vue";
import { componentButton } from "@/data/components";

const buttonLabel = ref<string>("Button");
const buttonIcon = ref<string>("");
const buttonVariant = ref<"primary" | "secondary" | "success" | "danger" | "warning" | "info">("primary");
const buttonType = ref<"button" | "submit" | "reset">("button");
const buttonSize = ref<"sm" | "md" | "lg">("md");
const buttonStartIcon = ref<string>("");
const buttonEndIcon = ref<string>("");
const buttonDisabled = ref<boolean>(false);
const buttonFullWidth = ref<boolean>(false);

const showcase = ref<InstanceType<typeof ComponentShowcase>>();
const controlsDisabled = computed((): boolean => {
  const pane = showcase.value?.openPane ?? "all";
  return pane !== "single";
});
</script>

<template>
  <ComponentShowcase ref="showcase" title="Button" description="Buttons are used to trigger actions in the application." component="button">
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

    <template #single>
      <Button
        :variant="buttonVariant"
        :label="buttonLabel"
        :icon="buttonIcon"
        :type="buttonType"
        :size="buttonSize"
        :start-icon="buttonStartIcon"
        :end-icon="buttonEndIcon"
        :disabled="buttonDisabled"
        :full-width="buttonFullWidth"
      />
    </template>

    <template #controls>
      <Text v-model="buttonLabel" label="Label" placeholder="Submit" :disabled="controlsDisabled" />
      <Text v-model="buttonIcon" label="Icon" placeholder="add-line" :disabled="controlsDisabled" />
      <RadiobuttonGroup v-model="buttonVariant" :options="componentButton.variants" :disabled="controlsDisabled" label="Variant" group="button-variant" inline />
      <RadiobuttonGroup v-model="buttonType" :options="componentButton.types" :disabled="controlsDisabled" label="Type" group="button-type" inline />
      <RadiobuttonGroup v-model="buttonSize" :options="componentButton.sizes" :disabled="controlsDisabled" label="Size" group="button-size" inline />
      <div class="flex gap-x-2">
        <Text v-model="buttonStartIcon" label="Start Icon" placeholder="mail-line" :disabled="controlsDisabled" class="flex-1" />
        <Text v-model="buttonEndIcon" label="End Icon" placeholder="main-send-line" :disabled="controlsDisabled" class="flex-1" />
      </div>
      <Toggle v-model="buttonDisabled" label="Disabled" :disabled="controlsDisabled" />
      <Toggle v-model="buttonFullWidth" label="Full Width" :disabled="controlsDisabled" />
    </template>
  </ComponentShowcase>
</template>
