export interface NewTextProps {
  modelValue: string;
  label: string;
  type?: "text" | "email" | "password" | "number";
  variant?: "default" | "success" | "danger" | "warning" | "info";
  startIcon?: string;
  endIcon?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

export interface NewTextEmits {
  (e: "update:modelValue", value: string): void;
  (e: "click:addon"): void;
  (e: "focus", event: FocusEvent): void;
  (e: "blur", event: FocusEvent): void;
}

export interface NewTextSlots {
  label?: { label?: string };
  start?: { icon?: string };
  end?: { icon?: string };
}
