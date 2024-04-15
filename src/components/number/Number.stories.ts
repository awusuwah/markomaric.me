import type { StoryObj } from "@storybook/vue3";
import Number from "./Number.vue";

const meta = {
  title: "Components/Number",
  component: Number,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    state: {
      control: "select",
      options: ["idle", "loading", "success", "error"],
    },
    modelValue: {
      control: "number",
    },
    errorMessage: {
      control: "text",
    },
    min: {
      control: "number",
    },
    max: {
      control: "number",
    },
  },
  args: {
    label: "Pax",
    state: "idle",
    modelValue: 0,
    errorMessage: "Pax is required",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default variant of the number input.
 */
export const Default: Story = {
  args: {
    modelValue: 0,
    min: 0,
    max: 10,
  },
  render: (args) => ({
    components: { Number },
    setup() {
      return { args };
    },
    data() {
      return {
        pax: args.modelValue ?? 0,
      };
    },
    template: `
      <Number v-bind="args" v-model="pax" />
    `,
  }),
};

/**
 * The loading variant of the number input.
 */
export const Loading: Story = {
  args: {
    state: "loading",
  },
};

/**
 * The success variant of the number input.
 */
export const Success: Story = {
  args: {
    state: "success",
  },
};

/**
 * The error variant of the number input.
 */
export const Error: Story = {
  args: {
    state: "error",
  },
};
