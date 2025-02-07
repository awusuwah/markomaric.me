export interface CheckboxProps {
  modelValue: boolean;
  label?: string;
  variant?: "default" | "success" | "danger" | "warning" | "info";
  disabled?: boolean;
}

export interface CheckboxEmits {
  "update:modelValue": [boolean];
}