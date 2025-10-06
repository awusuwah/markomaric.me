<script setup lang="ts">
import Card from "@/components/Card.vue";
import Icon from "@/components/Icon.vue";

import { bookmarks, frontends } from "@/data/work";
</script>

<template>
  <section class="h-screen grid place-items-center">
    <div class="flex flex-col gap-4">
      <Card title="Interhome Group" icon="firework-fill">
        <div class="grid grid-cols-3 gap-4">
          <a
            v-for="bookmark in bookmarks"
            :href="bookmark.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 bg-bgr-light rounded-md w-64 p-4 hover:bg-acc"
          >
            <Icon :icon="bookmark.icon" class="text-2xl" />
            <span>{{ bookmark.title }}</span>
          </a>
        </div>
      </Card>

      <Card title="Frontends" icon="code-line">
        <div class="grid grid-cols-3 gap-4">
          <a
            v-for="frontend in frontends"
            :href="frontend.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 bg-bgr-light rounded-md w-64 p-4 hover:bg-acc"
          >
            <Icon :icon="frontend.icon" class="text-2xl" />
            <span>{{ frontend.title }}</span>
          </a>
        </div>
      </Card>
    </div>
  </section>

  <button
    class="absolute bottom-4 left-4 bg-acc hover:bg-acc-hover active:bg-acc-active rounded-full p-3 grid place-items-center text-white"
  >
    <Icon icon="plus-fill" class="text-2xl" />
  </button>
</template>
