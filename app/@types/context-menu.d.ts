import type { MenuProps, MenuItemProps } from "./menu";

export interface ContextMenuProps extends MenuProps {
  options?: MenuItemProps[];
}

export interface ContextMenuEmits {
  (e: "select", id: string): void;
}

export interface ContextMenuSlots {
  header?: {};
  footer?: {};
}
