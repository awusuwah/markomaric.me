<script setup lang="ts">
import Button from "@/components/button/Button.vue";
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";

// Controls
import RadiobuttonGroup from "@/components/inputs/radiobutton/RadiobuttonGroup.vue";
import Text from "@/components/inputs/text/Text.vue";
import Toggle from "@/components/inputs/checkbox/Toggle.vue";

const buttonVariants = [
  { label: "Primary", value: "primary" },
  { label: "Secondary", value: "secondary" },
  { label: "Success", value: "success" },
  { label: "Danger", value: "danger" },
  { label: "Warning", value: "warning" },
  { label: "Info", value: "info" },
];

const buttonTypes = [
  { label: "Button", value: "button" },
  { label: "Submit", value: "submit" },
  { label: "Reset", value: "reset" },
];

const buttonSizes = [
  { label: "Small", value: "sm" },
  { label: "Medium", value: "md" },
  { label: "Large", value: "lg" },
];

const showcase = ref<InstanceType<typeof ComponentShowcase>>();

const buttonLabel = ref<string>("Button");
const buttonIcon = ref<string>("");
const buttonVariant = ref<"primary" | "secondary" | "success" | "danger" | "warning" | "info">("primary");
const buttonType = ref<"button" | "submit" | "reset">("button");
const buttonSize = ref<"sm" | "md" | "lg">("md");
const buttonStartIcon = ref<string>("");
const buttonEndIcon = ref<string>("");
const buttonDisabled = ref<boolean>(false);
const buttonFullWidth = ref<boolean>(false);

const openPane = computed((): string => showcase.value?.openPane ?? "all");
</script>

<template>
  <ComponentShowcase ref="showcase" title="Button" description="Buttons are used to trigger actions in the application.">
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
      <Text v-model="buttonLabel" label="Label" :disabled="openPane !== 'single'" />
      <Text v-model="buttonIcon" label="Icon" :disabled="openPane !== 'single'" />
      <RadiobuttonGroup v-model="buttonVariant" :options="buttonVariants" :disabled="openPane !== 'single'" label="Variant" group="button-variant" inline />
      <RadiobuttonGroup v-model="buttonType" :options="buttonTypes" :disabled="openPane !== 'single'" label="Type" group="button-type" inline />
      <RadiobuttonGroup v-model="buttonSize" :options="buttonSizes" :disabled="openPane !== 'single'" label="Size" group="button-size" inline />
      <div class="flex gap-x-2">
        <Text v-model="buttonStartIcon" label="Start Icon" :disabled="openPane !== 'single'" class="flex-1" />
        <Text v-model="buttonEndIcon" label="End Icon" :disabled="openPane !== 'single'" class="flex-1" />
      </div>
      <Toggle v-model="buttonDisabled" label="Disabled" :disabled="openPane !== 'single'" />
      <Toggle v-model="buttonFullWidth" label="Full Width" :disabled="openPane !== 'single'" />
    </template>
  </ComponentShowcase>
</template>
