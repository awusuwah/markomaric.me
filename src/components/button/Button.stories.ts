import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";

const meta: any = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "neutral"],
    },
    label: {
      control: "text",
    },
    state: {
      control: "select",
      options: ["idle", "disabled", "loading", "success", "error"],
    },
    noShake: {
      control: "boolean",
    },
  },
  args: {
    variant: "primary",
    label: "Button",
    state: "idle",
    noShake: false,
  },
} satisfies Meta<typeof meta>;
export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The primary variant of the button.
 *
 * This should be used as the main `call to action` button for the application. It should be used
 * sparingly and only when we want to draw the user's attention to a specific action. Only one primary
 * button should be visible at a time.
 */
export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Button",
    state: "idle",
    noShake: false,
  },
};

/**
 * The secondary variant of the button.
 *
 * This indicates a secondary action that the user can take, but which is more important than a neutral
 * action. It should be used for actions that are important, but not the main action on the page.
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Button",
    state: "idle",
    noShake: false,
  },
};

/**
 * The neutral variant of the button.
 *
 * This indicates a neutral action that the user can take. It should be used for actions that are not
 * important, but which the user can take if they want to. This includes things like cancel, close or
 * back buttons.
 */
export const Neutral: Story = {
  args: {
    variant: "neutral",
    label: "Button",
    state: "idle",
    noShake: true,
  },
};

/**
 * A working example of how the buttons loading state works.
 *
 * This is a simple example of how the button is best used while fully utilizing the state. When clicked,
 * the button will enter the loading state for 2 seconds, simulate a success by changing the state to `success`
 * and then revert back to the idle state.
 */
export const LoadingExample: Story = {
  args: {
    variant: "primary",
    label: "Click me",
    state: "idle",
    noShake: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    data() {
      return {
        state: "idle",
      };
    },
    methods: {
      async simulateLoading() {
        this.state = "loading";

        setTimeout(() => {
          this.state = "error";
        }, 2000);
      },
    },
    template: `
      <Button v-bind="args" :state="state" @click="simulateLoading" @update:state="state = $event" />
    `,
  }),
};