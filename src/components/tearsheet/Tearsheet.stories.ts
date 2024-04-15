import type { StoryObj } from "@storybook/vue3";

import Button from "../button/Button.vue";
import Tearsheet from "./Tearsheet.vue";

const meta = {
  title: "Components/Tearsheet",
  component: Tearsheet,
  tags: ["autodocs"],
  argTypes: {
    modelValue: {
      control: "boolean",
    },
    title: {
      control: "text",
    },
    closeTitle: {
      control: "text",
    },
    closeText: {
      control: "text",
    },
    submitLabel: {
      control: "text",
    },
    noCloseWarning: {
      control: "boolean",
    },
  },
  args: {
    modelValue: false,
    title: "Tearsheet",
    noCloseWarning: false,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    modelValue: false,
  },
  render: (args) => ({
    components: { Button, Tearsheet },
    setup() {
      return { args };
    },
    data() {
      return {
        open: args.modelValue ?? false,
      };
    },
    template: `
      <div>
        <Button variant="primary" label="Open Tearsheet" @click="open = true" />

        <Tearsheet v-bind="args" v-model="open" />
      </div>
    `,
  }),
};
