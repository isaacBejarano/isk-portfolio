import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Error } from './pages/error/error';

const Brand = 'Isaac Bejarano';
export const routes: Routes = [
  {
    title: `${Brand} | Portfolio`,
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, // redirect
  { title: `${Brand} | Home`, path: 'home', component: Home }, // eager
  {
    title: `${Brand} | Page Not Found`,
    path: '**',
    loadComponent: () => import('@app/pages/error/error').then((m) => m.Error), // lazy
  },
  {
    path: '**',
    component: Error,
  },
];
