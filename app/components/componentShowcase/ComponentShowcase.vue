<script setup lang="ts">
import Button from "@/components/button/Button.vue";
import Card from "@/components/card/Card.vue";
import type { ComponentShowcaseProps, ComponentShowcaseSlots } from "@/@types/component-showcase.d";

const slots = defineSlots<ComponentShowcaseSlots>();
const props = withDefaults(defineProps<ComponentShowcaseProps>(), {
  description: undefined,
});

const openPane = ref<"all" | "single">("all");

defineExpose({
  openPane,
});
</script>

<template>
  <div class="flex h-[calc(100vh-2rem)] w-full flex-col gap-y-4">
    <Card :title="props.title">
      <slot name="description" :description="props.description">
        <p v-if="props.description">{{ props.description }}</p>
      </slot>
    </Card>

    <Card class="relative flex-1">
      <div class="flex h-full flex-col items-center justify-center gap-4">
        <slot v-if="openPane === 'all'" />
        <slot v-else-if="openPane === 'single'" name="single" />
      </div>

      <!-- Pane selection controls -->
      <div class="absolute top-2 left-2 flex flex-row gap-x-2">
        <Button :variant="openPane === 'all' ? 'primary' : 'info'" @click="openPane = 'all'">All</Button>
        <Button :variant="openPane === 'single' ? 'primary' : 'info'" @click="openPane = 'single'">Single</Button>
      </div>
    </Card>

    <Card title="Controls">
      <div class="flex flex-col gap-y-2">
        <slot name="controls" />
      </div>
    </Card>
  </div>
</template>
