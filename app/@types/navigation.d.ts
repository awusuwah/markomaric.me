export interface NavigationProps {
  item: NavigationItem;
}

interface NavigationItem {
  label: string;
  icon: string;
  to: string;
  items?: NavigationItem[];
}
