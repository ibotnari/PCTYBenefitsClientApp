import { NbMenuItem } from '@nebular/theme';

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
  },
  {
    title: 'Benefits',
    icon: 'gift-outline',
    link: '/pages/benefits',
    home: true,
  },
  {
    title: 'Discounts',
    icon: 'people-outline',
    link: '/pages/discounts',
    home: true,
  },
];
