<script setup lang="ts">
import Menu from "@/components/menu/Menu.vue";
import Text from "@/components/inputs/text/Text.vue";
import type { DropdownProps, DropdownEmits, DropdownSlots } from "@/@types/dropdown.d.ts";

const emit = defineEmits<DropdownEmits>();
const slots = defineSlots<DropdownSlots>();
const props = withDefaults(defineProps<DropdownProps>(), {
  variant: "default",
  startIcon: undefined,
  disabled: false,
  readOnly: false,
});

const menu = ref<InstanceType<typeof Menu>>();

const dropdownKey = useId("dropdown");

/**
 * Selects an option from the dropdown and closes the popover.
 */
const selectOption = (value: string): void => {
  emit("update:modelValue", value);
  menu.value?.closeMenu();
};

/**
 * The display value of the dropdown. This is the label of the option which is currently selected.
 */
const displayValue = computed((): string => {
  return props.options.find((option) => option.value === props.modelValue)?.label ?? props.modelValue;
});

/**
 * The classes which are applied to the dropdown options.
 */
const dropdownOptionClasses = computed(
  (): Record<string, boolean> => ({
    "block w-full p-2 text-left transition-colors select-none": true,
    "first:rounded-t-md last:rounded-b-md": true,

    // Disabled
    "cursor-not-allowed opacity-disabled": props.disabled,
    "cursor-pointer hover:bg-gray-800": !props.disabled,
  }),
);
</script>

<template>
  <Menu ref="menu" position="bottom-start" :id="dropdownKey">
    <template #trigger="{ classes, popovertarget }">
      <button :class="[classes, 'rounded-md']" :popovertarget="popovertarget">
        <Text
          :id="dropdownKey"
          :model-value="displayValue"
          :label="label"
          :disabled="disabled"
          :read-only="readOnly"
          :start-icon="startIcon"
          end-icon="arrow-down-s-line"
          class="pointer-events-none"
        />
      </button>
    </template>

    <template #wrapper>
      <div class="min-w-48 divide-y divide-gray-700 rounded-md border border-gray-700 bg-gray-900 text-white">
        <button v-for="option in options" :class="dropdownOptionClasses" :disabled="option.disabled" @click="selectOption(option.value)">
          <Icon v-if="option.icon" :icon="option.icon" />
          <span>{{ option.label }}</span>
        </button>
      </div>
    </template>
  </Menu>
</template>
