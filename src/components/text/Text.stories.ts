import type { StoryObj } from "@storybook/vue3";
import Text from "./Text.vue";

const meta = {
  title: "Components/Text",
  component: Text,
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
    id: {
      control: "text",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url"],
    },
  },
  args: {
    label: "Firstname",
    state: "idle",
    modelValue: "",
    errorMessage: "Firstname is required",
    id: "firstname",
    type: "text",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default variant of the text input.
 */
export const Default: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    data() {
      return {
        firstname: args.modelValue ?? "",
      };
    },
    template: `
      <Text v-bind="args" v-model="firstname" />
    `,
  }),
};

/**
 * The success variant of the text input.
 */
export const Success: Story = {
  args: {
    state: "success",
  },
};

/**
 * The error variant of the text input.
 */
export const Error: Story = {
  args: {
    state: "error",
  },
};
