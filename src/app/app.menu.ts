import { MenuItem } from '../dashboard/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
  {
    text: 'About Me',
    icon: 'fa-user',
    route: '/aboutMe',
    submenu: null
  },
  {
    text: 'Projects',
    icon: 'fa-cogs',
    route: '/projects',
    submenu: null
  },
  {
    text: 'Contact Me',
    icon: 'fa-address-card-o',
    route: '/contactMe',
    submenu: null
  }
]
