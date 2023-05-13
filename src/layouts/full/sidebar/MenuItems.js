import {
  IconDevices, IconCommand, IconLayoutDashboard, IconLogin, IconMoodHappy, IconUsers, IconUserPlus ,IconBuildingStore,IconShoppingCartPlus,IconMoped, IconBrandMeta
} from '@tabler/icons';


import { uniqueId } from 'lodash';

const Menuitems = [


  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
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
    title: 'plats',
    icon: IconCommand,
    href: '/produits',
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
  
];

export default Menuitems;
