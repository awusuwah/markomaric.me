export interface ComponentShowcaseProps {
  title: string;
  description?: string;
  component: string;
}

export interface ComponentShowcaseSlots {
  default?: {};
  description?: { description?: string };
  controls?: { disabled: boolean };
  single?: {};
  docs?: {};
  code?: {};
}

export type Pane = "all" | "single" | "docs" | "code";
