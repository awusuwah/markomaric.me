export interface ButtonProps {
  label?: string | number;
  icon?: string;
  variant?: "primary" | "secondary" | "success" | "danger";
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  prefixIcon?: string;
  suffixIcon?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}