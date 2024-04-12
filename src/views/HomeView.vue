<script setup lang="ts">
import { ref } from "vue";

import Button from "@/components/button/Button.vue";
import Tearsheet from "@/components/tearsheet/Tearsheet.vue";

const open = ref(false);
</script>

<template>
  <main class="p-4">
    <Button variant="primary" label="Open Tearsheet" @click="open = true"></Button>

    <Tearsheet v-model="open" title="Tearsheet Title"></Tearsheet>
  </main>
</template>
