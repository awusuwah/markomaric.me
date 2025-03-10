<script setup lang="ts">
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Dropdown from "@/components/inputs/dropdown/Dropdown.vue";
import { componentDropdown } from "@/data/components";

// Control state
const dropdownModel = ref<string>("");

const showcase = ref<InstanceType<typeof ComponentShowcase>>();
</script>

<template>
  <ComponentShowcase ref="showcase" title="Dropdown" component="dropdown">
    <section class="flex gap-x-4">
      <Dropdown v-model="dropdownModel" :options="componentDropdown.options" label="Default" />
    </section>
  </ComponentShowcase>
</template>
