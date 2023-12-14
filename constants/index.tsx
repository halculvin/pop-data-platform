import { SideNavItem } from '@/types';
import { OverviewIcon, SubscriptionsIcon, AnalyticsIcon,
    MessagesIcon, CollapseIcon, LogoIcon, LogoutIcon, HelpIcon } from '@/public/icons'


export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Overview',
    path: '/overview',
    icon: OverviewIcon,
  },
  {
    title: 'Subscription(s)',
    path: '/subscriptions',
    icon: SubscriptionsIcon,
  },  
  {
    title: 'Analytics',
    path: '/analytics',
    icon: AnalyticsIcon,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: MessagesIcon,    
  },
  {
    title: 'Help',
    path: '/help',
    icon: HelpIcon,
  },
];
