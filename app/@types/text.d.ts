export interface TextProps {
  modelValue: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  variant?: "default" | "success" | "danger" | "warning" | "info";
  startIcon?: string;
  endIcon?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

export interface TextEmits {
  "update:modelValue": [string];
  blur: [Event];
  focus: [Event];
  keydown: [Event];
  keyup: [Event];
  keypress: [Event];
  change: [Event];
  paste: [Event];
}

export interface TextSlots {
  start?: { icon?: string };
  end?: { icon?: string };
  label?: { label?: string };
}
