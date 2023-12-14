export type SideNavItem = {
    title: string;
    path: string;
    icon?: React.FC;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
  };