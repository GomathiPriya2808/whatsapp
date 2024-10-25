import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'status',
    loadComponent: () => import('./status/status.page').then( m => m.StatusPage)
  },
  {
    path: 'chat',
    loadComponent: () => import('./chat/chat.page').then( m => m.ChatPage)
  },
  {
    path: 'communities',
    loadComponent: () => import('./communities/communities.page').then( m => m.CommunitiesPage)
  },
  {
    path: 'calls',
    loadComponent: () => import('./calls/calls.page').then( m => m.CallsPage)
  },
  {
    path: 'archieved',
    loadComponent: () => import('./archieved/archieved.page').then( m => m.ArchievedPage)
  },
];
