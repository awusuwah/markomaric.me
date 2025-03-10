<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import { componentItems } from "@/data/navigation";

const { navigationExpanded } = useNavigation();

const navigationItems = [
  { label: "Dashboard", icon: "dashboard-horizontal-fill", to: "/" },
  {
    label: "Components",
    icon: "puzzle-fill",
    to: "/components",
    items: componentItems,
  },
];

/**
 * The classes which are applied to the wrapper element.
 */
const asideClasses = computed(
  (): Record<string, boolean> => ({
    "relative bg-gray-800 h-[calc(100vh-2rem)] rounded-md transition-all": true,

    // Expanded
    "w-64": navigationExpanded.value,
    "w-14": !navigationExpanded.value,
  }),
);
</script>

<template>
  <aside :class="asideClasses">
    <nav class="mt-80 flex flex-col">
      <NavigationItem v-for="item in navigationItems" :item="item" />
    </nav>

    <!-- Expand/Collapse Button -->
    <button class="absolute right-0 bottom-12 grid w-8 cursor-pointer place-items-center rounded-l border-y border-l border-gray-600 py-1" @click="navigationExpanded = !navigationExpanded">
      <Icon :icon="navigationExpanded ? 'arrow-left-s-line' : 'arrow-right-s-line'" class="text-gray-400" size="md" />
    </button>
  </aside>
</template>
