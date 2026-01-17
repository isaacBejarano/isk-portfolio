import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';

const Brand = 'Isaac Bejarano';
export const routes: Routes = [
  {
    title: `${Brand} | Portfolio`,
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, // redirect
  { title: `${Brand} | Home`, path: 'home', component: HomeComponent }, // eager
  {
    title: `${Brand} | Page Not Found`,
    path: '**',
    loadComponent: () =>
      import('@app/pages/error/error.component').then((m) => m.ErrorComponent), // lazy
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
