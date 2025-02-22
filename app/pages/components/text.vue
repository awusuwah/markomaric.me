<script setup lang="ts">
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Text from "@/components/inputs/text/Text.vue";

// Controls
import RadiobuttonGroup from "@/components/inputs/radiobutton/RadiobuttonGroup.vue";
import Toggle from "@/components/inputs/checkbox/Toggle.vue";
import { componentText } from "@/data/components";

const textModel = ref<string>("");
const textLabel = ref<string>("Text");
const textPlaceholder = ref<string>("Enter text");
const textType = ref<"text" | "email" | "password" | "number">("text");
const textVariant = ref<"default" | "success" | "danger" | "warning" | "info">("default");
const textStartIcon = ref<string>("fire-line");
const textEndIcon = ref<string>("fire-line");
const textDisabled = ref<boolean>(false);
const textReadonly = ref<boolean>(false);

const showcase = ref<InstanceType<typeof ComponentShowcase>>();
const controlsDisabled = computed((): boolean => {
  const pane = showcase.value?.openPane ?? "all";
  return pane !== "single";
});
</script>

<template>
  <ComponentShowcase ref="showcase" title="Text" description="Text is used to display text in the application." component="text">
    <section class="flex gap-x-4">
      <Text v-model="textModel" label="Default" />
      <Text v-model="textModel" label="Default" start-icon="fire-line" end-icon="fire-line" />
      <Text v-model="textModel" label="Default" disabled />
      <Text v-model="textModel" label="Default" disabled start-icon="fire-line" end-icon="fire-line" />
    </section>

    <section class="flex gap-x-4">
      <Text v-model="textModel" label="Success" variant="success" />
      <Text v-model="textModel" label="Success" variant="success" start-icon="fire-line" end-icon="fire-line" />
      <Text v-model="textModel" label="Success" variant="success" disabled />
      <Text v-model="textModel" label="Success" variant="success" disabled start-icon="fire-line" end-icon="fire-line" />
    </section>

    <section class="flex gap-x-4">
      <Text v-model="textModel" label="Danger" variant="danger" />
      <Text v-model="textModel" label="Danger" variant="danger" start-icon="fire-line" end-icon="fire-line" />
      <Text v-model="textModel" label="Danger" variant="danger" disabled />
      <Text v-model="textModel" label="Danger" variant="danger" disabled start-icon="fire-line" end-icon="fire-line" />
    </section>

    <section class="flex gap-x-4">
      <Text v-model="textModel" label="Warning" variant="warning" />
      <Text v-model="textModel" label="Warning" variant="warning" start-icon="fire-line" end-icon="fire-line" />
      <Text v-model="textModel" label="Warning" variant="warning" disabled />
      <Text v-model="textModel" label="Warning" variant="warning" disabled start-icon="fire-line" end-icon="fire-line" />
    </section>

    <section class="flex gap-x-4">
      <Text v-model="textModel" label="Info" variant="info" />
      <Text v-model="textModel" label="Info" variant="info" start-icon="fire-line" end-icon="fire-line" />
      <Text v-model="textModel" label="Info" variant="info" disabled />
      <Text v-model="textModel" label="Info" variant="info" disabled start-icon="fire-line" end-icon="fire-line" />
    </section>

    <template #single>
      <Text
        v-model="textModel"
        :label="textLabel"
        :placeholder="textPlaceholder"
        :type="textType"
        :variant="textVariant"
        :start-icon="textStartIcon"
        :end-icon="textEndIcon"
        :disabled="textDisabled"
        :read-only="textReadonly"
      />
    </template>

    <template #controls>
      <Text v-model="textLabel" label="Label" :disabled="controlsDisabled" />
      <Text v-model="textPlaceholder" label="Placeholder" :disabled="controlsDisabled" />
      <div class="flex gap-x-2">
        <Text v-model="textStartIcon" label="Start Icon" :disabled="controlsDisabled" class="flex-1" />
        <Text v-model="textEndIcon" label="End Icon" :disabled="controlsDisabled" class="flex-1" />
      </div>
      <RadiobuttonGroup v-model="textType" label="Type" :options="componentText.types" :disabled="controlsDisabled" group="text-type" inline />
      <RadiobuttonGroup v-model="textVariant" label="Variant" :options="componentText.variants" :disabled="controlsDisabled" group="text-variant" inline />
      <Toggle v-model="textDisabled" label="Disabled" :disabled="controlsDisabled" />
      <Toggle v-model="textReadonly" label="Readonly" :disabled="controlsDisabled" />
    </template>
  </ComponentShowcase>
</template>
