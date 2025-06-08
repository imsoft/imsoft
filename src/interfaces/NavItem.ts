export interface NavItem {
  name: string;
  href: string;
}

export interface HeaderProps {
  navItems: readonly NavItem[];
  lang: string;
}
