export interface RadiobuttonProps {
  modelValue: string;
  label?: string;
  value?: string;
  variant?: "default" | "success" | "danger" | "warning" | "info";
  disabled?: boolean;
}

export interface RadiobuttonEmits {
  "update:modelValue": [string];
}