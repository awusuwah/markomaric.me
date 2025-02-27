export interface TextProps {
  modelValue: string;
  label: string;
  type?: "text" | "email" | "password" | "number";
  variant?: "default" | "success" | "danger" | "warning" | "info";
  startIcon?: string;
  endIcon?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

export interface TextEmits {
  (e: "update:modelValue", value: string): void;
}

export interface TextSlots {
  label?: { label?: string };
  start?: { icon?: string };
  end?: { icon?: string };
}
