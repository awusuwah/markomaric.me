<script setup lang="ts">
import { ref } from "vue";

// State
const isMenuOpen = ref(false);

/**
 * Toggle the menu open state.
 */
const toggleMenuOpen = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div
    class="relative flex flex-col w-14 p-4 flex-grow rounded-lg bg-sky-800 transition-all"
    :class="{
      'w-64': isMenuOpen,
      'w-14': !isMenuOpen,
    }"
  >
    <div
      class="h-full w-6 flex flex-grow"
      :class="{
        'items-end justify-start': isMenuOpen,
        'items-end justify-center': !isMenuOpen,
      }"
    >
      <button class="relative">
        <fa-icon :icon="['far', 'circle-user']" class="text-white w-6 h-6" />
        <transition name="fade" mode="out-in">
          <p
            v-if="isMenuOpen"
            class="absolute left-8 top-0.5 text-white font-semibold"
          >
            User
          </p>
        </transition>
      </button>
    </div>

    <!-- Button to toggle the navigation -->
    <button
      class="absolute right-0 bottom-16 px-3 py-1 border border-gray-500 rounded-l hover:bg-sky-900 transition-all"
      @click="toggleMenuOpen"
    >
      <fa-icon
        :icon="isMenuOpen ? ['fas', 'chevron-left'] : ['fas', 'chevron-right']"
        class="text-gray-500"
      />
    </button>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter.fade-enter-active {
  transition: opacity 0.2s; /* Duration for fade in */
}

.fade-leave.fade-leave-active {
  transition: opacity 0.2s; /* Duration for fade out */
}
</style>
