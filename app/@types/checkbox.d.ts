export interface CheckboxProps {
  modelValue: boolean;
  label?: string;
  variant?: "default" | "success" | "danger" | "warning" | "info";
  disabled?: boolean;
}

export interface CheckboxEmits {
  (e: "update:modelValue", value: boolean): void;
}

export interface CheckboxSlots {
  label?: { label?: string };
  default?: {};
}
