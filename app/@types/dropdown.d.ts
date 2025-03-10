export interface DropdownProps {
  modelValue: string;
  label: string;
  options: { label: string; value: string; icon?: string; disabled?: boolean }[];
  variant?: "default" | "success" | "danger" | "warning" | "info";
  startIcon?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

export interface DropdownEmits {
  (e: "update:modelValue", value: string): void;
}

export interface DropdownSlots {}
