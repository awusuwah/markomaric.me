<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import type { NavigationProps } from "@/@types/navigation.d.ts";

const props = withDefaults(defineProps<NavigationProps>(), {});

const expanded = ref(false);
const { navigationExpanded } = useNavigation();

/**
 * The classes which are applied to the link element.
 */
const linkClasses = computed(
  (): Record<string, boolean> => ({
    "flex flex-row items-center justify-between gap-x-2 h-14 px-4 transition-colors": true,
    "group-hover:bg-gray-700 group-hover:text-acc": true,
    "bg-gray-700": expanded.value && navigationExpanded.value,
  }),
);
</script>

<template>
  <div class="group">
    <NuxtLink :to="item.to" :class="linkClasses">
      <div class="flex flex-row items-center gap-x-2">
        <Icon :icon="item.icon" size="lg" class="relative right-1" />
        <transition name="fade">
          <span v-if="navigationExpanded" class="transition-opacity duration-200">{{ item.label }}</span>
        </transition>
      </div>

      <button
        v-if="navigationExpanded && item.items"
        class="invisible grid h-fit cursor-pointer place-items-center rounded-md p-1 group-hover:visible hover:bg-gray-600"
        @click.prevent="expanded = !expanded"
      >
        <Icon :icon="expanded ? 'arrow-up-s-line' : 'arrow-down-s-line'" size="sm" />
      </button>
    </NuxtLink>

    <ul v-if="expanded && navigationExpanded" class="flex flex-col gap-y-2 bg-gray-700 pb-4">
      <li v-for="subItem in item.items" class="ml-6 flex flex-row items-center gap-x-2 text-sm text-gray-400">
        <NuxtLink :to="subItem.to" class="flex flex-row items-center gap-x-2 hover:text-acc">
          <Icon :icon="subItem.icon" size="sm" />
          {{ subItem.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-100;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

.fade-enter-to,
.fade-leave-from {
  @apply opacity-100;
}
</style>
