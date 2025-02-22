export interface ModalProps {
  title?: string;
  variant?: "default" | "success" | "danger" | "warning" | "info";
}

export interface ModalSlots {
  header?: { title?: string };
  default?: {};
  footer?: {};
}
