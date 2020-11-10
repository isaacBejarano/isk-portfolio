import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// pages - routes
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LgpdComponent } from './pages/lgpd/lgpd.component';
import { ErrorComponent } from './pages/error/error.component';
// shared components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FollowComponent } from './shared/follow/follow.component';
import { ScrollComponent } from './shared/scroll/scroll.component';
// unique components
import { MasterheadComponent } from './pages/home/masterhead/masterhead.component';
import { FeaturedComponent } from './pages/home/featured/featured.component';
import { PortfolioComponent } from './pages/home/portfolio/portfolio.component';
import { PrivacyEsComponent } from './pages/lgpd/privacy-es/privacy-es.component';
import { PrivacyEnComponent } from './pages/lgpd/privacy-en/privacy-en.component';
import { PortfolioItemComponent } from './pages/home/portfolio/portfolio-item/portfolio-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LgpdComponent,
    ErrorComponent,
    NavbarComponent,
    FooterComponent,
    ScrollComponent,
    MasterheadComponent,
    FeaturedComponent,
    PortfolioComponent,
    FollowComponent,
    PrivacyEsComponent,
    PrivacyEnComponent,
    PortfolioItemComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
