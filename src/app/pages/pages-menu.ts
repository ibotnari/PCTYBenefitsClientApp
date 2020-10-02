import { NbMenuItem } from '@nebular/theme';

export let PINNED_EMPLOYEES_MENU_ITEMS: NbMenuItem = {
  title: 'PINNED',
  expanded: true,
};
export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'ADMIN',
    group: true,
  },
  {
    title: 'Employees',
    icon: 'people-outline',
    link: '/pages/employees',
    home: true,
    children: null,
  },
  {
    title: 'Benefits',
    icon: 'award-outline',
    link: '/pages/benefits',
    home: true,
  },
  {
    title: 'Discounts',
    icon: 'gift-outline',
    link: '/pages/discounts',
    home: true,
  },
  PINNED_EMPLOYEES_MENU_ITEMS,
];

