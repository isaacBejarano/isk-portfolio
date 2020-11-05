import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { MasterheadComponent } from './masterhead/masterhead.component';
// import { FeaturedComponent } from './featured/featured.component';
// import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // children: [
    //   {
    //     path: 'featured',
    //     component: ErrorComponent,
    //   },
    // ],
  },
  // {
  //   path: '#:ida',
  //   component: HomeComponent,
  // },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    // pathMatch: 'full',
    // redirectTo: '', // wrong URL redirect
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
