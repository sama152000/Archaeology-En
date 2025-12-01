export interface MenuItem {
  label: string;
  link?: string;
  active?: boolean;
  hasSubmenu?: boolean;
  submenu?: MenuItem[];
}