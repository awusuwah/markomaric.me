<script setup lang="ts">
import Button from "@/components/button/Button.vue";
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Modal from "@/components/modal/Modal.vue";

// Controls
import RadiobuttonGroup from "@/components/inputs/radiobutton/RadiobuttonGroup.vue";
import Text from "@/components/inputs/text/Text.vue";
import { componentModal } from "@/data/components";
const modalDefault = ref<InstanceType<typeof Modal>>();
const modalSuccess = ref<InstanceType<typeof Modal>>();
const modalDanger = ref<InstanceType<typeof Modal>>();
const modalWarning = ref<InstanceType<typeof Modal>>();
const modalInfo = ref<InstanceType<typeof Modal>>();
const modalSingle = ref<InstanceType<typeof Modal>>();

const modalTitle = ref<string>("Modal Title");
const modalVariant = ref<"default" | "success" | "danger" | "warning" | "info">("default");

const showcase = ref<InstanceType<typeof ComponentShowcase>>();
const controlsDisabled = computed((): boolean => {
  const pane = showcase.value?.openPane ?? "all";
  return pane !== "single";
});
</script>

<template>
  <ComponentShowcase ref="showcase" title="Modal" description="Modals are used to display content in a modal dialog." component="modal">
    <section class="flex gap-x-4">
      <Button variant="neutral" @click="() => modalDefault?.openModal()">Open Modal</Button>
      <Button variant="success" @click="() => modalSuccess?.openModal()">Open Success Modal</Button>
      <Button variant="danger" @click="() => modalDanger?.openModal()">Open Danger Modal</Button>
      <Button variant="warning" @click="() => modalWarning?.openModal()">Open Warning Modal</Button>
      <Button variant="info" @click="() => modalInfo?.openModal()">Open Info Modal</Button>
    </section>

    <Modal ref="modalDefault" title="Modal Title">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit.
        Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam,
        quos consectetur adipisicing elit. Quisquam, quos
      </p>
    </Modal>

    <Modal ref="modalSuccess" title="Success Modal" variant="success">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit.
        Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam,
        quos consectetur adipisicing elit. Quisquam, quos
      </p>
    </Modal>

    <Modal ref="modalDanger" title="Danger Modal" variant="danger">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit.
        Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam,
        quos consectetur adipisicing elit. Quisquam, quos
      </p>
    </Modal>

    <Modal ref="modalWarning" title="Warning Modal" variant="warning">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit.
        Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam,
        quos consectetur adipisicing elit. Quisquam, quos
      </p>
    </Modal>

    <Modal ref="modalInfo" title="Info Modal" variant="info">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit.
        Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam,
        quos consectetur adipisicing elit. Quisquam, quos
      </p>
    </Modal>

    <template #single>
      <Button variant="neutral" @click="modalSingle?.openModal">Open Modal</Button>
      <Modal ref="modalSingle" :title="modalTitle" :variant="modalVariant">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing
          elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit. Quisquam, quos consectetur adipisicing elit.
          Quisquam, quos consectetur adipisicing elit. Quisquam, quos
        </p>
      </Modal>
    </template>

    <template #controls>
      <Text v-model="modalTitle" label="Title" :disabled="controlsDisabled" />
      <RadiobuttonGroup v-model="modalVariant" label="Variant" :options="componentModal.variants" :disabled="controlsDisabled" group="modal-variant" inline />
    </template>
  </ComponentShowcase>
</template>
