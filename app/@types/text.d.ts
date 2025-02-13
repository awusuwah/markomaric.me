export interface TextProps {
  modelValue: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  variant?: "default" | "success" | "danger" | "warning" | "info";
  prefixIcon?: string;
  suffixIcon?: string;
  disabled?: boolean;
}

export interface TextEmits {
  "update:modelValue": [string];
}
