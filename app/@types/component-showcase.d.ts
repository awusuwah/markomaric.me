export interface ComponentShowcaseProps {
  title: string;
  description?: string;
}

export interface ComponentShowcaseSlots {
  default?: {};
  description?: { description?: string };
  controls?: {};
}
