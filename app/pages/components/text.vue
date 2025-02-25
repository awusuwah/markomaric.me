<script setup lang="ts">
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Text from "@/components/inputs/text/Text.vue";
import NewText from "@/components/inputs/text/NewText.vue";
import { componentText } from "@/data/components";

// Controls
import RadiobuttonGroup from "@/components/inputs/radiobutton/RadiobuttonGroup.vue";
import Toggle from "@/components/inputs/checkbox/Toggle.vue";

// Control state
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
</script>

<template>
  <ComponentShowcase ref="showcase" title="Text" description="Text is used to display text in the application." component="text">
    <section class="flex gap-x-4">
      <NewText v-model="textModel" label="Default" />
      <NewText v-model="textModel" label="Default" start-icon="fire-line" end-icon="arrow-down-s-line" />
      <NewText v-model="textModel" label="Default" disabled />
      <NewText v-model="textModel" label="Default" disabled start-icon="fire-line" end-icon="arrow-down-s-line" />
    </section>

    <section class="flex gap-x-4">
      <NewText v-model="textModel" label="Success" variant="success" />
      <NewText v-model="textModel" label="Success" variant="success" start-icon="fire-line" end-icon="arrow-down-s-line" />
      <NewText v-model="textModel" label="Success" variant="success" disabled />
      <NewText v-model="textModel" label="Success" variant="success" disabled start-icon="fire-line" end-icon="arrow-down-s-line" />
    </section>

    <section class="flex gap-x-4">
      <NewText v-model="textModel" label="Danger" variant="danger" />
      <NewText v-model="textModel" label="Danger" variant="danger" start-icon="fire-line" end-icon="arrow-down-s-line" />
      <NewText v-model="textModel" label="Danger" variant="danger" disabled />
      <NewText v-model="textModel" label="Danger" variant="danger" disabled start-icon="fire-line" end-icon="arrow-down-s-line" />
    </section>

    <section class="flex gap-x-4">
      <NewText v-model="textModel" label="Warning" variant="warning" />
      <NewText v-model="textModel" label="Warning" variant="warning" start-icon="fire-line" end-icon="arrow-down-s-line" />
      <NewText v-model="textModel" label="Warning" variant="warning" disabled />
      <NewText v-model="textModel" label="Warning" variant="warning" disabled start-icon="fire-line" end-icon="arrow-down-s-line" />
    </section>

    <section class="flex gap-x-4">
      <NewText v-model="textModel" label="Info" variant="info" />
      <NewText v-model="textModel" label="Info" variant="info" start-icon="fire-line" end-icon="arrow-down-s-line" />
      <NewText v-model="textModel" label="Info" variant="info" disabled />
      <NewText v-model="textModel" label="Info" variant="info" disabled start-icon="fire-line" end-icon="arrow-down-s-line" />
    </section>

    <template #single>
      <NewText
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

    <template #controls="{ disabled }">
      <Text v-model="textLabel" label="Label" :disabled="disabled" />
      <Text v-model="textPlaceholder" label="Placeholder" :disabled="disabled" />
      <div class="flex gap-x-2">
        <Text v-model="textStartIcon" label="Start Icon" :disabled="disabled" class="flex-1" />
        <Text v-model="textEndIcon" label="End Icon" :disabled="disabled" class="flex-1" />
      </div>
      <RadiobuttonGroup v-model="textType" label="Type" :options="componentText.types" :disabled="disabled" group="text-type" inline />
      <RadiobuttonGroup v-model="textVariant" label="Variant" :options="componentText.variants" :disabled="disabled" group="text-variant" inline />
      <Toggle v-model="textDisabled" label="Disabled" :disabled="disabled" />
      <Toggle v-model="textReadonly" label="Readonly" :disabled="disabled" />
    </template>
  </ComponentShowcase>
</template>
