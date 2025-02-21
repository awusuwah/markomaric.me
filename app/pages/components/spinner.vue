<script setup lang="ts">
import ComponentShowcase from "@/components/componentShowcase/ComponentShowcase.vue";
import Spinner from "@/components/loading/Spinner.vue";
</script>

<template>
  <ComponentShowcase title="Spinner" description="Spinners are used to indicate that an action is in progress.">
    <section class="flex gap-x-4">
      <Spinner type="circle" variant="primary" />
      <Spinner type="bars" variant="primary" />
      <Spinner type="dots" variant="primary" />

      <Spinner type="circle" variant="primary" contrast />
      <Spinner type="bars" variant="primary" contrast />
      <Spinner type="dots" variant="primary" contrast />
    </section>

    <section class="flex gap-x-4">
      <Spinner type="circle" variant="secondary" />
      <Spinner type="bars" variant="secondary" />
      <Spinner type="dots" variant="secondary" />

      <Spinner type="circle" variant="secondary" contrast />
      <Spinner type="bars" variant="secondary" contrast />
      <Spinner type="dots" variant="secondary" contrast />
    </section>

    <section class="flex gap-x-4">
      <Spinner type="circle" variant="success" />
      <Spinner type="bars" variant="success" />
      <Spinner type="dots" variant="success" />

      <Spinner type="circle" variant="success" contrast />
      <Spinner type="bars" variant="success" contrast />
      <Spinner type="dots" variant="success" contrast />
    </section>

    <section class="flex gap-x-4">
      <Spinner type="circle" variant="danger" />
      <Spinner type="bars" variant="danger" />
      <Spinner type="dots" variant="danger" />

      <Spinner type="circle" variant="danger" contrast />
      <Spinner type="bars" variant="danger" contrast />
      <Spinner type="dots" variant="danger" contrast />
    </section>

    <section class="flex gap-x-4">
      <Spinner type="circle" variant="warning" />
      <Spinner type="bars" variant="warning" />
      <Spinner type="dots" variant="warning" />

      <Spinner type="circle" variant="warning" contrast />
      <Spinner type="bars" variant="warning" contrast />
      <Spinner type="dots" variant="warning" contrast />
    </section>

    <section class="flex gap-x-4">
      <Spinner type="circle" variant="info" />
      <Spinner type="bars" variant="info" />
      <Spinner type="dots" variant="info" />

      <Spinner type="circle" variant="info" contrast />
      <Spinner type="bars" variant="info" contrast />
      <Spinner type="dots" variant="info" contrast />
    </section>
  </ComponentShowcase>
</template>
