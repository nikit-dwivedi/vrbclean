import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    url: 'dashboard/home'
  },
  {
    id: 'manage-managers',
    title: 'Manage Managers',
    translate: 'MENU.MANAGEMANAGERS',
    type: 'item',
    url: 'dashboard/manage-managers'
  },
  {
    id: 'manage-homes',
    title: 'Manage Homes',
    translate: 'MENU.MANAGEHOMES',
    type: 'item',
    url: 'dashboard/manage-homes'
  },
  {
    id: 'manage-cleaners',
    title: 'Manage Cleaners',
    translate: 'MENU.MANAGECLEANERS',
    type: 'item',
    url: 'dashboard/manage-cleaners'
  },
  {
    id: 'view-damage',
    title: 'View Damage',
    translate: 'MENU.VIEWDAMAGE',
    type: 'item',
    url: 'dashboard/view-damage'
  },
  {
    id: 'view-cleanings',
    title: 'View Cleanings',
    translate: 'MENU.VIEWCLEANINGS',
    type: 'item',
    url: 'dashboard/view-cleanings'
  },
  {
    id: 'manage-guests',
    title: 'Manage Guests',
    translate: 'MENU.MANAGEGUESTS',
    type: 'item',
    url: 'dashboard/manage-guests'
  },
  {
    id: 'ownerRez-API',
    title: 'OwnerRez API',
    translate: 'MENU.OWNERREZAPI',
    type: 'item',
    url: 'dashboard/ownerRez-API'
  },
  {
    id: 'global-settings',
    title: 'Global Settings',
    translate: 'MENU.GLOBALSETTINGS',
    type: 'item',
    url: 'dashboard/global-settings'
  },
  {
    id: 'billing-info',
    title: 'Billing Info',
    translate: 'MENU.BILLINGINFO',
    type: 'item',
    url: 'dashboard/billing-info'
  },
]
