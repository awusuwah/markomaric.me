export interface RadiobuttonProps {
  modelValue: string;
  group?: string;
  label?: string;
  value?: string;
  variant?: "default" | "success" | "danger" | "warning" | "info";
  disabled?: boolean;
}

export interface RadiobuttonEmits {
  "update:modelValue": [string];
}

export interface RadiobuttonSlots {
  label?: { label?: string };
  default?: {};
}

export interface RadiobuttonGroupProps {
  modelValue: string;
  group: string;
  label?: string;
  variant?: "default" | "success" | "danger" | "warning" | "info";
  disabled?: boolean;
  inline?: boolean;
  options: { label: string; value: string; disabled?: boolean }[];
}

export interface RadiobuttonGroupEmits {
  "update:modelValue": [string];
}
