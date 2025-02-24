export interface MenuProps {
  position?: "top" | "bottom" | "left" | "right";
  offset?: number;
  icon?: string;
  label?: string;
}

export interface MenuSlots {
  default?: {};
  trigger?: { icon: string; classes: string; popovertarget: string };
  wrapper?: {};
}

export interface MenuItemProps {
  id: string;
  to?: string;
  icon?: string;
  label?: string;
  disabled?: boolean;
}

export interface MenuItemEmits {
  (e: "click", key: string): void;
}

export interface MenuItemSlots {
  default?: { to?: string; label?: string; icon?: string; disabled?: boolean };
}
