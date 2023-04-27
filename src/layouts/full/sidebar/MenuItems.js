import {
  IconDevices, IconCommand, IconLayoutDashboard, IconLogin, IconMoodHappy, IconUsers, IconUserPlus ,IconBuildingStore,IconShoppingCartPlus,IconMoped, IconBrandMeta
} from '@tabler/icons';


import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'Utilities',
  },
  {
    id: uniqueId(),
    title: 'Orders',
    icon: IconShoppingCartPlus
    ,
    href: '/orders',
  },
  {
    id: uniqueId(),
    title: 'users',
    icon: IconUsers
    ,
    href: '/ui/typography',
  },


  {
    id: uniqueId(),
    title: 'Couriers',
    icon: IconMoped
    ,
    href: '/couriers',
  },
  {
    id: uniqueId(),
    title: 'Stores',
    icon: IconBuildingStore
    ,
    href: '/Stores',
  },
  {
    id: uniqueId(),
    title: 'plats',
    icon: IconCommand,
    href: '/produits',
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: IconLogin,
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: IconUserPlus,
    href: '/auth/register',
  },
  {
    navlabel: true,
    subheader: 'Extra',
  },
  {
    id: uniqueId(),
    title: 'Profil',
    icon: IconMoodHappy,
    href: '/profil',
  },
  {
    id: uniqueId(),
    title: 'chatting',
    icon: IconBrandMeta,
    href: '/chatting',
  },
  {
    id: uniqueId(),
    title: 'category',
    icon: IconUsers
    ,
    href: '/category',
  },
  {
    id: uniqueId(),
    title: 'Menu',
    icon: IconDevices,
    href: '/sample-page',
  },
];

export default Menuitems;
