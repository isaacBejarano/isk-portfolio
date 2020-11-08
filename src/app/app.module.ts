import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// pages - routes
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
// shared components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FollowComponent } from './shared/follow/follow.component';
import { ScrollComponent } from './shared/scroll/scroll.component';
// unique components
import { MasterheadComponent } from './components/masterhead/masterhead.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    NavbarComponent,
    FooterComponent,
    ScrollComponent,
    MasterheadComponent,
    FeaturedComponent,
    PortfolioComponent,
    FollowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
