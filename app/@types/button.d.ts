export interface ButtonProps {
  label?: string | number;
  icon?: string;
  variant?: "neutral" | "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  startIcon?: string;
  endIcon?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export interface ButtonSlots {
  start?: { icon?: string };
  end?: { icon?: string };
  default?: { label?: string | number; icon?: string };
}
