import type { Meta, StoryObj } from "@storybook/vue3";
import Spinner from "./Spinner.vue";

const meta: any = {
  title: "Components/Spinner",
  component: Spinner,
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
    appearance: {
      control: "select",
      options: ["circle", "bars", "dots"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    contrast: {
      control: "boolean",
    },
  },
  args: {
    variant: "primary",
    appearance: "cirlce",
    size: "md",
    contrast: false,
  },
} satisfies Meta<typeof meta>;
export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The spinner in it's circle appearance.
 */
export const Circle: Story = {
  args: {
    variant: "primary",
    appearance: "circle",
    size: "md",
    contrast: false,
  },
};

/**
 * The spinner in it's bars appearance.
 */
export const Bars: Story = {
  args: {
    variant: "primary",
    appearance: "bars",
    size: "md",
    contrast: false,
  },
};

/**
 * The spinner in it's dots appearance.
 */
export const Dots: Story = {
  args: {
    variant: "primary",
    appearance: "dots",
    size: "md",
    contrast: false,
  },
};
