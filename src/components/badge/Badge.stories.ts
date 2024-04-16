import type { StoryObj } from "@storybook/vue3";
import Badge from "./Badge.vue";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "slate",
        "gray",
        "zinc",
        "neutral",
        "stone",
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
        "white",
        "black",
      ],
    },
    label: {
      control: "text",
    },
    dismissable: {
      control: "boolean",
    },
  },
  args: {
    variant: "primary",
    label: "Badge",
    dismissable: false,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The primary variant of the badge.
 */
export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

/**
 * The secondary variant of the badge.
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

/**
 * The neutral variant of the badge.
 */
export const Neutral: Story = {
  args: {
    variant: "neutral",
  },
};
