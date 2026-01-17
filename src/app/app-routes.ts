import type { Routes } from '@angular/router';
import { Home } from '@app/home/home';

const Brand = 'Isaac Bejarano';
export const routes: Routes = [
	// redirect
	{
		title: `${Brand} | Portfolio`,
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{ title: `${Brand} | Home`, path: 'home', component: Home }, // eager
	{
		title: `${Brand} | Page Not Found`,
		path: '**',
		loadComponent: () => import('@app/p404/p404').then((m) => m.Page404), // lazy
	},
];
